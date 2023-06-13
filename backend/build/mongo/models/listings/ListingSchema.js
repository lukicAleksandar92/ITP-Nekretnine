"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listingSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.listingSchema = new mongoose_1.default.Schema({
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
    datumIzmene: { type: Date, sparse: true },
    datumProdaje: { type: Date, sparse: true },
    status: { type: String },
    oglasivac: { type: String },
    tipOglasivaca: { type: String },
});
//# sourceMappingURL=ListingSchema.js.map