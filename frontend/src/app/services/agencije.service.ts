import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgencijeService {

  constructor(private http: HttpClient) { }

  back = 'http://localhost:5000'

  getAgencije(): Observable<any> {
    return this.http.get<any>(`${this.back}/agencije`);
    
  }
}
