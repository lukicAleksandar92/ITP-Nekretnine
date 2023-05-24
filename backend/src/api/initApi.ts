import express, { json, urlencoded } from "express";
import { RegisterRoutes as registerTsoaRoutes } from "./tsoa/generated/routes";
import cors from "cors";

export function initApi() {
  const app = express();

  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors())

  registerTsoaRoutes(app);

  const port = 5000;

  app.listen(port, () => {
    console.log(`Aplikacija slusa na http://localhost:${port}`);
  });
}
