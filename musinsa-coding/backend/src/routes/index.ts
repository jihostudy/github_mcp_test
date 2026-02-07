import { Router } from "express";
import * as healthController from "../controllers/healthController.js";
import authRoutes from "./authRoutes.js";

const router = Router();
router.get("/health", healthController.get);
router.use("/auth", authRoutes);

export default router;
