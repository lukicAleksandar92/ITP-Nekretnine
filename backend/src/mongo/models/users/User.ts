export interface User {
  ime: string;
  prezime: string;
  datumRodjenja: string;
  grad: string;
  telefon: string;
  email: string;
  kor_ime: string;
  lozinka: string;
  tip: string;
  selectedAgency: string | undefined;
  licenca: number | undefined;
  omiljeniOglasi: string[];
}
export interface UserFavoriteListing {
  kor_ime: string;
  omiljeniOglasi: string[];
}
