import mongoose from "mongoose";
import { listingSchema } from "./ListingSchema";
import { Listing } from "./Listing";

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
      return this.listingModel.updateOne(
        { _id: id },
        {
          $set: {
            lokacija: listing.lokacija,
            adresa: listing.adresa,
            nazivOglasa: listing.nazivOglasa,
            tipNekretnine: listing.tipNekretnine,
            cena: listing.cena,
            kvadratura: listing.kvadratura,
            brojSoba: listing.brojSoba,
            godinaIzgradnje: listing.godinaIzgradnje,
            stanjeNekretnine: listing.stanjeNekretnine,
            tipGrejanja: listing.tipGrejanja,
            sprat: listing.sprat,
            mesecneRezije: listing.mesecneRezije,
            karakteristike: listing.karakteristike,
            linije: listing.linije,
          },
        }
      );
    }

    return null;
  }
}

export const listingDAO = new ListingDAO();
