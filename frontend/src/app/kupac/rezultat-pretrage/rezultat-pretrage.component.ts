import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Listing } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-rezultat-pretrage',
  templateUrl: './rezultat-pretrage.component.html',
  styleUrls: ['./rezultat-pretrage.component.css'],
})
export class RezultatPretrageComponent implements OnInit {
  constructor(
    private listingService: ListingService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.filter.lokacija = params['lokacija'];
      this.filter.tip = params['tip'];
      if (params['cena'] != undefined)
        this.filter.cena = parseFloat(params['cena']);
      if (params['kvadratura'] != undefined)
        this.filter.kvadratura = parseFloat(params['kvadratura']);
      if (params['brojSoba'] != undefined)
        this.filter.brojSoba = this.brojSobaToNum(params['brojSoba']);
    });

    this.listingService.searchListings(this.filter).then((res) => {
      this.allListings = JSON.parse(JSON.stringify(res));
    });
  }
  allListings: Listing[] = [];
  filter: any = {
    lokacija: undefined,
    tip: undefined,
    cena: undefined,
    kvadratura: undefined,
    brojSoba: undefined,
  };
  spratToString(sprat: number) {
    if (sprat == -2) return 'Podrum';
    if (sprat == -1) return 'Suteren';
    if (sprat == 0) return 'Prizemlje';
    if (sprat == 31) return '30+';
    if (sprat == 32) return 'Potkrovlje';
    else return sprat.toString();
  }
  brojSobaToNum(brojSoba: string) {
    if (brojSoba == '5+') return 6;
    else return parseFloat(brojSoba);
  }
}
