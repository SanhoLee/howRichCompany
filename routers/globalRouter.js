import express from "express";
import routes from "../routes";
import { handleHome, getSearch } from "../controllers/globalController";
import { getCart, postCart } from "../controllers/cartController";

const globalRouter = express.Router();

globalRouter.get(routes.home, handleHome);
globalRouter.get(routes.search, getSearch);

globalRouter.get(routes.cart, getCart);
globalRouter.post(routes.cart, postCart);

export default globalRouter;
