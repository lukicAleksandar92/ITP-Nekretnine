import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  back = 'http://localhost:5000'

  login(kor_ime: string, lozinka: string){
    let user = new User();
    user.kor_ime = kor_ime;
    user.lozinka = lozinka;

    return firstValueFrom(this.http.post(`${this.back}/users/login`, user))
  }
  insertUser(user: User){
    return firstValueFrom(this.http.post(`${this.back}/users/insert`, user));
  }
}
