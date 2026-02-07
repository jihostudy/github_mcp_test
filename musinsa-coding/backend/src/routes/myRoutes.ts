import { Router } from "express";
import * as profileController from "../controllers/profileController.js";
import * as orderController from "../controllers/orderController.js";
import * as likeController from "../controllers/likeController.js";
import * as addressController from "../controllers/addressController.js";
import * as reviewController from "../controllers/reviewController.js";
import * as couponController from "../controllers/couponController.js";
import * as dashboardController from "../controllers/dashboardController.js";

const router = Router();

// 대시보드
router.get("/dashboard", dashboardController.getDashboard);

// 프로필
router.get("/profile", profileController.getProfile);
router.put("/profile", profileController.updateProfile);
router.put("/password", profileController.changePassword);
router.delete("/account", profileController.deleteAccount);

// 주문
router.get("/orders", orderController.getOrders);
router.get("/orders/:id", orderController.getOrderDetail);

// 좋아요
router.get("/likes", likeController.getLikes);
router.post("/likes/:productId", likeController.addLike);
router.delete("/likes/:productId", likeController.removeLike);

// 배송지
router.get("/addresses", addressController.getAddresses);
router.post("/addresses", addressController.createAddress);
router.put("/addresses/:id", addressController.updateAddress);
router.delete("/addresses/:id", addressController.deleteAddress);

// 리뷰
router.get("/reviews", reviewController.getReviews);
router.post("/reviews", reviewController.createReview);
router.put("/reviews/:id", reviewController.updateReview);
router.delete("/reviews/:id", reviewController.deleteReview);

// 쿠폰/포인트
router.get("/coupons", couponController.getCoupons);
router.get("/points", couponController.getPoints);

export default router;
