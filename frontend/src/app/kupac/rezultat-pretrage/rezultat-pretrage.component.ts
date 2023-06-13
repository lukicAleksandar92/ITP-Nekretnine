import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Filter, Listing } from 'src/app/models/Listing';
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
    // ucitavamo uslove pretrage koje smo dobiliod prethodne strane
    this.activatedRoute.queryParams.subscribe((params) => {
      this.filter.lokacija = params['lokacija'];
      this.filter.tip = params['tip'];
      this.filter.tipOglasivaca = params['tipOglasivaca'];
      this.filter.stanjeNekretnine = params['stanjeNekretnine'];
      this.filter.tipGrejanja = params['tipGrejanja'];
      // pretvaramo ovih par parametara iz stringa u broj
      // cena
      if (params['cenaOd'] != undefined)
        this.filter.cenaOd = parseFloat(params['cenaOd']);
      if (params['cenaDo'] != undefined)
        this.filter.cenaDo = parseFloat(params['cenaDo']);
      // kvadratura
      if (params['kvadraturaOd'] != undefined)
        this.filter.kvadraturaOd = parseFloat(params['kvadraturaOd']);
      if (params['kvadraturaDo'] != undefined)
        this.filter.kvadraturaDo = parseFloat(params['kvadraturaDo']);
      //broj soba
      if (params['brojSobaOd'] != undefined)
        this.filter.brojSobaOd = this.brojSobaToNum(params['brojSobaOd']);
      if (params['brojSobaDo'] != undefined)
        this.filter.brojSobaDo = this.brojSobaToNum(params['brojSobaDo']);
      // godina izgradnje
      if (params['godinaIzgradnjeOd'] != undefined)
        this.filter.godinaIzgradnjeOd = parseFloat(params['godinaIzgradnjeOd']);
      if (params['godinaIzgradnjeDo'] != undefined)
        this.filter.godinaIzgradnjeDo = parseFloat(params['godinaIzgradnjeDo']);
      //  sprat
      if (params['spratOd'] != undefined)
        this.filter.spratOd = this.spratToNum(params['spratOd']);
      if (params['spratDo'] != undefined)
        this.filter.spratDo = this.spratToNum(params['spratDo']);
      //  mesecne rezije
      if (params['mesecneRezijeOd'] != undefined)
        this.filter.mesecneRezijeOd = parseFloat(params['mesecneRezijeOd']);
      if (params['mesecneRezijeDo'] != undefined)
        this.filter.mesecneRezijeDo = parseFloat(params['mesecneRezijeDo']);
    });

    // nakon ucitavanja filtera pravimo pretragu baze pomocu njega
    this.listingService.searchListings(this.filter).then((res) => {
      this.allListings = JSON.parse(JSON.stringify(res));
    });
  }
  allListings: Listing[] = [];
  filter = new Filter();
  // pretvara sprat iz number u string(za prikaz na stranici 0 -> podruim, itd...)
  spratToString(sprat: number) {
    if (sprat == -2) return 'Podrum';
    if (sprat == -1) return 'Suteren';
    if (sprat == 0) return 'Prizemlje';
    if (sprat == 31) return '30+';
    if (sprat == 32) return 'Potkrovlje';
    else return sprat.toString();
  }
  // pretvara broj soba iznumber u string
  brojSobaToNum(brojSoba: string) {
    if (brojSoba == '5+') return 6;
    else return parseFloat(brojSoba);
  }
  spratToNum(sprat: string) {
    if (sprat == 'Podrum') return -2;
    if (sprat == 'Suteren') return -1;
    if (sprat == 'Prizemlje') return 0;
    if (sprat == '30+') return 31;
    if (sprat == 'Potkrovlje') return 32;
    else return parseInt(sprat);
  }
}
