import { Body, Controller, Get, Path, Post, Put, Route } from "tsoa";

import { agencijeDAO } from "../../../mongo/models/agencije/AgencijeDAO";

@Route("agencije")
export class AgencijeController extends Controller {
  @Get("getAll")
  async getAllListings() {
    return await agencijeDAO.getAllListings();
  }
  @Get("fetchAgencija/:naziv")
  async getAgencijaByNaziv(@Path() naziv: string) {
    let result = await agencijeDAO.getAgencijaByNaziv(naziv);
    if (result == null) this.setStatus(404);
    return result;
  }
}
