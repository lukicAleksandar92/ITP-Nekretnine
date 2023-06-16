import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMapMarkerAlt, faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';
@Component({
  selector: 'app-moji-oglasi',
  templateUrl: './moji-oglasi.component.html',
  styleUrls: ['./moji-oglasi.component.css'],
})
export class MojiOglasiComponent implements OnInit {
  constructor(private listingService: ListingService, private router: Router) {}
  ngOnInit(): void {
    const userJson = localStorage.getItem('loggedUser');
    if (!userJson) return;
    else {
      const user = JSON.parse(userJson + '');

      this.listingService.getListingsByOglasivac(user.kor_ime).then((res) => {
        this.allListings = JSON.parse(JSON.stringify(res));
      });
    }
  }
  allListings: Listing[] = [];
  mapMarker = faMapMarkerAlt;
  euroMarker = faEuroSign;
  izmeniOglas(listing: Listing, id: string) {
    if (listing.datumIzmene != undefined) {
      let trenutnoVreme = new Date();
      let datumIzmene = new Date(listing.datumIzmene);
      const vremenskaRazlika = trenutnoVreme.getTime() - datumIzmene.getTime();
      const minutnaRazlika = Math.floor(vremenskaRazlika / 1000 / 60);
      if (minutnaRazlika < 60) {
        alert(
          `Morate da sačekate 60 minuta izmuđu dve izmene\n Preostalo vreme čekanja: ${
            60 - minutnaRazlika
          } minuta`
        );
        return;
      }
    }
    this.router.navigateByUrl(`/izmeni-oglas/${id}`);
  }
  prodaj(id: string) {
    this.listingService.sellListing(id).then((res) => {
      this.listingService.getAllListings().then((res) => {
        this.allListings = JSON.parse(JSON.stringify(res));
      });
    });

    alert('oglas prodat');
  }
}
