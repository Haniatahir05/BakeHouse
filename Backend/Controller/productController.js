import { Router } from "express";

import {
  productController,
  viewProductsController,
  editProductController,
  deleteProductController
} from "../Controller/ProductController.js";

const router = Router();

// Add product
router.post("/", productController);

// View all products
router.get("/", viewProductsController);

// Update product by productId
router.put("/:productId", editProductController);

// Delete product by productId
router.delete("/:productId", deleteProductController);

export default router;