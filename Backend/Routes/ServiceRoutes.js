import { Router } from "express";
import { createService, deleteService, getService, listServices, updateService } from "../Controller/ServiceController.js";

const router = Router();
router.get("/", listServices);
router.get("/:id", getService);
router.post("/", createService);
router.patch("/:id", updateService);
router.delete("/:id", deleteService);
export default router;
