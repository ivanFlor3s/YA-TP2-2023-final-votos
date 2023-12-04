import { Router } from "express";
import { VotoController } from "../controllers/votos.controller.js";

const routes = Router();
const controller = new VotoController();

routes.post("/", controller.create);
routes.get("/", controller.getAllxZona);
routes.post("/seed", controller.seedVotos);
export default routes;
