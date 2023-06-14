import mongoose from "mongoose";
import { User, UserFavoriteListing } from "./User";
import { userSchema } from "./UserSchema";

class UserDAO {
  private userModel = mongoose.model("user", userSchema, "korisnici");

  async login(korisnicko_ime: string, lozinka: string): Promise<User | null> {
    let user = await this.userModel.findOne({
      kor_ime: korisnicko_ime,
      lozinka: lozinka,
    });

    if (user != null) {
      this.logUserLogin(user.kor_ime);
    }

    return user;
  }

  async logUserLogin(kor_ime: string) {
    return await this.userModel.updateOne(
      { kor_ime: kor_ime },
      { $push: { logins: new Date() } }
    );
  }

  async getUserByKorIme(kor_ime: string): Promise<User | null> {
    return this.userModel.findOne({ kor_ime: kor_ime });
  }

  async insertUser(user: User) {
    let userInDB = await this.getUserByKorIme(user.kor_ime);

    if (userInDB == null) {
      let newUserModel = new this.userModel(user);
      return newUserModel.save();
    }

    return "Korisnik vec postoji";
  }

  async updateUser(user: User) {
    let userInDB = await this.getUserByKorIme(user.kor_ime);

    if (userInDB != null) {
      return this.userModel.updateOne(
        { kor_ime: user.kor_ime },
        { $set: { ime: user.ime, prezime: user.prezime } }
      );
    }

    return "Korisnik ne psotoji";
  }
  async updateFavoriteListing(user: UserFavoriteListing) {
    let activeUser = await this.getUserByKorIme(user.kor_ime);
    if (activeUser != null) {
      return this.userModel.updateOne(
        { kor_ime: user.kor_ime },
        {
          $set: {
            omiljeniOglasi: user.omiljeniOglasi,
          },
        }
      );
    }
  }
}

export const userDAO = new UserDAO();
