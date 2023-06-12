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
  allListings: Listing[] = [];
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
  filter = new Filter();

  pretrazi() {
    if (this.filter.tip == undefined) {
      alert('Unesite tip nekretnine!');
    } else
      this.router.navigate(['/rezultat-pretrage'], {
        queryParams: this.filter,
      });
  }

  isDropdownOpen = false;
  odabraneLokacije: string[] = [];
  select(lok: string) {
    if (this.filter.lokacija.includes(lok)) {
      this.filter.lokacija = this.filter.lokacija.filter((l) => l !== lok);
    } else {
      this.filter.lokacija.push(lok);
    }
    console.log(this.filter.lokacija);
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }
}
