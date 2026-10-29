import { Router } from "express";
import {
  productController,
  viewProductsController,
  editProductController
} from "./Controller/ProductController.js";

const router = Router();

router.post("/", productController);
router.get("/", viewProductsController);
router.put("/:productId", editProductController);

export default router;