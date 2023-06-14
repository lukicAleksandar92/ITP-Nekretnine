import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class KupacGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    /* let user = JSON.parse(localStorage.getItem('loggedUser'));
    if (user.tip == 'kupac') {
      return true;
    } else {
      alert('Nemate pristup');
      this.router.navigate(['']);
      return false;
    }
  } */
    const userJson = localStorage.getItem('loggedUser');
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        if (user.tip === 'kupac') {
          return true;
        } else if (user.tip === 'samostalniProdavac' || user.tip === 'agent') {
          alert('Nemate pristup');
          this.router.navigate(['/moji-oglasi']);
          return false;
        }
      } catch (error) {
        console.error('Error parsing loggedUser:', error);
      }
    }
    alert('Nemate pristup');
    this.router.navigate(['']);
    return false;
  }
}
