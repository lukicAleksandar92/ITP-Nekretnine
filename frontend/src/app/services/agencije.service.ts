import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgencijeService {
  constructor(private http: HttpClient) {}

  back = 'http://localhost:5000';

  getAgencije() {
    return firstValueFrom(this.http.get(`${this.back}/agencije/getAll`));
  }
}
