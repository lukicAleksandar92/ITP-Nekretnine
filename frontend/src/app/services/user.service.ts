import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom } from 'rxjs';
import { User, UserFavoriteListing } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  back = 'http://localhost:5000';

  login(kor_ime: string, lozinka: string) {
    let user = new User();
    user.kor_ime = kor_ime;
    user.lozinka = lozinka;
    return firstValueFrom(this.http.post(`${this.back}/users/login`, user));
  }
  insertUser(user: User) {
    return firstValueFrom(this.http.post(`${this.back}/users/insert`, user));
  }
  checkNameAndEmail(user: User) {
    return firstValueFrom(this.http.post(`${this.back}/users/check`, user));
  }
  getUserByKorIme(kor_ime: string) {
    return firstValueFrom(
      this.http.get(`${this.back}/users/fetchUser/${kor_ime}`)
    );
  }
  parseLoggedUser() {
    const userJson = localStorage.getItem('loggedUser');
    if (!userJson) return null;
    else {
      const user = JSON.parse(userJson + '');

      return this.getUserByKorIme(user.kor_ime);
    }
  }
  updateFavoriteListing(user: UserFavoriteListing) {
    return firstValueFrom(
      this.http.put(`${this.back}/users/updateFavoriteListing`, user)
    );
  }
  updateUserEmail(user: User) {
    return firstValueFrom(
      this.http.put(`${this.back}/users/updateEmail`, user)
    );
  }
  updateUserTel(user: User) {
    return firstValueFrom(this.http.put(`${this.back}/users/updateTel`, user));
  }
  updateUserpassword(user: User) {
    return firstValueFrom(
      this.http.put(`${this.back}/users/updatePassword`, user)
    );
  }

  updateUserAgency(user: User) {
    return firstValueFrom(
      this.http.put(`${this.back}/users/updateAgency`, user)
    );
  }
  getAllAgents(nazivAgencije: string) {
    return firstValueFrom(
      this.http.get(`${this.back}/users/getAllAgents/${nazivAgencije}`)
    );
  }

  updateUserSlike(user: User) {
    return firstValueFrom(
      this.http.put(`${this.back}/users/updateSlike`, user)
    );
  }
}
