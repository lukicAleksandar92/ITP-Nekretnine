import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUser, User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  korisnicko_ime: string = '';
  lozinka: string = '';
  loggedUser!: LoggedUser;

  login() {
    this.userService
      .login(this.korisnicko_ime, this.lozinka)
      .then((response) => {
        let strUser = JSON.stringify(response);
        let user: User = JSON.parse(strUser);
        if (user == null) {
          alert('Nisu ispravni podaci');
        } else {
          //pamtimo samo korisnicko ime i tip ui lokal storage
          this.loggedUser = {
            kor_ime: user.kor_ime,
            tip: user.tip,
          };
          localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
          /* this.sharedCurrUserService.emitUser(user); */
          //this.output.emit(user);

          if (user.tip == 'kupac') {
            //kupac
            this.router.navigate(['/naslovna']);
          } else {
            //oglasivac
            this.router.navigate(['/moji-oglasi']);
          }
        }
      });
      
  }

}
