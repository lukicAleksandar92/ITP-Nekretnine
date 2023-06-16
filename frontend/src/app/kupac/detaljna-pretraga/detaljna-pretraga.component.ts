import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Filter } from 'src/app/models/Listing';

@Component({
  selector: 'app-detaljna-pretraga',
  templateUrl: './detaljna-pretraga.component.html',
  styleUrls: ['./detaljna-pretraga.component.css'],
})
export class DetaljnaPretragaComponent {
  constructor(private router: Router) {}
  // lokacije od kojih biramo
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
  // tipovi nekretnine od kojih biramo
  tipNekretnineIzbor: string[] = [
    'Stan',
    'Kuća',
    'Vikendica',
    'Lokal',
    'Magacin',
  ];
  // broj soba od kojih biramo
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

  stanjeNekretnineIzbor: any[] = [
    { name: 'Izvorno', checked: false },
    { name: 'Renovirano', checked: false },
    { name: 'LUX', checked: false },
  ];
  osveziOdabranoStanje($event: any) {
    const name = $event.target.value;
    const isChecked = $event.target.checked;

    this.stanjeNekretnineIzbor = this.stanjeNekretnineIzbor.map((k) => {
      if (k.name == name) {
        k.checked = isChecked;
        return k;
      } else return k;
    });
  }
  nizOdabranihStanja() {
    return this.stanjeNekretnineIzbor
      .filter((o) => o.checked)
      .map((o) => o.name);
  }

  tipGrejanjaIzbor: any[] = [
    { name: 'Centralno grejanje', checked: false },
    { name: 'Etažno grejanje', checked: false },
    { name: 'TA peć', checked: false },
    { name: 'Gas', checked: false },
    { name: 'Podno grejanje', checked: false },
    { name: 'Toplotne pumpe', checked: false },
  ];
  osveziOdabranoGrejanje($event: any) {
    const name = $event.target.value;
    const isChecked = $event.target.checked;

    this.tipGrejanjaIzbor = this.tipGrejanjaIzbor.map((g) => {
      if (g.name == name) {
        g.checked = isChecked;
        return g;
      } else return g;
    });
  }
  nizOdabranihGrejanja() {
    return this.tipGrejanjaIzbor.filter((o) => o.checked).map((o) => o.name);
  }

  tipOglasivacaIzbor: any[] = [
    {
      name: 'Samostalni prodavac',
      value: 'samostalniProdavac',
      checked: false,
    },
    { name: 'Agent', value: 'agent', checked: false },
  ];
  osveziTipOglasivaca($event: any) {
    const value = $event.target.value;
    const isChecked = $event.target.checked;

    this.tipOglasivacaIzbor = this.tipOglasivacaIzbor.map((o) => {
      if (o.value == value) {
        o.checked = isChecked;
        return o;
      } else return o;
    });
  }
  nizOdabranihOglasivaca() {
    return this.tipOglasivacaIzbor.filter((o) => o.checked).map((o) => o.name);
  }
  filter = new Filter();
  // promenljiva koja prati da li je dropdown za izbor lokacija otvoren
  isDropdownOpen = false;
  //selektujemo ili unselektujemo lokacije
  select(lok: string) {
    if (this.filter.lokacija.includes(lok)) {
      this.filter.lokacija = this.filter.lokacija.filter((l) => l !== lok);
    } else {
      this.filter.lokacija.push(lok);
    }
  }
  // otvara i zatvara dropdown za lokacije
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  // zatvara dropdown kad je otvoren a kliknemo negde van njega
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }

  pretrazi() {
    this.filter.stanjeNekretnine = this.stanjeNekretnineIzbor
      .filter((s) => s.checked)
      .map((s) => s.name);
    this.filter.tipGrejanja = this.tipGrejanjaIzbor
      .filter((g) => g.checked)
      .map((g) => g.name);
    this.filter.tipOglasivaca = this.tipOglasivacaIzbor
      .filter((o) => o.checked)
      .map((o) => o.value);
      
    if (this.filter.tip == undefined) {
      alert('Unesite tip nekretnine!');
    } else
    this.router.navigate(['/rezultat-pretrage'], {
      queryParams: this.filter,
    });
  }
}
