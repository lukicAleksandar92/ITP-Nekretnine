import { Component, OnInit } from '@angular/core';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-kupac-moj-profil',
  templateUrl: './kupac-moj-profil.component.html',
  styleUrls: ['./kupac-moj-profil.component.css']
})
export class KupacMojProfilComponent {
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

}
