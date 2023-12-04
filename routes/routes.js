import { Router } from "express";
import { VotoController } from "../controllers/votos.controller.js";

const routes = Router();
const controller = new VotoController();

routes.post("/", controller.create);

export default routes;
