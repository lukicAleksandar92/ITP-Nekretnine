import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faX, faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from 'src/app/login/login.component';
import { AverageValue, Listing } from 'src/app/models/Listing';
import { User } from 'src/app/models/User';
import { ListingService } from 'src/app/services/listing.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-stranica-oglasa',
  templateUrl: './stranica-oglasa.component.html',
  styleUrls: ['./stranica-oglasa.component.css'],
})
export class StranicaOglasaComponent implements OnInit {
  constructor(
    private listingService: ListingService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    // ucitavamo id oglasa koji prikazujemo
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      // trazimo oglas u bazi na osnovu id-a
      this.listingService.getListingById(id).then((res) => {
        // kad ga nobijemo ucitavamo ga u lokalnu promenljivu listing
        this.listing = JSON.parse(JSON.stringify(res));
        // prebacujemo neophodne elemente iz number u string (radi lepseg prikaza na stranici oglasa, npr: prizemlje umesto 0 itd...)
        this.brojSoba = this.brojSobaToString(this.listing.brojSoba);
        this.sprat = this.spratToString(this.listing.sprat);
        this.ukupnaSpratnost = this.spratToString(this.listing.ukupnaSpratnost);
        this.cenaPoKvadratu = this.izracunavanjeCenePoKvadratu(this.listing.cena, this.listing.kvadratura)

        // trazimo niz srednjih vrednosti grupisanih po lokaciji i tipu nekretnine
        this.listingService.getAverageValues().then((res) => {
          // kad ih dobijemo ucitavamo u lokalnu promenljivu avgValues
          this.avgValues = JSON.parse(JSON.stringify(res));
          this.srednjaVrednost = this.avgValuesToNumber(
            this.listing.lokacija,
            this.listing.tipNekretnine
          );
        });
      });
      //ucitavamo podatke ulogovanog korisnika
      this.userService.parseLoggedUser()?.then((res) => {
        this.user = JSON.parse(JSON.stringify(res));
      });
    }
  }
  user!: User;
  avgValues: AverageValue[] = [];
  srednjaVrednost!: number;

  listing!: Listing;
  cenaPoKvadratu!: number;
  // ikonice iz fontawesome
  left = faCaretLeft;
  right = faCaretRight;
  checkMark = faCheck;
  xMark = faX;
  // promenljiva za gledanje vise informacija o oglasivacu
  vidiVise: boolean = false;
  // pokazuje/sakriva vise informacija o oglasivacu
  vidiViseToggle() {
    this.vidiVise = !this.vidiVise;
  }
  // sve karakterstike (za ispis)
  sveKarakteristike: string[] = [
    'Terasa',
    'Podrum',
    'Internet',
    'Lodja',
    'Garaza',
    'Interfon',
    'Fr. balkon',
    'Basta',
    'Telefon',
    'Lift',
    'Klima',
  ];
  // sve linije (za ispis)
  sveLinije: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
  ];
  // posto ih prikazujemo kao string, pamtimo ih u ove promenljive
  brojSoba!: string;
  sprat!: string;
  ukupnaSpratnost!: string;
  // pretvara broj soba iz number u string
  brojSobaToString(brojSoba: number) {
    if (brojSoba == 6) return '5+';
    else return brojSoba.toString();
  }
  // pretvara sprat iz number u string
  spratToString(sprat: number) {
    if (sprat == -2) return 'Podrum';
    if (sprat == -1) return 'Suteren';
    if (sprat == 0) return 'Prizemlje';
    if (sprat == 31) return '30+';
    if (sprat == 32) return 'Potkrovlje';
    else return sprat.toString();
  }
  // racuna kolika je cena po kvadratu
  izracunavanjeCenePoKvadratu(cena: number, kvadratura:number):number {
    return Math.round(cena / kvadratura);
  }
  // prati index trenutne slike koja se pokazuje
  currentIndex: number = 0;
  // pokazuje sledecu sliku
  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.listing.slike.length;
  }
  // pokazuje prethodnu sliku
  previousImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.listing.slike.length) %
      this.listing.slike.length;
  }
  // iz nisa srednjih vrednosti dohvata onu koja odgovara zadatoj lokaciji i tipu nekretnine
  avgValuesToNumber(
    lokacija: string,
    tipNekretnine: string
  ): number {
    let rezultat: number = 0;
    for (let avgValue of this.avgValues) {
      if (
        avgValue._id.lokacija == lokacija &&
        avgValue._id.tip == tipNekretnine
      ) {
        rezultat = Math.round(avgValue.srednjaVrednost);
      }
    }
    return rezultat;
  }
  dodajUOmiljeno(id: string) {
    if (this.user.omiljeniOglasi.includes(id)) {
      alert('Ovaj glas vam je već u omiljenim oglasima!');
      return;
    }
    if (this.user.omiljeniOglasi.length > 5) {
      alert('Ne možete imati više od 5 omiljenih oglasa');
      return;
    } else {
      this.user.omiljeniOglasi.push(id);
      this.userService.updateFavoriteListing({
        kor_ime: this.user.kor_ime,
        omiljeniOglasi: this.user.omiljeniOglasi,
      });
      alert('Dodato!');
    }
  }
}
