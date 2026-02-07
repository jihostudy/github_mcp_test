import { Router } from "express";
import * as healthController from "../controllers/healthController.js";
import myRoutes from "./myRoutes.js";

const router = Router();
router.get("/health", healthController.get);
router.use("/my", myRoutes);

export default router;
