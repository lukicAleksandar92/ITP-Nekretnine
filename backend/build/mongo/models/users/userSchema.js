"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.userSchema = new mongoose_1.default.Schema({
    ime: { type: String },
    prezime: { type: String },
    datumRodjenja: { type: String },
    grad: { type: String },
    telefon: { type: Number },
    email: { type: String },
    kor_ime: { type: String },
    lozinka: { type: String },
    tip: { type: String },
    selectedAgency: { type: String },
    licenca: { type: Number },
    omiljeniOglasi: [{ type: String }],
});
//# sourceMappingURL=UserSchema.js.map