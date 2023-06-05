import { Body, Controller, Get, Path, Post, Put, Route } from "tsoa";
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
  @Put("update/:id")
  async updateListing(@Body() listing: Listing, @Path() id: string) {
    let result = await listingDAO.updateListing(listing, id);
    if (result == null) this.setStatus(404);
    return result;
  }
  @Put("sell/:id")
  async sellListing(@Path() id: string) {
    let result = await listingDAO.sellListing(id);
    if (result == null) this.setStatus(404);
    return result;
  }
}
