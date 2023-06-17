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
  async getUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email: email });
  }
  async checkKorImeAndEmail(kor_ime: string, email: string) {
    let resultKorIme = await this.userModel.findOne({ kor_ime: kor_ime });
    if (resultKorIme != null) {
      return "Korisnicko ime je zauzeto";
    }
    let resultEmail = await this.userModel.findOne({ email: email });
    if (resultEmail != null) {
      return "Email je zauzet";
    }
    return "sve ok";
  }

  async insertUser(user: User) {
    let userInDB = await this.getUserByKorIme(user.kor_ime);

    if (userInDB == null) {
      let newUserModel = new this.userModel(user);
      return newUserModel.save();
    }

    return "Korisnik vec postoji";
  }

  async updateUserEmail(user: User) {
    let userInDB = await this.getUserByKorIme(user.kor_ime);
    let emailInDB = await this.getUserByEmail(user.email);
    if (emailInDB != null) {
      return "Email je zauzet";
    }
    if (userInDB != null) {
      return this.userModel.updateOne(
        { kor_ime: user.kor_ime },
        { $set: { email: user.email } }
      );
    }

    return "Korisnik ne postoji";
  }

  async updateUserTel(user: User) {
    let userInDB = await this.getUserByKorIme(user.kor_ime);

    if (userInDB != null) {
      return this.userModel.updateOne(
        { kor_ime: user.kor_ime },
        { $set: { telefon: user.telefon } }
      );
    }

    return "Korisnik ne psotoji";
  }

  async updateUserPassword(user: User) {
    let userInDB = await this.getUserByKorIme(user.kor_ime);

    if (userInDB != null) {
      return this.userModel.updateOne(
        { kor_ime: user.kor_ime },
        { $set: { lozinka: user.lozinka } }
      );
    }

    return "Korisnik ne psotoji";
  }
  async updateUserAgency(user: User) {
    let userInDB = await this.getUserByKorIme(user.kor_ime);

    if (userInDB != null) {
      return this.userModel.updateOne(
        { kor_ime: user.kor_ime },
        { $set: { selectedAgency: user.selectedAgency } }
      );
    }

    return "Korisnik ne psotoji";
  }

  async updateUserSlike(user: User) {
    let userInDB = await this.getUserByKorIme(user.kor_ime);

    if (userInDB != null) {
      return this.userModel.updateOne(
        { kor_ime: user.kor_ime },
        { $set: { slike: user.slike } }
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
