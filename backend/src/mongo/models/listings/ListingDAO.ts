import mongoose from "mongoose";
import { listingSchema } from "./ListingSchema";
import { AverageValue, Listing, SearchCriteria , NumberOfSold} from "./Listing";
import { query } from "express";

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
  async getListingByOglasivac(kor_ime: string): Promise<Listing | null> {
    return this.listingModel.findOne({oglasivac: kor_ime});
  }
  async getAllSellByAgency(agents: string[]): Promise<NumberOfSold[] | null> {
    const currentDate:Date = new Date();
    const currentYear:number = currentDate.getFullYear();
    const firstDateOfYear:Date = new Date(currentYear+"-01-01");
    return this.listingModel.aggregate([
        { $match: { 
            oglasivac: {$in: agents},   
            status: "prodato",
            datumIzmene: {$gte: firstDateOfYear}
          }
        }, 
        { $group: {
            _id: "$mesecProdaje", 
            ukupno: {$count: {}}
          }
        }
    ]);
  }
  async getAllSellByLocation(location: string): Promise<NumberOfSold[] | null> {
    const currentDate:Date = new Date();
    const currentYear:number = currentDate.getFullYear();
    const firstDateOfYear:Date = new Date(currentYear+"-01-01");
    return this.listingModel.aggregate([
        { $match: { 
            lokacija: location,   
            status: "prodato",
            datumIzmene: {$gte: firstDateOfYear}
          }
        }, 
        { $group: {
            _id: "$mesecProdaje", 
            ukupno: {$count: {}}
          }
        }
    ]);
  }
  async getAverageValues(): Promise<AverageValue[] | null> {
    return this.listingModel.aggregate([
      {
        $group: {
          _id: {
            lokacija: "$lokacija",
            tip: "$tipNekretnine",
          },
          srednjaVrednost: { $avg: { $divide: ["$cena", "$kvadratura"] } },
        },
      },
    ]);
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
      let monthOfSell:number = currentDate.getMonth()+1;
      return this.listingModel.updateOne(
        { _id: id },
        { $set: {
            status: "prodato",
            datumIzmene: currentDate,
            mesecProdaje: monthOfSell
          }
        }
      );
    }
  }
  async searchListings(filter: SearchCriteria) {
    const query: any = {};
    //lokacija
    if (filter.lokacija.length > 0) {
      query.lokacija = { $in: filter.lokacija };
    }
    //tip
    if (filter.tip !== undefined) {
      query.tipNekretnine = filter.tip;
    }
    //cena
    if (filter.cenaOd !== undefined && filter.cenaDo !== undefined) {
      query.cena = { $gte: filter.cenaOd, $lte: filter.cenaDo };
    } else if (filter.cenaOd !== undefined) {
      query.cena = { $gte: filter.cenaOd };
    } else if (filter.cenaDo !== undefined) {
      query.cena = { $lte: filter.cenaDo };
    }
    //kvadratura
    if (
      filter.kvadraturaOd !== undefined &&
      filter.kvadraturaDo !== undefined
    ) {
      query.kvadratura = {
        $gte: filter.kvadraturaOd,
        $lte: filter.kvadraturaDo,
      };
    } else if (filter.kvadraturaOd !== undefined) {
      query.kvadratura = { $gte: filter.kvadraturaOd };
    } else if (filter.kvadraturaDo !== undefined) {
      query.kvadratura = { $lte: filter.kvadraturaDo };
    }
    //broj soba
    if (filter.brojSobaOd !== undefined && filter.brojSobaDo !== undefined) {
      query.brojSoba = { $gte: filter.brojSobaOd, $lte: filter.brojSobaDo };
    } else if (filter.brojSobaOd !== undefined) {
      query.brojSoba = { $gte: filter.brojSobaOd };
    } else if (filter.brojSobaDo !== undefined) {
      query.brojSoba = { $lte: filter.brojSobaDo };
    }
    //godina izgradnje
    if (
      filter.godinaIzgradnjeOd !== undefined &&
      filter.godinaIzgradnjeDo !== undefined
    ) {
      query.godinaIzgradnje = {
        $gte: filter.godinaIzgradnjeOd,
        $lte: filter.godinaIzgradnjeDo,
      };
    } else if (filter.godinaIzgradnjeOd !== undefined) {
      query.godinaIzgradnje = { $gte: filter.godinaIzgradnjeOd };
    } else if (filter.godinaIzgradnjeDo !== undefined) {
      query.godinaIzgradnje = { $lte: filter.godinaIzgradnjeDo };
    }
    //tip oglasivaca
    if (filter.tipOglasivaca.length > 0) {
      query.tipOglasivaca = { $in: filter.tipOglasivaca };
    }
    //stanje nekretnine
    if (filter.stanjeNekretnine.length > 0) {
      query.stanjeNekretnine = { $in: filter.stanjeNekretnine };
    }
    //tip grejanja

    if (filter.tipGrejanja.length > 0) {
      query.tipGrejanja = { $in: filter.tipGrejanja };
    }
    //sprat
    if (filter.spratOd !== undefined && filter.spratDo !== undefined) {
      query.sprat = { $gte: filter.spratOd, $lte: filter.spratDo };
    } else if (filter.spratOd !== undefined) {
      query.sprat = { $gte: filter.spratOd };
    } else if (filter.spratDo !== undefined) {
      query.sprat = { $lte: filter.spratDo };
    }
    //mesecneRezije od
    if (
      filter.mesecneRezijeOd !== undefined &&
      filter.mesecneRezijeDo !== undefined
    ) {
      query.mesecneRezije = {
        $gte: filter.mesecneRezijeOd,
        $lte: filter.mesecneRezijeDo,
      };
    } else if (filter.mesecneRezijeOd !== undefined) {
      query.mesecneRezije = { $gte: filter.mesecneRezijeOd };
    } else if (filter.mesecneRezijeDo !== undefined) {
      query.mesecneRezije = { $lte: filter.mesecneRezijeDo };
    }
    //status
    if (filter.status !== undefined) {
      query.status = filter.status;
    }

    const filteredResults = this.listingModel.find(query);
    return filteredResults;
  }
  async getFavoriteListings(listings: string[]) {
    const query: any = {};

    query._id = { $in: listings };
    const filteredResults = this.listingModel.find(query);
    return filteredResults;
  }
}

export const listingDAO = new ListingDAO();
