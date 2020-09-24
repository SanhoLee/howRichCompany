import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import routes from "./routes";

import globalRouter from "./routers/globalRouter";
import cartRouter from "./routers/cartRouter";
import { localsMiddleware } from "./middlewares";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.cart, cartRouter);

export default app;
