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
exports.listingDAO = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ListingSchema_1 = require("./ListingSchema");
class ListingDAO {
    constructor() {
        this.listingModel = mongoose_1.default.model("listing", ListingSchema_1.listingSchema, "oglasi");
    }
    insertListing(listing) {
        return __awaiter(this, void 0, void 0, function* () {
            let newListingModel = new this.listingModel(listing);
            return newListingModel.save();
        });
    }
    getAllListings() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.listingModel.find();
        });
    }
    getListingById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.listingModel.findById(id);
        });
    }
    updateListing(listing, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let activeListing = this.getListingById(id);
            if (activeListing != null) {
                const currentDate = new Date();
                return this.listingModel.updateOne({ _id: id }, {
                    $set: {
                        lokacija: listing.lokacija,
                        ulica: listing.ulica,
                        nazivOglasa: listing.nazivOglasa,
                        tipNekretnine: listing.tipNekretnine,
                        cena: listing.cena,
                        kvadratura: listing.kvadratura,
                        brojSoba: listing.brojSoba,
                        godinaIzgradnje: listing.godinaIzgradnje,
                        stanjeNekretnine: listing.stanjeNekretnine,
                        tipGrejanja: listing.tipGrejanja,
                        sprat: listing.sprat,
                        ukupnaSpratnost: listing.ukupnaSpratnost,
                        mesecneRezije: listing.mesecneRezije,
                        karakteristike: listing.karakteristike,
                        linije: listing.linije,
                        opis: listing.opis,
                        slike: listing.slike,
                        datumIzmene: currentDate,
                    },
                });
            }
            return null;
        });
    }
    sellListing(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let activeLisitng = this.getListingById(id);
            if (activeLisitng != null) {
                const currentDate = new Date();
                return this.listingModel.updateOne({ _id: id }, {
                    $set: {
                        status: "prodato",
                        datumProdaje: currentDate,
                    },
                });
            }
        });
    }
    searchListings(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {};
            if (filter.lokacija.length > 0) {
                query.lokacija = { $in: filter.lokacija };
            }
            if (filter.tip !== undefined) {
                query.tipNekretnine = filter.tip;
            }
            if (filter.cena !== undefined) {
                query.cena = { $lte: filter.cena };
            }
            if (filter.kvadratura !== undefined) {
                query.kvadratura = { $gte: filter.kvadratura };
            }
            if (filter.brojSoba !== undefined) {
                query.brojSoba = { $gte: filter.brojSoba };
            }
            const filteredResults = this.listingModel.find(query);
            return filteredResults;
        });
    }
}
exports.listingDAO = new ListingDAO();
//# sourceMappingURL=ListingDAO.js.map