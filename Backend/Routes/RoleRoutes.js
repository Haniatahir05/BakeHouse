import { Router } from "express";
import { dashboard as customerDashboard, profile } from "../Controller/CustomerController.js";
import { dashboard as riderDashboard, updateAvailability } from "../Controller/RiderController.js";
import { dashboard as adminDashboard, listUsers, updateUserRole } from "../Controller/AdminController.js";

export const customerRoutes = Router();
customerRoutes.get("/dashboard", customerDashboard);
customerRoutes.patch("/profile", profile);

export const riderRoutes = Router();
riderRoutes.get("/dashboard", riderDashboard);
riderRoutes.patch("/availability", updateAvailability);

export const adminRoutes = Router();
adminRoutes.get("/dashboard", adminDashboard);
adminRoutes.get("/users", listUsers);
adminRoutes.patch("/users/:id/role", updateUserRole);
