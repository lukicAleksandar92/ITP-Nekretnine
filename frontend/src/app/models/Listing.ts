export class Listing {
  _id!: string;
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

  datumIzmene!: Date | undefined;
  mesecProdaje!: number;

  status: string = 'nije prodato';
  oglasivac!: string;
  tipOglasivaca!: string;
}
export interface Slika {
  name: string;
  source: string;
}
export class Filter {
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
  status: string | undefined;
}

export class AverageValue {
  _id!: AverageValueId;
  srednjaVrednost!: number;
}

export class AverageValueId {
  lokacija!: string;
  tip!: string;
}

export class NumberOfSold {
  // _id predstavlja mesec u kome je izvrsena prodaja
  _id!: number;
  ukupno!: number;
}
