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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDao = void 0;
const mongoose_1 = require("mongoose");
const userSchema_1 = require("./userSchema");
class UserDao {
    constructor() {
        this.schema = userSchema_1.userSchema;
        this.model = (0, mongoose_1.model)("User", this.schema);
    }
    addOneUserDm(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.model.create([user]);
            return result;
        });
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find({});
        });
    }
    findUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOne({ username }).lean();
        });
    }
    findUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOne({ email }).lean();
        });
    }
}
exports.userDao = new UserDao();
//# sourceMappingURL=UserDao.js.map