import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Listing } from '../models/Listing';
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
    return firstValueFrom(this.http.post(`${this.back}/listings/getAll`, {}));
  }
  getListingById(id: string) {
    return firstValueFrom(this.http.get(`${this.back}/listings/getOne/${id}`));
  }
  getAverageValue(location: string) {
    return firstValueFrom(this.http.get(`${this.back}/listings/getAverageValue/${location}`));
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
  searchListings(filter: any) {
    return firstValueFrom(
      this.http.post(`${this.back}/listings/search`, filter)
    );
  }
}
