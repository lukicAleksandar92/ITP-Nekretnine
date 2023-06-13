import mongoose, { Schema } from "mongoose";
import { Agencije} from "./Agencije";

export const agencijeSchema = new mongoose.Schema<Agencije>({
    naziv: {type: String},
    adresa: {type: String},
    grad: {type: String},
    telefon: {type: Number},
    PIB: {type: Number},

})