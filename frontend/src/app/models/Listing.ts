export class Listing {
  _id!: string;
  oglasivac!: string;
  lokacija!: string;
  ulica!: string;
  nazivOglasa!: string;
  tipNekretnine!: string;
  cena!: number;
  kvadratura!: number;
  brojSoba!: number;
  godinaIzgradnje!: number;
  stanjeNekretnine!: string;
  tipGrejanja!: string;
  sprat!: number;
  ukupnaSpratnost!: number;
  mesecneRezije!: number;
  karakteristike: string[] = [];
  linije: string[] = [];
  opis!: string;
  slike: Slika[] = [];

  status: string = 'nije prodato';
  datumIzmene!: Date | undefined;
  datumProdaje!: Date | undefined;
}
export interface Slika {
  name: string;
  source: string;
}
