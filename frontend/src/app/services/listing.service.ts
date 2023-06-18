import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter, Listing } from '../models/Listing';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private http: HttpClient) {}
  back = 'http://localhost:5000';

  insertListing(listing: Listing) {
    return firstValueFrom(
      this.http.post(`${this.back}/listings/insert`, listing)
    );
  }
  getAllListings() {
    return firstValueFrom(
      this.http.post(`${this.back}/listings/getAll`, {})
    );
  }
  getListingById(id: string) {
    return firstValueFrom(
      this.http.get(`${this.back}/listings/getOne/${id}`)
    );
  }
  getListingByOglasivac(kor_ime: string){
    return firstValueFrom(
      this.http.get(`${this.back}/listings/getListingByOglasivac/${kor_ime}`)
    );
  }
  getAllSellByAgency(agenti: string[]){
    return firstValueFrom(
      this.http.post(`${this.back}/listings/getAllSellByAgency`, agenti)
    );
  }
  getAllSellByLocation(location: string){
    return firstValueFrom(
      this.http.get(`${this.back}/listings/getAllSellByLocation/${location}`)
    );
  }
  getAverageValues() {
    return firstValueFrom(
      this.http.get(`${this.back}/listings/getAverageValues`)
    );
  }
  updateListing(listing: Listing, id: string) {
    return firstValueFrom(
      this.http.put(`${this.back}/listings/update/${id}`, listing)
    );
  }
  sellListing(id: string) {
    return firstValueFrom(
      this.http.put(`${this.back}/listings/sell/${id}`, {})
    );
  }
  searchListings(filter: Filter) {
    return firstValueFrom(
      this.http.post(`${this.back}/listings/search`, filter)
    );
  }
  getFavoriteListings(listings: string[]) {
    return firstValueFrom(
      this.http.post(`${this.back}/listings/getFavoriteListings`, listings)
    );
  }
}
