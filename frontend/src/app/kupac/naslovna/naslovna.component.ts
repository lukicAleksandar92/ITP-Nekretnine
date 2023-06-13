import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filter, Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-naslovna',
  templateUrl: './naslovna.component.html',
  styleUrls: ['./naslovna.component.css'],
})
export class NaslovnaComponent implements OnInit {
  constructor(private listingService: ListingService, private router: Router) {}
  ngOnInit(): void {
    this.listingService.getAllListings().then((res) => {
      this.allListings = JSON.parse(JSON.stringify(res));
    });
  }
  // promenljiva u koju ucitavamo oglas
  allListings: Listing[] = [];
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
  filter = new Filter();

  pretrazi() {
    if (this.filter.tip == undefined) {
      alert('Unesite tip nekretnine!');
    } else
      this.router.navigate(['/rezultat-pretrage'], {
        queryParams: this.filter,
      });
  }
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
}
