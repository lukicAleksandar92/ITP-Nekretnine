import { Body, Controller, Get, Path, Post, Put, Route } from "tsoa";
import {
  User,
  UserFavoriteListing,
  UserName,
} from "../../../mongo/models/users/User";
import { userDAO } from "../../../mongo/models/users/UserDAO";

@Route("users")
export class UserController extends Controller {
  //POST zahtev za login korisnika
  @Post("login")
  async login(@Body() user: User) {
    return await userDAO.login(user.kor_ime, user.lozinka);
  }

  //POST zahtev unos korisnika
  @Post("insert")
  async insertUser(@Body() user: User) {
    let result = await userDAO.insertUser(user);

    return result;
  }

  //POST zahtev za proveru jedinstvenog kor.imena i emaila
  @Post("check")
  async checkNameAndEmail(@Body() user: User) {
    let result = await userDAO.checkKorImeAndEmail(user.kor_ime, user.email);
    return result;
  }

  //PUT zahtev za azuiranje mail-a
  @Put("updateEmail")
  async updateUserEmail(@Body() user: User) {
    let result = await userDAO.updateUserEmail(user);
    if (result == "Korisnik ne postoji") this.setStatus(404);

    return result;
  }

  //PUT zahtev za azuiranje telefona
  @Put("updateTel")
  async updateUserTel(@Body() user: User) {
    let result = await userDAO.updateUserTel(user);
    if (result == "Korisnik ne postoji") this.setStatus(404);

    return result;
  }

  //PUT zahtev za azuiranje agencije
  @Put("updateAgency")
  async updateUserAgency(@Body() user: User) {
    let result = await userDAO.updateUserAgency(user);
    if (result == "Korisnik ne postoji") this.setStatus(404);

    return result;
  }

  //PUT zahtev za azuiranje lozinke
  @Put("updatePassword")
  async updateUserPassword(@Body() user: User) {
    let result = await userDAO.updateUserPassword(user);
    if (result == "Korisnik ne postoji") this.setStatus(404);

    return result;
  }

  //PUT zahtev za azuiranje slike
  @Put("updateSlike")
  async updateUserSlike(@Body() user: User) {
    let result = await userDAO.updateUserSlike(user);
    if (result == "Korisnik ne postoji") this.setStatus(404);

    return result;
  }

  //GET ruta za pretragu korisnika po korisničkom imenu
  @Get("getAllAgents/:nazivAgencije")
  async getAllAgents(
    @Path() nazivAgencije: string
  ): Promise<UserName[] | null> {
    let result = await userDAO.getAllAgents(nazivAgencije);
    if (result == null) this.setStatus(404);
    return result;
  }
  @Get("fetchUser/:kor_ime")
  async getUserByKorIme(@Path() kor_ime: string) {
    let result = await userDAO.getUserByKorIme(kor_ime);
    if (result == null) this.setStatus(404);
    return result;
  }

  //PUT zahtev za azuiranje omiljenih nekretnina
  @Put("updateFavoriteListing")
  async updateListing(@Body() user: UserFavoriteListing) {
    let result = await userDAO.updateFavoriteListing(user);
    if (result == null) this.setStatus(404);
    return result;
  }
}
