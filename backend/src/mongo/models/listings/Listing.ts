export interface Listing {
  oglasivac: string;
  lokacija: string;
  ulica: string;
  nazivOglasa: string;
  tipNekretnine: string;
  cena: number;
  kvadratura: number;
  brojSoba: number;
  godinaIzgradnje: number;
  stanjeNekretnine: string;
  tipGrejanja: string;
  sprat: number;
  ukupnaSpratnost: number;
  mesecneRezije: number;
  karakteristike: string[];
  linije: string[];
  opis: string;
  slike: Slika[];
  status: string;
  datumIzmene: Date | undefined;
  datumProdaje: Date | undefined;
}
export class SearchCriteria {
  lokacija: string[] = [];
  tip: string | undefined = undefined;
  kvadratura: number | undefined = undefined;
  cena: number | undefined = undefined;
  brojSoba: number | undefined = undefined;
}
export interface Slika {
  name: string;
  source: string;
}
