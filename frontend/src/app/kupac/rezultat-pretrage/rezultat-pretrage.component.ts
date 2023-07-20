import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { AverageValue, Filter, Listing } from 'src/app/models/Listing';
import { User } from 'src/app/models/User';
import { ListingService } from 'src/app/services/listing.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rezultat-pretrage',
  templateUrl: './rezultat-pretrage.component.html',
  styleUrls: ['./rezultat-pretrage.component.css'],
})
export class RezultatPretrageComponent implements OnInit {
  constructor(
    private listingService: ListingService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    // ucitavamo uslove pretrage koje smo dobiliod prethodne strane
    this.activatedRoute.queryParams.subscribe((params) => {
      this.filter.lokacija = params['lokacija'];
      this.filter.tip = params['tip'];
      this.filter.tipOglasivaca = params['tipOglasivaca'];
      this.filter.stanjeNekretnine = params['stanjeNekretnine'];
      this.filter.tipGrejanja = params['tipGrejanja'];
      // pretvaramo ovih par parametara iz stringa u broj
      // cena
      if (params['cenaOd'] != undefined)
        this.filter.cenaOd = parseFloat(params['cenaOd']);
      if (params['cenaDo'] != undefined)
        this.filter.cenaDo = parseFloat(params['cenaDo']);
      // kvadratura
      if (params['kvadraturaOd'] != undefined)
        this.filter.kvadraturaOd = parseFloat(params['kvadraturaOd']);
      if (params['kvadraturaDo'] != undefined)
        this.filter.kvadraturaDo = parseFloat(params['kvadraturaDo']);
      //broj soba
      if (params['brojSobaOd'] != undefined)
        this.filter.brojSobaOd = this.brojSobaToNum(params['brojSobaOd']);
      if (params['brojSobaDo'] != undefined)
        this.filter.brojSobaDo = this.brojSobaToNum(params['brojSobaDo']);
      // godina izgradnje
      if (params['godinaIzgradnjeOd'] != undefined)
        this.filter.godinaIzgradnjeOd = parseFloat(params['godinaIzgradnjeOd']);
      if (params['godinaIzgradnjeDo'] != undefined)
        this.filter.godinaIzgradnjeDo = parseFloat(params['godinaIzgradnjeDo']);
      //  sprat
      if (params['spratOd'] != undefined)
        this.filter.spratOd = this.spratToNum(params['spratOd']);
      if (params['spratDo'] != undefined)
        this.filter.spratDo = this.spratToNum(params['spratDo']);
      //  mesecne rezije
      if (params['mesecneRezijeOd'] != undefined)
        this.filter.mesecneRezijeOd = parseFloat(params['mesecneRezijeOd']);
      if (params['mesecneRezijeDo'] != undefined)
        this.filter.mesecneRezijeDo = parseFloat(params['mesecneRezijeDo']);
    });
    // trazimo samo oglase koji nisu prodati
    this.filter.status = 'nije prodato';
    // nakon ucitavanja filtera pravimo pretragu baze pomocu njega
    this.listingService.searchListings(this.filter).then((res) => {
      this.allListings = JSON.parse(JSON.stringify(res));
      this.allListings.reverse();
      this.load();
      // trazimo niz srednjih vrednosti grupisanih po lokaciji i tipu nekretnine
      this.listingService.getAverageValues().then((res) => {
        // kad ih dobijemo ucitavamo u lokalnu promenljivu avgValues
        this.avgValues = JSON.parse(JSON.stringify(res));
      });
    });
  }

  avgValues: AverageValue[] = [];
  
  allListings: Listing[] = [];
  filter = new Filter();

  kor_ime!: string;
  user: User = new User();
  // pretvara sprat iz number u string(za prikaz na stranici 0 -> podruim, itd...)
  spratToString(sprat: number) {
    if (sprat == -2) return 'Podrum';
    if (sprat == -1) return 'Suteren';
    if (sprat == 0) return 'Prizemlje';
    if (sprat == 31) return '30+';
    if (sprat == 32) return 'Potkrovlje';
    else return sprat.toString();
  }
  // pretvara broj soba iznumber u string
  brojSobaToNum(brojSoba: string) {
    if (brojSoba == '5+') return 6;
    else return parseFloat(brojSoba);
  }
  spratToNum(sprat: string) {
    if (sprat == 'Podrum') return -2;
    if (sprat == 'Suteren') return -1;
    if (sprat == 'Prizemlje') return 0;
    if (sprat == '30+') return 31;
    if (sprat == 'Potkrovlje') return 32;
    else return parseInt(sprat);
  }
  // racuna kolika je cena po kvadratu
  izracunavanjeCenePoKvadratu(cena: number, kvadratura:number):number {
    return Math.round(cena / kvadratura);
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
  //ukupan broj stranica
  broj_stranica: number = 0;
  //brojevi stranica koje prikazujemo u navbaru paginacije
  stranice: number[] | undefined = [];
  //broj elementa po stranici, pocetna vrednost 5
  n: number = 4;
  //elementi koje trenutno prikazujemo
  aktivna_lista: Listing[] = [];
  //stranica koju prikazujemo
  active: number = 0;
  //stranica koju prikazujemo dropdown

  izbori: number[] = [...Array(21).keys()].splice(1);
  //izbor za strnicu kojim popunjavamo dropdown menu, puni se u
  load() {
    // racunamo broj stranica
    this.broj_stranica = Math.ceil(this.allListings.length / this.n);
    // prikazujemo sadrzaj prve stranice
    this.stranice = [...Array(this.broj_stranica).keys()];

    this.change(0);
  }
  change(i: number) {
    //menjamu aktivnu listu da prikazuje oglase u odredjenom rasponu
    this.aktivna_lista = this.allListings.filter((_, index) => {
      return this.n * i <= index && index < this.n * (i + 1);
    });

    this.active = i;
  }

  //pomeraj za jedan u nazad ako nismo na prvom
  minusOne() {
    if (this.active < 1) return;
    else this.change(--this.active);
  }
  //pomeraj za jedan u napred ako nisamo na posledenjm
  plusOne() {
    if (this.active > this.broj_stranica - 2) return;
    else this.change(++this.active);
  }

  levo = faAngleLeft;
  desno = faAngleRight;
}
