import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { SharedCurrUserService } from '../services/shared-curr-user.service';
import { Agencije } from '../models/Agencije';
import { AgencijeService } from '../services/agencije.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css'],
})
export class RegistracijaComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private sharedCurrUserService: SharedCurrUserService,
    private agencijeService: AgencijeService
  ) {}

  ngOnInit(): void {
    // hvatamo iz baze agencije i smestamo ih u niz agencije[]
    this.agencijeService.getAgencije().then((res) => {
      this.agencije = JSON.parse(JSON.stringify(res));
    });
  }

  ime!: string;
  prezime!: string;
  datumRodjenja!: string;
  grad!: string;
  telefon!: number;
  email!: string;
  kor_ime!: string;
  lozinka!: string;
  tip!: string;
  naziv!: string;
  agencije!: Agencije[];
  selectedAgency!: string;
  licenca!: number;

  register() {
    let user = new User();

    user.ime = this.ime;
    user.prezime = this.prezime;
    user.datumRodjenja = this.datumRodjenja;
    user.grad = this.grad;
    user.telefon = this.telefon;
    user.email = this.email;
    user.kor_ime = this.kor_ime;
    user.lozinka = this.lozinka;
    user.tip = this.tip;
    user.selectedAgency = this.selectedAgency;
    user.licenca = this.licenca;
    

    this.userService
      .insertUser(user)
      .then((res) => {
        alert('Uspesno kreiran korisnik');
      })
      .catch((res) => {
        alert(res.error);
      });

    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.sharedCurrUserService.emitUser(user);
    //this.output.emit(user);

    if (user.tip == 'kupac') {
      //kupac
      this.router.navigate(['/naslovna']);
    } else {
      //oglasivac
      this.router.navigate(['/moji-oglasi']);
    }
    
  }
}
