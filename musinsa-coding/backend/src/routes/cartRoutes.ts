import { Router } from "express";
import * as cartController from "../controllers/cartController.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

router.use(authenticate);

router.get("/", cartController.getCart);
router.post("/items", cartController.addItem);
router.patch("/items/:itemId", cartController.updateQuantity);
router.delete("/items/:itemId", cartController.removeItem);
router.delete("/items", cartController.removeItems);

export default router;
