import { Component, OnInit } from '@angular/core';
import { User, Slika } from '../models/User';
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
  confirmPassword!: string;
  tip!: string;
  naziv!: string;
  agencije!: Agencije[];
  selectedAgency!: string;
  licenca!: number;

  register() {

    if (this.lozinka != this.confirmPassword) {
      alert('Lozinke se ne podudaraju!');
      return;
    }

    // Proverava da li su sva polja popunjena
    if (!this.ime || !this.prezime || !this.datumRodjenja || !this.grad || !this.telefon || !this.email || !this.kor_ime || !this.lozinka || !this.tip ) {
      alert('Morate popuniti sva polja');
      return; 
    }

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
    user.slike = this.slikeString64;

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
  odabraneSlike: File[] = [];
  slikeString64: Slika[] = [];

  handleFileInput(event: any) {
    const files: FileList = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      const reader: FileReader = new FileReader();

      reader.onloadend = () => {
        const base64String: string = reader.result as string;
        this.slikeString64.push({ name: file.name, source: base64String });
      };
      this.odabraneSlike.push(file);
      reader.readAsDataURL(file);
    }
  }
  deselectFile(imeSlike: string) {
    this.odabraneSlike = this.odabraneSlike.filter((f) => f.name !== imeSlike);
    this.slikeString64 = this.slikeString64.filter(
      (img) => img.name !== imeSlike
    );
  }


}
