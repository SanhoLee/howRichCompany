import express from "express";
import routes from "../routes";
import { handleHome, getSearch } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, handleHome);

globalRouter.get(routes.search, getSearch);

export default globalRouter;
