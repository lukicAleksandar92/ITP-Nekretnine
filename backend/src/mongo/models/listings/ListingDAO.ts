import mongoose from "mongoose";
import { listingSchema } from "./ListingSchema";
import { Listing } from "./Listing";

class ListingDAO {
  private listingModel = mongoose.model("listing", listingSchema, "oglasi");

  async insertListing(listing: Listing) {
    let newListingModel = new this.listingModel(listing);
    return newListingModel.save();
  }
}

export const listingDAO = new ListingDAO();
