import express from "express";

import {
  createOrderController,
  viewOrdersController,
  updateOrderStatusController,
  assignRiderController
} from "../Controller/OrderController.js";

const router = express.Router();

router.post("/", createOrderController);

router.get("/", viewOrdersController);

router.put("/:orderId/status", updateOrderStatusController);

router.put("/:orderId/assign-rider", assignRiderController);

export default router;