import express from "express";

import {
  customCakeController,
  viewCustomCakesController
} from "../Controller/CustomCakeController.js";

const router = express.Router();

router.post("/", customCakeController);

router.get("/", viewCustomCakesController);

export default router;