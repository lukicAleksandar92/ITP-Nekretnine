import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';
@Component({
  selector: 'app-moji-oglasi',
  templateUrl: './moji-oglasi.component.html',
  styleUrls: ['./moji-oglasi.component.css'],
})
export class MojiOglasiComponent implements OnInit {
  constructor(private listingService: ListingService) {}
  ngOnInit(): void {
    this.listingService.getAllListings().then((res) => {
      this.allListings = JSON.parse(JSON.stringify(res));
    });
  }
  allListings: Listing[] = [];
  mapMarker = faMapMarkerAlt;
  euroMarker = faEuroSign;
  prodaj(id: string) {
    this.listingService.sellListing(id).then((res) => {
      this.listingService.getAllListings().then((res) => {
        this.allListings = JSON.parse(JSON.stringify(res));
      });
    });

    alert('oglas prodat');
  }
}
