import mongoose from "mongoose";
import { User } from "./User";

export const userSchema = new mongoose.Schema<User>({
  ime: { type: String },
  prezime: { type: String },
  datumRodjenja: { type: String },
  grad: { type: String },
  telefon: { type: Number },
  email: { type: String },
  kor_ime: { type: String },
  lozinka: { type: String },
  tip: { type: String },
  selectedAgency: {type: String},
  licenca: {type: Number},
  omiljeniOglasi: [{ type: String }],
  slike: [{ name: { type: String }, source: { type: String } }],
});
