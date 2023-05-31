import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SharedCurrUserService {

  private emitChangeUser = new Subject<User>();

  // informacije o componentama koje su prijavljenei na servis
  //i osluskuju na promene
  changeEmetted$ = this.emitChangeUser.asObservable();

  //poziva se kada hocemo da emitujemo poruku
  emitUser(user: User){
    this.emitChangeUser.next(user);
  }
}
