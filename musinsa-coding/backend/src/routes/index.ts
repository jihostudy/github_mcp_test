import { Router } from "express";
import * as healthController from "../controllers/healthController.js";
import authRoutes from "./authRoutes.js";
import cartRoutes from "./cartRoutes.js";

const router = Router();
router.get("/health", healthController.get);
router.use("/auth", authRoutes);
router.use("/cart", cartRoutes);

export default router;
