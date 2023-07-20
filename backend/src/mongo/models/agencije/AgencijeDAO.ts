import mongoose from "mongoose";
import { agencijeSchema } from "./AgencijeSchema";
import { Agencije } from "./Agencije";

class AgencijeDAO {
  private agencijegModel = mongoose.model(
    "agencije",
    agencijeSchema,
    "agencije"
  );
  async getAllListings(): Promise<Agencije[]> {
    return this.agencijegModel.find();
  }
  async getAgencijaByNaziv(naziv: string) {
    return this.agencijegModel.findOne({ naziv: naziv });
  }
}

export const agencijeDAO = new AgencijeDAO();
