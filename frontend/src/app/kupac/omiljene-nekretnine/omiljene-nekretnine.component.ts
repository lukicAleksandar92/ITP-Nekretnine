import { Component, OnInit } from '@angular/core';
import {
  faEuroSign,
  faHeartCircleMinus,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Listing, AverageValue } from 'src/app/models/Listing';
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
    //parsiranje korisnika iz localstorage i dovlacenje svih informacija o njemu iz base
    this.userService.parseLoggedUser()?.then((res) => {
      this.user = JSON.parse(JSON.stringify(res));
      //dovlacenje omiljenih oglasa
      this.listingService
        .getFavoriteListings(this.user.omiljeniOglasi)
        .then((res) => {
          this.allListings = JSON.parse(JSON.stringify(res));
          // trazimo niz srednjih vrednosti grupisanih po lokaciji i tipu nekretnine
          this.listingService.getAverageValues().then((res) => {
            // kad ih dobijemo ucitavamo u lokalnu promenljivu avgValues
            this.avgValues = JSON.parse(JSON.stringify(res));
          });
        });
    });
  }
  allListings: Listing[] = [];
  listing1!: Listing;
  user = new User();

  avgValues: AverageValue[] = [];
  srednjaVrednost!: number;
  cenaPoKvadratu!: number;

  mapMarker = faMapMarkerAlt;
  euroMarker = faEuroSign;
  heartMinus = faHeartCircleMinus;
  //uklanjamo oglas iz omiljenih i ponovo ucitavamo sve oglase
  ukloniIzOmiljenih(id: string) {
    this.user.omiljeniOglasi = this.user.omiljeniOglasi.filter((f) => f != id);
    this.userService.updateFavoriteListing({
      kor_ime: this.user.kor_ime,
      omiljeniOglasi: this.user.omiljeniOglasi,
    });
    alert('Uklonjeno!');
    this.ucitajKorisnikaIOglase();
  }
  // racuna kolika je cena po kvadratu
  izracunavanjeCenePoKvadratu(cena: number, kvadratura:number):number {
    return Math.round(cena / kvadratura);
  }
  // iz nisa srednjih vrednosti dohvata onu koja odgovara zadatoj lokaciji i tipu nekretnine
  avgValuesToNumber(
    lokacija: string,
    tipNekretnine: string
  ): number {
    let rezultat: number = 0;
    for (let avgValue of this.avgValues) {
      if (
        avgValue._id.lokacija == lokacija &&
        avgValue._id.tip == tipNekretnine
      ) {
        rezultat = Math.round(avgValue.srednjaVrednost);
      }
    }
    return rezultat;
  }
}
