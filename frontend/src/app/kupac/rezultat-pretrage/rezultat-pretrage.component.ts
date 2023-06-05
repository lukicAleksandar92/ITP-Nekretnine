import { Component, OnInit } from '@angular/core';

import { Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-rezultat-pretrage',
  templateUrl: './rezultat-pretrage.component.html',
  styleUrls: ['./rezultat-pretrage.component.css'],
})
export class RezultatPretrageComponent implements OnInit {
  constructor(private listingService: ListingService) {}
  ngOnInit(): void {
    this.listingService.getAllListings().then((res) => {
      this.allListings = JSON.parse(JSON.stringify(res));
    });
  }
  allListings: Listing[] = [];
}
