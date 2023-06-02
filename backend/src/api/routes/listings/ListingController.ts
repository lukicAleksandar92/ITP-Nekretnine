import { Body, Controller, Get, Path, Post, Route } from "tsoa";
import { Listing } from "../../../mongo/models/listings/Listing";
import { listingDAO } from "../../../mongo/models/listings/ListingDAO";

@Route("listings")
export class ListingController extends Controller {
  @Post("insert")
  async insertListing(@Body() listing: any) {
    let result = await listingDAO.insertListing(listing);
    return result;
  }
  @Post("getAll")
  async getAllListings() {
    return await listingDAO.getAllListings();
  }
  @Get("getOne/:id")
  async getListingById(@Path() id: string): Promise<Listing | null> {
    return listingDAO.getListingById(id);
  }
}
