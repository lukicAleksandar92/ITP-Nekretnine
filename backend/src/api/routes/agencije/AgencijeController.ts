import { Body, Controller, Get, Path, Post, Put, Route } from "tsoa";

import { agencijeDAO } from "../../../mongo/models/agencije/AgencijeDAO";

@Route("agencije")
export class AgencijeController extends Controller {
  @Get("getAll")
  async getAllListings() {
    return await agencijeDAO.getAllListings();
  }
}
