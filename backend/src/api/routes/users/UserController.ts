import { Body, Controller, Delete, Get, Path, Post, Put, Route } from "tsoa";
import { User } from "../../../mongo/models/users/User";
import { userDAO } from "../../../mongo/models/users/UserDAO";

@Route("users")
export class UserController extends Controller{
    @Post("login")
    async login(@Body() user: User){
        return await userDAO.login(user.kor_ime, user.lozinka);
    }

    @Post("insert")
    async insertUser(@Body() user: User){
        let result = await userDAO.insertUser(user);
        if(result == 'Korisnik vec postoji'){
            this.setStatus(409);
        }

        return result;
    }

    @Put("update")
    async updateUser(@Body() user: User){
        let result = await userDAO.updateUser(user);
        if(result == 'Korisnik ne postoji')
            this.setStatus(404);

        return result;
    }
}