export class Listing {
  _id!: string;
  oglasivac!: string;
  lokacija!: string;
  ulica!: string;
  nazivOglasa!: string;
  tipNekretnine!: string;
  cena!: number;
  kvadratura!: number;
  brojSoba!: string;
  godinaIzgradnje!: string;
  stanjeNekretnine!: string;
  tipGrejanja!: string;
  sprat!: string;
  ukupnaSpratnost!: string;
  mesecneRezije!: number;
  karakteristike: string[] = [];
  linije: string[] = [];
  opis!: string;

  status: string = 'nije prodato';
}
