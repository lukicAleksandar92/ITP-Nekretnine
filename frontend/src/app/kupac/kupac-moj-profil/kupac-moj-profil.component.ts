import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kupac-moj-profil',
  templateUrl: './kupac-moj-profil.component.html',
  styleUrls: ['./kupac-moj-profil.component.css'],
})
export class KupacMojProfilComponent implements OnInit {
  arrowRight = faArrowRight;
  x = faX;
  mailSeMenja: boolean = false;
  promeniMail() {
    this.mailSeMenja = !this.mailSeMenja;
  }
  telefonSeMenja: boolean = false;
  promeniTelefon() {
    this.telefonSeMenja = !this.telefonSeMenja;
  }
  lozinkaSeMenja: boolean = false;
  promeniLozinku() {
    this.lozinkaSeMenja = !this.lozinkaSeMenja;
  }
  slikaSeMenja: boolean = false;
  promeniSliku() {
    this.slikaSeMenja = !this.slikaSeMenja;
  }

  constructor(private userService: UserService, private router: Router) {}

  @Input() user: User = new User();
  @Output() updateUser = new EventEmitter<User>();

  ngOnInit(): void {
    //ucitavamo podatke ulogovanog korisnika
    this.ucitajInfoKorisnika();
  }

  ucitajInfoKorisnika() {
    //parsiranje korisnika iz localstorage i dovlacenje svih informacija o njemu iz base
    this.userService.parseLoggedUser()?.then((res) => {
      this.user = JSON.parse(JSON.stringify(res));
    });
  }

  newMail!: string;
  kor_ime!: string;
  newTel!: number;
  oldPassword!: string;
  newPassword!: string;
  repeatNewPassword!: string;
  ngOnChanges(changes: SimpleChanges) {
    this.newMail = this.user.email;
    this.newTel = this.user.telefon;
  }
  izmenaMail() {
    let changedUser = new User();
    changedUser.email = this.newMail;
    changedUser.kor_ime = this.user.kor_ime;
    console.log(changedUser);
    this.userService
      .updateUserEmail(changedUser)
      .then((res) => {
        alert('Uspesno izmenjena email adresa');
        this.ucitajInfoKorisnika();
        this.updateUser.emit(changedUser);
      })
      .catch((res) => {
        alert(res.error);
      });
  }

  izmenaTel() {
    let changedUser = new User();
    changedUser.telefon = this.newTel;
    changedUser.kor_ime = this.user.kor_ime;
    console.log(changedUser);
    this.userService
      .updateUserTel(changedUser)
      .then((res) => {
        alert('Uspesno izmenjen broj telefona');
        this.ucitajInfoKorisnika();
        this.updateUser.emit(changedUser);
      })
      .catch((res) => {
        alert(res.error);
      });
  }

  izmenaLozinke() {
    let changedUser = new User();
    changedUser.kor_ime = this.user.kor_ime;

    if (!this.newPassword) {
      alert('Morate uneti novu lozinku');
      return;
    }
    if (this.oldPassword != this.user.lozinka) {
      alert('Neispravna važeća lozinka');
      return;
    }
    if (this.newPassword != this.repeatNewPassword) {
      alert('Lozinke se ne podudaraju!');
      return;
    }
    changedUser.lozinka = this.newPassword;

    this.userService
      .updateUserpassword(changedUser)
      .then((res) => {
        alert('Uspesno izmenjena lozinka');
        this.ucitajInfoKorisnika();
        this.updateUser.emit(changedUser);
      })
      .catch((res) => {
        alert(res.error);
      });

      
        localStorage.clear();
        this.user == null;
        this.router.navigate(['']);
      
  }
}
