import express from "express";
import {
  addContact,
  deleteContact,
  viewContacts,
} from "../Controller/ContactOperationsController.js";

const router = express.Router();

router.post("/", addContact);
router.get("/", viewContacts);
router.delete("/:id", deleteContact);

export default router;
