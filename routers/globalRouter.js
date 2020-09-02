import express from "express";
import routes from "../routes";
import {
  handleHome,
  getSearch,
  postSearch,
} from "../controllers/globalController";
import { getCart, postCart } from "../controllers/cartController";

const globalRouter = express.Router();

globalRouter.get(routes.home, handleHome);
globalRouter.get(routes.search, getSearch);
// globalRouter.post(routes.search, postSearch);

globalRouter.post(routes.cart, postCart);

export default globalRouter;
