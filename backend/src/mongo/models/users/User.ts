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
  selectedAgency: string;
  licenca: number;
  omiljeniOglasi: string[];
}
export interface UserFavoriteListing {
  kor_ime: string;
  omiljeniOglasi: string[];
}
