import { Controller, Get, Route } from "tsoa";

@Route("helloWorld")
export class HelloWorldController extends Controller {
  @Get("message")
  public async getHelloWorldMessage(): Promise<string> {
    return "Zdravo, svete!";
  }
}
