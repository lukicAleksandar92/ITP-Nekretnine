import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from 'src/app/login/login.component';
import { Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';
@Component({
  selector: 'app-stranica-oglasa',
  templateUrl: './stranica-oglasa.component.html',
  styleUrls: ['./stranica-oglasa.component.css'],
})
export class StranicaOglasaComponent implements OnInit {
  constructor(
    private listingService: ListingService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null)
      this.listingService.getListingById(id).then((res) => {
        this.listing = JSON.parse(JSON.stringify(res));
      });
  }
  listing!: Listing;
  checkMark = faCheck;
  xMark = faX;
  vidiVise: boolean = false;
  vidiViseToggle() {
    this.vidiVise = !this.vidiVise;
  }
  sveKarakteristike: string[] = [
    'Terasa',
    'Podrum',
    'Internet',
    'Lodja',
    'Garaza',
    'Interfon',
    'Fr. balkon',
    'Basta',
    'Telefon',
    'Lift',
    'Klima',
  ];
  sveLinije: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
  ];
}
