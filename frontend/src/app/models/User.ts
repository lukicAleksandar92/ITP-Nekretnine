export class User {
  ime: string = '';
  prezime: string = '';
  datumRodjenja: string = '';
  grad: string = '';
  telefon: number = 0;
  email: string = '';
  kor_ime: string = '';
  lozinka: string = '';
  tip: string = '';
  selectedAgency: string = '';
  licenca: number = 0;
  omiljeniOglasi: string[] = [];
  slike: Slika[] = [];
}

export interface Slika {
  name: string;
  source: string;
}

export interface LoggedUser {
  kor_ime: string;
  tip: string;
}

export interface UserFavoriteListing {
  kor_ime: string;
  omiljeniOglasi: string[];
}
