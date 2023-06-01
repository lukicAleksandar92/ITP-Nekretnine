import { Component } from '@angular/core';
import { Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-postavi-oglas',
  templateUrl: './postavi-oglas.component.html',
  styleUrls: ['./postavi-oglas.component.css'],
})
export class PostaviOglasComponent {
  constructor(private listingService: ListingService) {}
  lokacija!: string;
  adresa!: string;
  nazivOglasa!: string;
  tipNekretnine!: string;
  cena!: number;
  kvadratura!: number;
  brojSoba!: string;
  godinaIzgradnje!: string;
  stanjeNekretnine!: string;
  tipGrejanja!: string;
  sprat!: string;
  mesecneRezije!: number;

  lokacijaGreska: boolean = false;
  adresaGreska: boolean = false;
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
  odabraneKarakteristike: string[] = [];
  osveziOdabraneKarakteristike() {
    this.odabraneKarakteristike = this.sveKarakteristike
      .filter((karakteristika) => karakteristika.checked)
      .map((karakteristika) => karakteristika.name);
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
  odabraneLinije: string[] = [];
  osveziOdabraneLinije() {
    this.odabraneLinije = this.sveLinije
      .filter((linija) => linija.checked)
      .map((linija) => linija.name);
  }

  postavi() {
    let inputGreska = 0;
    let listing = new Listing();
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
    // adresa
    if (this.adresa == undefined || this.adresa == null || this.adresa == '') {
      inputGreska = 1;
      this.adresaGreska = true;
    } else {
      this.adresaGreska = false;
      listing.adresa = this.adresa;
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
    if (this.sprat == undefined || this.sprat == null) {
      inputGreska = 1;
      this.spratGreska = true;
    } else {
      this.spratGreska = false;
      listing.sprat = this.sprat;
    }
    // mesecne rezije
    if (this.mesecneRezije == undefined || this.mesecneRezije == null) {
      inputGreska = 1;
      this.mesecneRezijeGreska = true;
    } else {
      this.mesecneRezijeGreska = false;
      listing.mesecneRezije = this.mesecneRezije;
    }

    listing.karakteristike = this.odabraneKarakteristike;
    listing.linije = this.odabraneLinije;

    if (inputGreska == 0) {
      this.listingService
        .insertListing(listing)
        .then((res) => alert('Uspeno unet oglas'))
        .catch((res) => {});
    }
  }
}
