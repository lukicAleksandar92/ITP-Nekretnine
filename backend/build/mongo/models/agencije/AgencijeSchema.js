"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agencijeSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.agencijeSchema = new mongoose_1.default.Schema({
    naziv: { type: String },
    adresa: { type: String },
    grad: { type: String },
    telefon: { type: Number },
    PIB: { type: Number },
});
//# sourceMappingURL=AgencijeSchema.js.map