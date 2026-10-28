import express from "express";
import {
  addProduct,
  addReview,
  deleteProduct,
  updateProduct,
  viewProducts,
  viewReviews,
} from "../Controller/ProductOperationsController.js";

const router = express.Router();

router.post("/", addProduct);
router.get("/", viewProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.post("/:id/reviews", addReview);
router.get("/:id/reviews", viewReviews);

export default router;
