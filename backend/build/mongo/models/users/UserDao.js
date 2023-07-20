"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDAO = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema_1 = require("./UserSchema");
class UserDAO {
    constructor() {
        this.userModel = mongoose_1.default.model("user", UserSchema_1.userSchema, "korisnici");
    }
    login(korisnicko_ime, lozinka) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.userModel.findOne({
                kor_ime: korisnicko_ime,
                lozinka: lozinka,
            });
            if (user != null) {
                this.logUserLogin(user.kor_ime);
            }
            return user;
        });
    }
    logUserLogin(kor_ime) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.updateOne({ kor_ime: kor_ime }, { $push: { logins: new Date() } });
        });
    }
    getUserByKorIme(kor_ime) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userModel.findOne({ kor_ime: kor_ime });
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userModel.findOne({ email: email });
        });
    }
    checkKorImeAndEmail(kor_ime, email) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultKorIme = yield this.userModel.findOne({ kor_ime: kor_ime });
            if (resultKorIme != null) {
                return "Korisnicko ime je zauzeto";
            }
            let resultEmail = yield this.userModel.findOne({ email: email });
            if (resultEmail != null) {
                return "Email je zauzet";
            }
            return "sve ok";
        });
    }
    insertUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let userInDB = yield this.getUserByKorIme(user.kor_ime);
            if (userInDB == null) {
                let newUserModel = new this.userModel(user);
                return newUserModel.save();
            }
            return "Korisnik vec postoji";
        });
    }
    updateUserEmail(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let userInDB = yield this.getUserByKorIme(user.kor_ime);
            let emailInDB = yield this.getUserByEmail(user.email);
            if (emailInDB != null) {
                return "Email je zauzet";
            }
            if (userInDB != null) {
                return this.userModel.updateOne({ kor_ime: user.kor_ime }, { $set: { email: user.email } });
            }
            return "Korisnik ne postoji";
        });
    }
    updateUserTel(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let userInDB = yield this.getUserByKorIme(user.kor_ime);
            if (userInDB != null) {
                return this.userModel.updateOne({ kor_ime: user.kor_ime }, { $set: { telefon: user.telefon } });
            }
            return "Korisnik ne psotoji";
        });
    }
    updateUserPassword(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let userInDB = yield this.getUserByKorIme(user.kor_ime);
            if (userInDB != null) {
                return this.userModel.updateOne({ kor_ime: user.kor_ime }, { $set: { lozinka: user.lozinka } });
            }
            return "Korisnik ne psotoji";
        });
    }
    updateUserAgency(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let userInDB = yield this.getUserByKorIme(user.kor_ime);
            if (userInDB != null) {
                return this.userModel.updateOne({ kor_ime: user.kor_ime }, { $set: { selectedAgency: user.selectedAgency } });
            }
            return "Korisnik ne psotoji";
        });
    }
    updateUserSlike(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let userInDB = yield this.getUserByKorIme(user.kor_ime);
            if (userInDB != null) {
                return this.userModel.updateOne({ kor_ime: user.kor_ime }, { $set: { slike: user.slike } });
            }
            return "Korisnik ne psotoji";
        });
    }
    getAllAgents(selectedAgency) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.find({ selectedAgency: selectedAgency }, { _id: 0, kor_ime: 1 });
        });
    }
    updateFavoriteListing(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let activeUser = yield this.getUserByKorIme(user.kor_ime);
            if (activeUser != null) {
                return this.userModel.updateOne({ kor_ime: user.kor_ime }, {
                    $set: {
                        omiljeniOglasi: user.omiljeniOglasi,
                    },
                });
            }
        });
    }
}
exports.userDAO = new UserDAO();
//# sourceMappingURL=UserDAO.js.map