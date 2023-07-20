"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tsoa_1 = require("tsoa");
const UserDAO_1 = require("../../../mongo/models/users/UserDAO");
let UserController = class UserController extends tsoa_1.Controller {
    //POST zahtev za login korisnika
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserDAO_1.userDAO.login(user.kor_ime, user.lozinka);
        });
    }
    //POST zahtev unos korisnika
    insertUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UserDAO_1.userDAO.insertUser(user);
            return result;
        });
    }
    //POST zahtev za proveru jedinstvenog kor.imena i emaila
    checkNameAndEmail(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UserDAO_1.userDAO.checkKorImeAndEmail(user.kor_ime, user.email);
            return result;
        });
    }
    //PUT zahtev za azuiranje mail-a
    updateUserEmail(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UserDAO_1.userDAO.updateUserEmail(user);
            if (result == "Korisnik ne postoji")
                this.setStatus(404);
            return result;
        });
    }
    //PUT zahtev za azuiranje telefona
    updateUserTel(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UserDAO_1.userDAO.updateUserTel(user);
            if (result == "Korisnik ne postoji")
                this.setStatus(404);
            return result;
        });
    }
    //PUT zahtev za azuiranje agencije
    updateUserAgency(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UserDAO_1.userDAO.updateUserAgency(user);
            if (result == "Korisnik ne postoji")
                this.setStatus(404);
            return result;
        });
    }
    //PUT zahtev za azuiranje lozinke
    updateUserPassword(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UserDAO_1.userDAO.updateUserPassword(user);
            if (result == "Korisnik ne postoji")
                this.setStatus(404);
            return result;
        });
    }
    //PUT zahtev za azuiranje slike
    updateUserSlike(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UserDAO_1.userDAO.updateUserSlike(user);
            if (result == "Korisnik ne postoji")
                this.setStatus(404);
            return result;
        });
    }
    //GET ruta za pretragu korisnika po korisničkom imenu
    getAllAgents(nazivAgencije) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UserDAO_1.userDAO.getAllAgents(nazivAgencije);
            if (result == null)
                this.setStatus(404);
            return result;
        });
    }
    getUserByKorIme(kor_ime) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UserDAO_1.userDAO.getUserByKorIme(kor_ime);
            if (result == null)
                this.setStatus(404);
            return result;
        });
    }
    //PUT zahtev za azuiranje omiljenih nekretnina
    updateListing(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield UserDAO_1.userDAO.updateFavoriteListing(user);
            if (result == null)
                this.setStatus(404);
            return result;
        });
    }
};
__decorate([
    (0, tsoa_1.Post)("login"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "login", null);
__decorate([
    (0, tsoa_1.Post)("insert"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "insertUser", null);
__decorate([
    (0, tsoa_1.Post)("check"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "checkNameAndEmail", null);
__decorate([
    (0, tsoa_1.Put)("updateEmail"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "updateUserEmail", null);
__decorate([
    (0, tsoa_1.Put)("updateTel"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "updateUserTel", null);
__decorate([
    (0, tsoa_1.Put)("updateAgency"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "updateUserAgency", null);
__decorate([
    (0, tsoa_1.Put)("updatePassword"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "updateUserPassword", null);
__decorate([
    (0, tsoa_1.Put)("updateSlike"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "updateUserSlike", null);
__decorate([
    (0, tsoa_1.Get)("getAllAgents/:nazivAgencije"),
    __param(0, (0, tsoa_1.Path)())
], UserController.prototype, "getAllAgents", null);
__decorate([
    (0, tsoa_1.Get)("fetchUser/:kor_ime"),
    __param(0, (0, tsoa_1.Path)())
], UserController.prototype, "getUserByKorIme", null);
__decorate([
    (0, tsoa_1.Put)("updateFavoriteListing"),
    __param(0, (0, tsoa_1.Body)())
], UserController.prototype, "updateListing", null);
UserController = __decorate([
    (0, tsoa_1.Route)("users")
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map