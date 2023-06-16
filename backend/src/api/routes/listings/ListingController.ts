import { Body, Controller, Get, Path, Post, Put, Route } from "tsoa";
import {
  AverageValue,
  Listing,
  SearchCriteria,
} from "../../../mongo/models/listings/Listing";
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
  @Get("getListingsByOglasivac/:oglasivac")
  async getListingsByOglasivac(@Path() oglasivac: string) {
    return listingDAO.getListingsByOglasivac(oglasivac);
  }
  @Get("getAverageValues")
  async getAverageValues(): Promise<AverageValue[] | null> {
    return await listingDAO.getAverageValues();
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
  @Post("search")
  async searchListings(@Body() filter: SearchCriteria) {
    let result = await listingDAO.searchListings(filter);
    if (result == null) this.setStatus(404);
    return result;
  }
  @Post("getFavoriteListings")
  async getFavoriteListing(@Body() listings: string[]) {
    let result = await listingDAO.getFavoriteListings(listings);
    if (result == null) this.setStatus(404);
    return result;
  }
}
