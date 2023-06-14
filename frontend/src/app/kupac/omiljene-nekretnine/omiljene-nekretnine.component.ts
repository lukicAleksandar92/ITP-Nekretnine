import { Component, OnInit } from '@angular/core';
import {
  faEuroSign,
  faHeartCircleMinus,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Listing } from 'src/app/models/Listing';
import { User } from 'src/app/models/User';
import { ListingService } from 'src/app/services/listing.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-omiljene-nekretnine',
  templateUrl: './omiljene-nekretnine.component.html',
  styleUrls: ['./omiljene-nekretnine.component.css'],
})
export class OmiljeneNekretnineComponent implements OnInit {
  constructor(
    private listingService: ListingService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    //ucitavamo podatke ulogovanog korisnika
    this.ucitajKorisnikaIOglase();
  }
  ucitajKorisnikaIOglase() {
    this.userService.parseLoggedUser()?.then((res) => {
      this.user = JSON.parse(JSON.stringify(res));

      this.listingService
        .getFavoriteListings(this.user.omiljeniOglasi)
        .then((res) => {
          this.allListings = JSON.parse(JSON.stringify(res));
        });
    });
  }
  allListings: Listing[] = [];
  user = new User();

  mapMarker = faMapMarkerAlt;
  euroMarker = faEuroSign;
  heartMinus = faHeartCircleMinus;
  ukloniIzOmiljenih(id: string) {
    this.user.omiljeniOglasi = this.user.omiljeniOglasi.filter((f) => f != id);
    this.userService.updateFavoriteListing({
      kor_ime: this.user.kor_ime,
      omiljeniOglasi: this.user.omiljeniOglasi,
    });
    alert('Uklonjeno!');
    this.ucitajKorisnikaIOglase();
  }
}
