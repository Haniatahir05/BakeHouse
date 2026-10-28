import express from "express";
import {
  addOrder,
  cancelOrder,
  updateOrder,
  viewOrders,
} from "../Controller\OrderOperationsController.js";

const router = express.Router();

router.post("/", addOrder);
router.get("/", viewOrders);
router.put("/:id", updateOrder);
router.put("/:id/cancel", cancelOrder);

export default router;
