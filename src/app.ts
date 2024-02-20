import express, { Application, json } from "express";
import "express-async-errors";
import { handleErrors } from "./middlewares/handleErrors.middlewares";
import { routes } from "./routes/index.routes";

const app: Application = express();
app.use(json());
app.use(routes);
app.use(handleErrors);

export default app;
