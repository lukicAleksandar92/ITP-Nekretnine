import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing, Slika } from 'src/app/models/Listing';
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
        this.oglasivac = this.listing.oglasivac;
        this.tipOglasivaca = this.listing.tipOglasivaca;
        this.lokacija = this.listing.lokacija;
        this.ulica = this.listing.ulica;
        this.nazivOglasa = this.listing.nazivOglasa;
        this.tipNekretnine = this.listing.tipNekretnine;
        this.cena = this.listing.cena;
        this.kvadratura = this.listing.kvadratura;

        this.brojSoba = this.brojSobaToString(this.listing.brojSoba);

        this.godinaIzgradnje = this.listing.godinaIzgradnje;
        this.stanjeNekretnine = this.listing.stanjeNekretnine;
        this.tipGrejanja = this.listing.tipGrejanja;
        this.sprat = this.spratToString(this.listing.sprat);
        this.ukupnaSpratnost = this.spratToString(this.listing.ukupnaSpratnost);
        this.mesecneRezije = this.listing.mesecneRezije;
        if (this.listing.opis == 'nema opisa') {
          this.opis = '';
        } else this.opis = this.listing.opis;

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
        this.slikeString64 = this.listing.slike.map((obj) => {
          return { name: obj.name, source: obj.source };
        });
      });
  }
  listing!: Listing;
  oglasivac!: string;
  tipOglasivaca!: string;
  id!: string;
  lokacija!: string;
  ulica!: string;
  nazivOglasa!: string;
  tipNekretnine!: string;
  cena!: number;
  kvadratura!: number;
  brojSoba!: string;
  godinaIzgradnje!: number;
  stanjeNekretnine!: string;
  tipGrejanja!: string;
  sprat!: string;
  ukupnaSpratnost!: string;
  mesecneRezije!: number;
  opis!: string;
  odabraneSlike: File[] = [];
  slikeString64: Slika[] = [];

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
  godinaIzgradnjeIzbor: number[] = [
    1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
    1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993,
    1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
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
    'Potkrovlje',
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
  slikeGreska: boolean = false;
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
  //pamtimo odabrane karakteristike
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
  //pamtimo odabrane linije
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

  //broj soba iz stringa u number
  brojSobaToNum(brojSoba: string) {
    if (brojSoba == '5+') return 6;
    else return parseFloat(brojSoba);
  }
  //broj soba iz number u string
  brojSobaToString(brojSoba: number) {
    if (brojSoba == 6) return '5+';
    else return brojSoba.toString();
  }
  // sprat iz string u number
  spratToNum(sprat: string) {
    if (sprat == 'Podrum') return -2;
    if (sprat == 'Suteren') return -1;
    if (sprat == 'Prizemlje') return 0;
    if (sprat == '30+') return 31;
    if (sprat == 'Potkrovlje') return 32;
    else return parseInt(sprat);
  }
  // sprat is number u string
  spratToString(sprat: number) {
    if (sprat == -2) return 'Podrum';
    if (sprat == -1) return 'Suteren';
    if (sprat == 0) return 'Prizemlje';
    if (sprat == 31) return '30+';
    if (sprat == 32) return 'Potkrovlje';
    else return sprat.toString();
  }
  handleFileInput(event: any) {
    const files: FileList = event.target.files;
    /* if (this.slike.length + files.length > 5) {
      // Display an error message or take any appropriate action
      alert('Maximum number of pictures exceeded');
      return;
    } */

    for (let i = 0; i < files.length; i++) {
      let file: File = files[i];
      const reader: FileReader = new FileReader();

      reader.onloadend = () => {
        const base64String: string = reader.result as string;
        this.slikeString64.push({ name: file.name, source: base64String });
      };
      this.odabraneSlike.push(file);
      reader.readAsDataURL(file);
    }
  }
  deselectFile(imeSlike: string) {
    this.odabraneSlike = this.odabraneSlike.filter((f) => f.name !== imeSlike);
    this.slikeString64 = this.slikeString64.filter(
      (img) => img.name !== imeSlike
    );
    console.log(this.odabraneSlike);
  }
  izmeni() {
    let inputGreska = 0;
    let listing = new Listing();

    listing.oglasivac = this.oglasivac;
    listing.tipOglasivaca = this.tipOglasivaca;
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
      listing.brojSoba = this.brojSobaToNum(this.brojSoba);
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
      listing.sprat = this.spratToNum(this.sprat);
      listing.ukupnaSpratnost = this.spratToNum(this.ukupnaSpratnost);
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

    if (this.slikeString64.length < 3 || this.slikeString64.length > 6) {
      inputGreska = 1;
      this.slikeGreska = true;
    } else {
      this.slikeGreska = false;
      listing.slike = this.slikeString64;
    }

    if (inputGreska == 0) {
      this.listingService.updateListing(listing, this.id).then((res) => {
        alert('Oglas uspesno izmenjen');

        this.router.navigate(['/moji-oglasi']);
      });
    }
  }
}
