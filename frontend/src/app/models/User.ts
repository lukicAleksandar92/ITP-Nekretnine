export class User {
  ime: string = '';
  prezime: string = '';
  datumRodjenja: string = '';
  grad: string = '';
  telefon!: string;
  email: string = '';
  kor_ime: string = '';
  lozinka: string = '';
  tip: string = '';
  selectedAgency: string = '';
  licenca: number = 0;
  omiljeniOglasi: string[] = [];
}

export interface LoggedUser {
  kor_ime: string;
  tip: string;
}

export interface UserFavoriteListing {
  kor_ime: string;
  omiljeniOglasi: string[];
}
