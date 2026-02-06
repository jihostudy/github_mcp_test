import { Router } from "express";
import * as healthController from "../controllers/healthController.js";

const router = Router();
router.get("/health", healthController.get);

export default router;
