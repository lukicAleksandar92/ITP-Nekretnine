import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService) { }

  @Input() user: User = new User;
  @Output() updateUser = new EventEmitter<User>()


  ngOnInit(): void {
    this.userService.parseLoggedUser()?.then((res) => {
      this.user = JSON.parse(JSON.stringify(res));
    })
   }

  newMail!: string;
  kor_ime!: string;
  newTel!: number;

  ngOnChanges(changes: SimpleChanges) {
    this.newMail = this.user.email;
    this.newTel = this.user.telefon;
  }
  izmenaMail(){ 
    let changedUser = new User();
    changedUser.email = this.newMail;
    changedUser.kor_ime = this.user.kor_ime
    console.log(changedUser)
    this.userService.updateUser(changedUser)
    .then((res) => {
      alert("Uspesno izmenjena email adresa");
      this.updateUser.emit(changedUser);
    })
    .catch((res) => {
      alert(res.error);
    })
  }

  // izmenaTel(){ 
  //   let changedUser = new User();
  //   changedUser.telefon = this.newTel;
  //   changedUser.kor_ime = this.user.kor_ime
  //   console.log(changedUser)
  //   this.userService.updateUser(changedUser)
  //   .then((res) => {
  //     alert("Uspesno izmenjen broj telefona");
  //     this.updateUser.emit(changedUser);
  //   })
  //   .catch((res) => {
  //     alert(res.error);
  //   })
  // }




}
