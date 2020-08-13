import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import routes from "./routes";

import globalRouter from "./routers/globalRouter";

const app = express();
app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(morgan("dev"));

app.use(routes.home, globalRouter);

export default app;
