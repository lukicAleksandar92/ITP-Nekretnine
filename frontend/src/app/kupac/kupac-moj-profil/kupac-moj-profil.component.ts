import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';
import { User, Slika } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input() user: User = new User();
  @Output() updateUser = new EventEmitter<User>();

  ngOnInit(): void {
    //ucitavamo podatke ulogovanog korisnika
    this.ucitajInfoKorisnika();

    const id = this.route.snapshot.paramMap.get('kor_ime');
    if (this.kor_ime != null)
      this.userService.getUserByKorIme(this.kor_ime).then((res) => {
        this.slikeString64 = this.user.slike.map((obj) => {
          return { name: obj.name, source: obj.source };
        });
      });
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
  odabraneSlike: File[] = [];
  slikeString64: Slika[] = [];

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
  handleFileInput(event: any) {
    const files: FileList = event.target.files;

    for (let i = 0; i < files.length; i++) {
      let file: File = files[i];
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
    console.log(this.odabraneSlike);
  }

  izmenaSlike() {
    let changedUser = new User();

    changedUser.slike = this.slikeString64;

    changedUser.kor_ime = this.user.kor_ime;
    console.log(changedUser);
    this.userService
      .updateUserSlike(changedUser)
      .then((res) => {
        alert('Uspesno izmenjena slika');
        this.ucitajInfoKorisnika();
        this.updateUser.emit(changedUser);
      })
      .catch((res) => {
        alert(res.error);
      });
  }
}
