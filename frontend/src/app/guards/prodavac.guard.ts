import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdavacGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    /* let user = JSON.parse(localStorage.getItem("loggedUser"));
      if(user.tip !== 'kupac' ){
        return true;
      }
      else{
        alert("Nemate pristup");
        return false;
      }
  } */
    const userJson = localStorage.getItem('loggedUser');

    if (userJson) {
      try {
        const user = JSON.parse(userJson);

        if (user.tip === 'samostalni prodavac' || user.tip === 'agent') {
          return true;
        } else if (user.tip === 'kupac') {
          alert('Nemate pristup');
          this.router.navigate(['/naslovna']);
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
