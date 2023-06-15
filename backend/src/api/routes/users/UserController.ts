import { Body, Controller, Get, Path, Post, Put, Route } from "tsoa";
import { User, UserFavoriteListing } from "../../../mongo/models/users/User";
import { userDAO } from "../../../mongo/models/users/UserDAO";

@Route("users")
export class UserController extends Controller {
  @Get("login")
  async login(@Body() user: User) {
    return await userDAO.login(user.kor_ime, user.lozinka);
  }

  @Post("insert")
  async insertUser(@Body() user: User) {
    let result = await userDAO.insertUser(user);
    if (result == "Korisnik vec postoji") {
      this.setStatus(409);
    }

    return result;
  }

  @Put("updateEmail")
  async updateUserEmail(@Body() user: User) {
    let result = await userDAO.updateUserEmail(user);
    if (result == "Korisnik ne postoji") this.setStatus(404);

    return result;
  }
  @Put("updateTel")
  async updateUserTel(@Body() user: User) {
    let result = await userDAO.updateUserTel(user);
    if (result == "Korisnik ne postoji") this.setStatus(404);

    return result;
  }
  


  @Get("fetchUser/:kor_ime")
  async getUserByKorIme(@Path() kor_ime: string) {
    let result = await userDAO.getUserByKorIme(kor_ime);
    if (result == null) this.setStatus(404);
    return result;
  }
  @Put("updateFavoriteListing")
  async updateListing(@Body() user: UserFavoriteListing) {
    let result = await userDAO.updateFavoriteListing(user);
    if (result == null) this.setStatus(404);
    return result;
  }
}
