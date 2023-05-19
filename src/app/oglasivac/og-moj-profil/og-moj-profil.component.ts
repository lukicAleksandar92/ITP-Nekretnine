import { Component, OnInit } from '@angular/core';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-og-moj-profil',
  templateUrl: './og-moj-profil.component.html',
  styleUrls: ['./og-moj-profil.component.css'],
})
export class OgMojProfilComponent {
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
}
