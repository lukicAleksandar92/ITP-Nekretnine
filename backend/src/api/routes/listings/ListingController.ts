import { Body, Controller, Post, Route } from "tsoa";
import { Listing } from "../../../mongo/models/listings/Listing";
import { listingDAO } from "../../../mongo/models/listings/ListingDAO";

@Route("listings")
export class ListingController extends Controller {
  @Post("insert")
  async insertListing(@Body() listing: any) {
    console.log(listing);
    let result = await listingDAO.insertListing(listing);
    return result;
  }
}
