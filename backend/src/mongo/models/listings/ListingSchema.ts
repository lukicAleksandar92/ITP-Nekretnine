import mongoose from "mongoose";
import { Listing } from "./Listing";

export const listingSchema = new mongoose.Schema<Listing>({
  lokacija: { type: String },
  adresa: { type: String },
  nazivOglasa: { type: String },
  tipNekretnine: { type: String },
  cena: { type: Number },
  kvadratura: { type: Number },
  brojSoba: { type: String },
  godinaIzgradnje: { type: String },
  stanjeNekretnine: { type: String },
  tipGrejanja: { type: String },
  sprat: { type: String },
  mesecneRezije: { type: Number },
  karakteristike: [{ type: String }],
  linije: [{ type: String }],
});
