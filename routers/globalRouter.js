import express from "express";
import routes from "../routes";
import { handleHome, search } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, handleHome);
globalRouter.get(routes.search, search);

export default globalRouter;
