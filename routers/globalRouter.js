import express from "express";
import routes from "../routes";
import { handleHome } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, handleHome);

export default globalRouter;
