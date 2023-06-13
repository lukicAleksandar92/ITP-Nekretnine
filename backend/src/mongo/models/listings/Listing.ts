export interface Listing {
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

  datumIzmene: Date | undefined;
  datumProdaje: Date | undefined;

  status: string;
  oglasivac: string;
  tipOglasivaca: string;
}
export class SearchCriteria {
  lokacija: string[] = [];
  tip: string | undefined = undefined;
  cenaOd: number | undefined = undefined;
  cenaDo: number | undefined = undefined;
  kvadraturaOd: number | undefined = undefined;
  kvadraturaDo: number | undefined = undefined;
  brojSobaOd: number | undefined = undefined;
  brojSobaDo: number | undefined = undefined;
  godinaIzgradnjeOd: number | undefined = undefined;
  godinaIzgradnjeDo: number | undefined = undefined;
  tipOglasivaca: string[] = [];
  stanjeNekretnine: string[] = [];
  tipGrejanja: string[] = [];
  spratOd: number | undefined = undefined;
  spratDo: number | undefined = undefined;
  mesecneRezijeOd: number | undefined = undefined;
  mesecneRezijeDo: number | undefined = undefined;
}
export interface Slika {
  name: string;
  source: string;
}
