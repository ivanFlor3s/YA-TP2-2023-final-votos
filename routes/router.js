import { Router } from "express";
import routes from "./routes.js";
const router = Router();

router.use("/votos", routes)

export default router;
