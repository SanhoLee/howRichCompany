import express from "express";
import routes from "../routes";
import {
  handleHome,
  getSearch,
  postSearch,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, handleHome);
globalRouter.get(routes.search, getSearch);
// globalRouter.post(routes.search, postSearch);

export default globalRouter;
