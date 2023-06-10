import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from 'src/app/models/Listing';
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
  filter = {
    lokacija: undefined,
    tip: undefined,
    cena: undefined,
    kvadratura: undefined,
    brojSoba: undefined,
  };

  pretrazi() {
    if (this.filter.tip == undefined) {
      alert('Unesite tip nekretnine!');
    } else
      this.router.navigate(['/rezultat-pretrage'], {
        queryParams: this.filter,
      });
  }
}
