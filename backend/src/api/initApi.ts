import express, { json, urlencoded, Response as ExResponse, Request as ExRequest, NextFunction } from "express";
import { ValidateError } from "tsoa";
import { RegisterRoutes as registerTsoaRoutes,  } from "./tsoa/generated/routes";
import cors from "cors";

export function initApi() {
  const app = express();

  app.use(express.json({ limit: "10mb" }));
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());

  registerTsoaRoutes(app);

  const port = 5000;

  app.listen(port, () => {
    console.log(`Aplikacija slusa na http://localhost:${port}`);
  });

  app.use(function errorHandler(
    err: unknown,
    req: ExRequest,
    res: ExResponse,
    next: NextFunction
  ): ExResponse | void {
    if (err instanceof ValidateError) {
      console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
      return res.status(422).json({
        message: "Validation Failed",
        details: err?.fields,
      });
    }
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  
    next();
  });
}
