"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agencijeDAO = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AgencijeSchema_1 = require("./AgencijeSchema");
class AgencijeDAO {
    constructor() {
        this.agencijegModel = mongoose_1.default.model("agencije", AgencijeSchema_1.agencijeSchema, "agencije");
    }
}
exports.agencijeDAO = new AgencijeDAO();
//# sourceMappingURL=AgencijeDAO.js.map