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
  agencija: string | undefined = undefined;
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
