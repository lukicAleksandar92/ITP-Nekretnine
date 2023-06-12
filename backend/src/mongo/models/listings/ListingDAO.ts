import mongoose from "mongoose";
import { listingSchema } from "./ListingSchema";
import { Listing, SearchCriteria } from "./Listing";

class ListingDAO {
  private listingModel = mongoose.model("listing", listingSchema, "oglasi");

  async insertListing(listing: Listing) {
    let newListingModel = new this.listingModel(listing);
    return newListingModel.save();
  }
  async getAllListings(): Promise<Listing[]> {
    return this.listingModel.find();
  }
  async getListingById(id: string): Promise<Listing | null> {
    return this.listingModel.findById(id);
  }
  async updateListing(listing: Listing, id: string) {
    let activeListing = this.getListingById(id);

    if (activeListing != null) {
      const currentDate = new Date();
      return this.listingModel.updateOne(
        { _id: id },
        {
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
        }
      );
    }

    return null;
  }
  async sellListing(id: string) {
    let activeLisitng = this.getListingById(id);
    if (activeLisitng != null) {
      const currentDate = new Date();
      return this.listingModel.updateOne(
        { _id: id },
        {
          $set: {
            status: "prodato",
            datumProdaje: currentDate,
          },
        }
      );
    }
  }
  async searchListings(filter: SearchCriteria) {
    const query: any = {};
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
  }
}

export const listingDAO = new ListingDAO();
