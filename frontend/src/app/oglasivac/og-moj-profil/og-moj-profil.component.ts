import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Agencije } from 'src/app/models/Agencije';
import { AgencijeService } from 'src/app/services/agencije.service';

@Component({
  selector: 'app-og-moj-profil',
  templateUrl: './og-moj-profil.component.html',
  styleUrls: ['./og-moj-profil.component.css'],
})
export class OgMojProfilComponent implements OnInit {
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
  agencijaSeMenja: boolean = false;
  promeniAgenciju() {
    this.agencijaSeMenja = !this.agencijaSeMenja;
  }
  lozinkaSeMenja: boolean = false;
  promeniLozinku() {
    this.lozinkaSeMenja = !this.lozinkaSeMenja;
  }

  constructor(private userService: UserService, private agencijeService: AgencijeService) { }

  @Input() user: User = new User;
  @Output() updateUser = new EventEmitter<User>()


  ngOnInit(): void {
    //ucitavamo podatke ulogovanog korisnika
    this.ucitajInfoKorisnika()

    // hvatamo iz baze agencije i smestamo ih u niz agencije[]
    this.agencijeService.getAgencije().then((res) => {
      this.agencije = JSON.parse(JSON.stringify(res));
    });
   }

   ucitajInfoKorisnika () {
    //parsiranje korisnika iz localstorage i dovlacenje svih informacija o njemu iz base
    this.userService.parseLoggedUser()?.then((res) => {
      this.user = JSON.parse(JSON.stringify(res));
    })
}

  newMail!: string;
  kor_ime!: string;
  newTel!: number;
  agencije!: Agencije[];
  newSelectedAgency!: string;

  ngOnChanges(changes: SimpleChanges) {
    this.newMail = this.user.email;
    this.newTel = this.user.telefon;
  }
  izmenaMail(){ 
    let changedUser = new User();
    changedUser.email = this.newMail;
    changedUser.kor_ime = this.user.kor_ime
    console.log(changedUser)
    this.userService.updateUserEmail(changedUser)
    .then((res) => {
      alert("Uspesno izmenjena email adresa");
      this.ucitajInfoKorisnika();
      this.updateUser.emit(changedUser);
    })
    .catch((res) => {
      alert(res.error);
    })
  }

  izmenaTel(){ 
    let changedUser = new User();
    changedUser.telefon = this.newTel;
    changedUser.kor_ime = this.user.kor_ime
    console.log(changedUser)
    this.userService.updateUserTel(changedUser)
    .then((res) => {
      alert("Uspesno izmenjen broj telefona");
      this.ucitajInfoKorisnika();
      this.updateUser.emit(changedUser);
    })
    .catch((res) => {
      alert(res.error);
    })
  }

  izmenaAgencije() {
    let changedUser = new User();
    changedUser.selectedAgency = this.newSelectedAgency;
    changedUser.kor_ime = this.user.kor_ime
    console.log(changedUser)
    this.userService.updateUserAgency(changedUser)
    .then((res) => {
      alert("Uspesno izmenjena agencija");
      this.ucitajInfoKorisnika();
      this.updateUser.emit(changedUser);
    })
    .catch((res) => {
      alert(res.error);
    })

  }




}
