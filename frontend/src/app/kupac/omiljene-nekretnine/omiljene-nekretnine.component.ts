import { Component, OnInit } from '@angular/core';
import {
  faEuroSign,
  faHeartCircleMinus,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-omiljene-nekretnine',
  templateUrl: './omiljene-nekretnine.component.html',
  styleUrls: ['./omiljene-nekretnine.component.css'],
})
export class OmiljeneNekretnineComponent implements OnInit {
  constructor(private listingService: ListingService) {}
  ngOnInit(): void {
    this.listingService.getAllListings().then((res) => {
      this.allListings = JSON.parse(JSON.stringify(res));
    });
  }
  allListings: Listing[] = [];

  mapMarker = faMapMarkerAlt;
  euroMarker = faEuroSign;
  heartMinus = faHeartCircleMinus;
}
