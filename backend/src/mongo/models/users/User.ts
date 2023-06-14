export interface User {
  ime: string;
  prezime: string;
  datumRodjenja: string;
  grad: string;
  telefon: number;
  email: string;
  kor_ime: string;
  lozinka: string;
  tip: string;
  agencija: string | undefined;
  omiljeniOglasi: string[];
}
export interface UserFavoriteListing {
  kor_ime: string;
  omiljeniOglasi: string[];
}
