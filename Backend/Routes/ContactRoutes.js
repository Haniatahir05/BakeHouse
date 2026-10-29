import express from "express";

import {
  contactController,
  viewContactsController,
  deleteContactController
} from "../Controller/ContactController.js";

const router = express.Router();

router.post("/", contactController);

router.get("/", viewContactsController);

router.delete("/:contactId", deleteContactController);

export default router;