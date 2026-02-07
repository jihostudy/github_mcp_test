import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { authenticate } from "../middleware/authenticate.js";
import { loginLimiter, registerLimiter } from "../middleware/rateLimiter.js";

const router = Router();

router.post("/register", registerLimiter, authController.register);
router.post("/login", loginLimiter, authController.login);
router.post("/refresh", authController.refreshToken);
router.post("/logout", authController.logout);
router.get("/me", authenticate, authController.me);

export default router;
