import mongoose from "mongoose";
import { Listing } from "./Listing";

export const listingSchema = new mongoose.Schema<Listing>({
  oglasivac: { type: String },
  lokacija: { type: String },
  ulica: { type: String },
  nazivOglasa: { type: String },
  tipNekretnine: { type: String },
  cena: { type: Number },
  kvadratura: { type: Number },
  brojSoba: { type: Number },
  godinaIzgradnje: { type: Number },
  stanjeNekretnine: { type: String },
  tipGrejanja: { type: String },
  sprat: { type: Number },
  ukupnaSpratnost: { type: Number },
  mesecneRezije: { type: Number },
  karakteristike: [{ type: String }],
  linije: [{ type: String }],
  opis: { type: String },
  slike: [{ name: { type: String }, source: { type: String } }],

  status: { type: String },
  datumIzmene: { type: Date, sparse: true },
  datumProdaje: { type: Date, sparse: true },
});
