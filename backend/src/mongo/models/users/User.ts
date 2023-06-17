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
  selectedAgency: string | undefined;
  licenca: number | undefined;
  omiljeniOglasi: string[];
  slike: Slika[];
}

export interface Slika {
  name: string;
  source: string;
}
export interface UserFavoriteListing {
  kor_ime: string;
  omiljeniOglasi: string[];
}
