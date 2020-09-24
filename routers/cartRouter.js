import express from "express";
import { getCart, postCart } from "../controllers/cartController";
import routes from "../routes";

const cartRouter = express.Router();

cartRouter.post(routes.cartDetail(), postCart);

export default cartRouter;
