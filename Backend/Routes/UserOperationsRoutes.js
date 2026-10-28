import express from "express";
import {
  addUser,
  deleteUser,
  loginUser,
  updateUser,
  viewUsers,
} from "../Controller/UserOperationsController.js";

const router = express.Router();

router.post("/signup", addUser);
router.post("/login", loginUser);
router.get("/", viewUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
