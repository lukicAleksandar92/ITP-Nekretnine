import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-naslovna',
  templateUrl: './naslovna.component.html',
  styleUrls: ['./naslovna.component.css'],
})
export class NaslovnaComponent implements OnInit {
  constructor(private listingService: ListingService) {}
  ngOnInit(): void {
    this.listingService.getAllListings().then((res) => {
      this.allListings = JSON.parse(JSON.stringify(res));
    });
  }
  allListings: Listing[] = [];
}
