import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-postavi-oglas',
  templateUrl: './postavi-oglas.component.html',
  styleUrls: ['./postavi-oglas.component.css'],
})
export class PostaviOglasComponent {
  constructor(private listingService: ListingService, private router: Router) {}
  lokacija!: string;
  ulica!: string;
  nazivOglasa!: string;
  tipNekretnine!: string;
  cena!: number;
  kvadratura!: number;
  brojSoba!: string;
  godinaIzgradnje!: string;
  stanjeNekretnine!: string;
  tipGrejanja!: string;
  sprat!: string;

  ukupnaSpratnost!: string;
  mesecneRezije!: number;
  opis!: string;

  lokacijaGreska: boolean = false;
  ulicaGreska: boolean = false;
  nazivOglasaGreska: boolean = false;
  tipNekretnineGreska: boolean = false;
  cenaGreska: boolean = false;
  kvadraturaGreska: boolean = false;
  brojSobaGreska: boolean = false;
  godinaIzgradnjeGreska: boolean = false;
  stanjeNekretnineGreska: boolean = false;
  tipGrejanjaGreska: boolean = false;
  spratGreska: boolean = false;
  mesecneRezijeGreska: boolean = false;

  lokacijaIzbor: string[] = [
    'Barajevo',
    'Voždovac',
    'Vračar',
    'Grocka',
    'Zvezdara',
    'Zemun',
    'Lazarevac',
    'Mladenovac',
    'Novi Beograd',
    'Obrenovac',
    'Palilula',
    'Rakovica',
    'Savski venac',
    'Sopot',
    'Stari Grad',
    'Surčin',
    'Čukarica',
  ];
  tipNekretnineIzbor: string[] = [
    'Stan',
    'Kuća',
    'Vikendica',
    'Lokal',
    'Magacin',
  ];
  brojSobaIzbor: string[] = [
    '1',
    '1.5',
    '2',
    '2.5',
    '3',
    '3.5',
    '4',
    '4.5',
    '5',
    '5.5',
    '5+',
  ];
  godinaIzgradnjeIzbor: string[] = [
    '1970',
    '1971',
    '1972',
    '1973',
    '1974',
    '1975',
    '1976',
    '1977',
    '1978',
    '1979',
    '1980',
    '1981',
    '1982',
    '1983',
    '1984',
    '1985',
    '1986',
    '1987',
    '1988',
    '1989',
    '1990',
    '1991',
    '1992',
    '1993',
    '1994',
    '1995',
    '1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
  ];
  stanjeNekretnineIzbor: string[] = ['Izvorno', 'Renovirano', 'LUX'];
  tipGrejanjaIzbor: string[] = [
    'Centralno grejanje',
    'Etažno grejanje',
    'TA peć',
    'Gas',
    'Podno grejanje',
    'Toplotne pumpe',
  ];
  spratIzbor: string[] = [
    'Podrum',
    'Suteren',
    'Prizemlje',
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
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '30+',
    'Poktrovlje',
  ];
  ukupnaSpratnostIzbor: string[] = [
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
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '30+',
  ];

  sveKarakteristike: any[] = [
    { name: 'Terasa', checked: false },
    { name: 'Podrum', checked: false },
    { name: 'Internet', checked: false },
    { name: 'Lodja', checked: false },
    { name: 'Garaza', checked: false },
    { name: 'Interfon', checked: false },
    { name: 'Fr. balkon', checked: false },
    { name: 'Basta', checked: false },
    { name: 'Telefon', checked: false },
    { name: 'Lift', checked: false },
    { name: 'Klima', checked: false },
  ];

  osveziOdabraneKarakteristike($event: any) {
    const name = $event.target.value;
    const isChecked = $event.target.checked;

    this.sveKarakteristike = this.sveKarakteristike.map((k) => {
      if (k.name == name) {
        k.checked = isChecked;
        return k;
      } else return k;
    });
  }

  sveLinije: any[] = [
    { name: '1', checked: false },
    { name: '2', checked: false },
    { name: '3', checked: false },
    { name: '4', checked: false },
    { name: '5', checked: false },
    { name: '6', checked: false },
    { name: '7', checked: false },
    { name: '8', checked: false },
    { name: '9', checked: false },
    { name: '10', checked: false },
    { name: '11', checked: false },
    { name: '12', checked: false },
    { name: '13', checked: false },
    { name: '14', checked: false },
    { name: '15', checked: false },
    { name: '16', checked: false },
    { name: '17', checked: false },
    { name: '18', checked: false },
    { name: '19', checked: false },
    { name: '20', checked: false },
  ];

  osveziOdabraneLinije($event: any) {
    const name = $event.target.value;
    const isChecked = $event.target.checked;

    this.sveLinije = this.sveLinije.map((l) => {
      if (l.name == name) {
        l.checked = isChecked;
        return l;
      } else return l;
    });
  }

  postavi() {
    let inputGreska = 0;
    let listing = new Listing();
    // ovde ubaciti aktivnog korisnika, local storage ili sta god
    listing.oglasivac = 'anailic';
    // lokacija
    if (
      this.lokacija == undefined ||
      this.lokacija == null ||
      this.lokacija == ''
    ) {
      inputGreska = 1;
      this.lokacijaGreska = true;
    } else {
      this.lokacijaGreska = false;
      listing.lokacija = this.lokacija;
    }
    // ulica
    if (this.ulica == undefined || this.ulica == null || this.ulica == '') {
      inputGreska = 1;
      this.ulicaGreska = true;
    } else {
      this.ulicaGreska = false;
      listing.ulica = this.ulica;
    }
    // naziv oglasa
    if (
      this.nazivOglasa == undefined ||
      this.nazivOglasa == null ||
      this.nazivOglasa == ''
    ) {
      inputGreska = 1;
      this.nazivOglasaGreska = true;
    } else {
      this.nazivOglasaGreska = false;
      listing.nazivOglasa = this.nazivOglasa;
    }
    //  tip nekretnine
    if (
      this.tipNekretnine == undefined ||
      this.tipNekretnine == null ||
      this.tipNekretnine == ''
    ) {
      inputGreska = 1;
      this.tipNekretnineGreska = true;
    } else {
      this.tipNekretnineGreska = false;
      listing.tipNekretnine = this.tipNekretnine;
    }
    // cena
    if (this.cena == undefined || this.cena == null) {
      inputGreska = 1;
      this.cenaGreska = true;
    } else {
      this.cenaGreska = false;
      listing.cena = this.cena;
    }
    // kvadratura
    if (this.kvadratura == undefined || this.kvadratura == null) {
      inputGreska = 1;
      this.kvadraturaGreska = true;
    } else {
      this.kvadraturaGreska = false;
      listing.kvadratura = this.kvadratura;
    }
    // broj soba
    if (
      this.brojSoba == undefined ||
      this.brojSoba == null ||
      this.brojSoba == ''
    ) {
      inputGreska = 1;
      this.brojSobaGreska = true;
    } else {
      this.brojSobaGreska = false;
      listing.brojSoba = this.brojSoba;
    }
    //  godina izgradnje
    if (this.godinaIzgradnje == undefined || this.godinaIzgradnje == null) {
      inputGreska = 1;
      this.godinaIzgradnjeGreska = true;
    } else {
      this.godinaIzgradnjeGreska = false;
      listing.godinaIzgradnje = this.godinaIzgradnje;
    }
    // stanje nekretnine
    if (
      this.stanjeNekretnine == undefined ||
      this.stanjeNekretnine == null ||
      this.stanjeNekretnine == ''
    ) {
      inputGreska = 1;
      this.stanjeNekretnineGreska = true;
    } else {
      this.stanjeNekretnineGreska = false;
      listing.stanjeNekretnine = this.stanjeNekretnine;
    }
    // tip grejanja
    if (
      this.tipGrejanja == undefined ||
      this.tipGrejanja == null ||
      this.tipGrejanja == ''
    ) {
      inputGreska = 1;
      this.tipGrejanjaGreska = true;
    } else {
      this.tipGrejanjaGreska = false;
      listing.tipGrejanja = this.tipGrejanja;
    }
    // sprat
    if (
      this.sprat == undefined ||
      this.sprat == null ||
      this.ukupnaSpratnost == undefined ||
      this.ukupnaSpratnost == null
    ) {
      inputGreska = 1;
      this.spratGreska = true;
    } else {
      this.spratGreska = false;
      listing.sprat = this.sprat;
      listing.ukupnaSpratnost = this.ukupnaSpratnost;
    }
    // mesecne rezije
    if (this.mesecneRezije == undefined || this.mesecneRezije == null) {
      inputGreska = 1;
      this.mesecneRezijeGreska = true;
    } else {
      this.mesecneRezijeGreska = false;
      listing.mesecneRezije = this.mesecneRezije;
    }
    // opis
    if (this.opis == undefined || this.opis == null || this.opis == '') {
      listing.opis = 'nema opisa';
    } else {
      listing.opis = this.opis;
    }

    listing.karakteristike = this.sveKarakteristike
      .filter((k) => k.checked)
      .map((k) => k.name);

    listing.linije = this.sveLinije.filter((l) => l.checked).map((l) => l.name);

    if (inputGreska == 0) {
      this.listingService
        .insertListing(listing)
        .then((res) => {
          alert('Uspeno unet oglas');
          this.router.navigate(['/moji-oglasi']);
        })
        .catch((res) => {});
    }
  }
}
