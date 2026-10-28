import { Router } from "express";
import { assignOrder, createOrder, listOrders, updateOrderStatus } from "../Controller/OrderController.js";

const router = Router();
router.get("/", listOrders);
router.post("/", createOrder);
router.patch("/:id/status", updateOrderStatus);
router.patch("/:id/assign", assignOrder);
export default router;
