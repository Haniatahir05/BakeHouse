import express from "express";
import {
  addDelivery,
  updateDeliveryStatus,
  viewDeliveries,
} from "../Controller/DeliveryOperationsController.js";

const router = express.Router();

router.post("/", addDelivery);
router.get("/", viewDeliveries);
router.put("/:id/status", updateDeliveryStatus);

export default router;
