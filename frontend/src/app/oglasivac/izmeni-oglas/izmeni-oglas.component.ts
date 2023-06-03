import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-izmeni-oglas',
  templateUrl: './izmeni-oglas.component.html',
  styleUrls: ['./izmeni-oglas.component.css'],
})
export class IzmeniOglasComponent implements OnInit {
  constructor(
    private listingService: ListingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null)
      this.listingService.getListingById(id).then((res) => {
        this.listing = JSON.parse(JSON.stringify(res));

        this.id = this.listing._id;
        this.lokacija = this.listing.lokacija;
        this.adresa = this.listing.adresa;
        this.nazivOglasa = this.listing.nazivOglasa;
        this.tipNekretnine = this.listing.tipNekretnine;
        this.cena = this.listing.cena;
        this.kvadratura = this.listing.kvadratura;
        this.kvadratura = this.listing.cena;
        this.brojSoba = this.listing.brojSoba;
        this.godinaIzgradnje = this.listing.godinaIzgradnje;
        this.stanjeNekretnine = this.listing.stanjeNekretnine;
        this.tipGrejanja = this.listing.tipGrejanja;
        this.sprat = this.listing.sprat;
        this.mesecneRezije = this.listing.mesecneRezije;

        for (let k of this.sveKarakteristike) {
          if (this.listing.karakteristike.includes(k.name)) {
            k.checked = true;
          }
        }
        for (let l of this.sveLinije) {
          if (this.listing.linije.includes(l.name)) {
            l.checked = true;
          }
        }
      });
  }
  listing!: Listing;

  id!: string;
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

  izmeni() {
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

    listing.karakteristike = this.sveKarakteristike
      .filter((k) => k.checked)
      .map((k) => k.name);

    listing.linije = this.sveLinije.filter((l) => l.checked).map((l) => l.name);

    if (inputGreska == 0) {
      this.listingService.updateListing(listing, this.id);
      alert('Oglas uspesno izmenjen');
      this.router.navigate(['/moji-oglasi']);
    }
  }
}
