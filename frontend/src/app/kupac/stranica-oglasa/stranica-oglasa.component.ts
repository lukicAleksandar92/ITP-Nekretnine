import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';
import {
  faCheck,
  faX,
  faCaretRight,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from 'src/app/login/login.component';
import { Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';
@Component({
  selector: 'app-stranica-oglasa',
  templateUrl: './stranica-oglasa.component.html',
  styleUrls: ['./stranica-oglasa.component.css'],
})
export class StranicaOglasaComponent implements OnInit {
  constructor(
    private listingService: ListingService,
    private route: ActivatedRoute
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

        // trazimo srednju vrednost na lokaciji gde je i taj oglas
        this.listingService.getAverageValue(this.listing.lokacija).then((res) => {
          // kad ga dobijemo ucitavamo ga u lokalnu promenljivu avgValue
          this.avgValue = JSON.parse(JSON.stringify(res));
          this.srednjaVrednost = this.avgValue.srednjaVrednost;
        });
      //this.avgValue = 100;
      });
      
    }
  }

  avgValue!: any;
  srednjaVrednost!: number;
  listing!: Listing;
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
}
