import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import productRoutes from "./Routes/ProductRoutes.js";
import orderRoutes from "./Routes/OrderRoutes.js";
import userRoutes from "./Routes/UserRoutes.js";
import contactRoutes from "./Routes/ContactRoutes.js";
import customCakeRoutes from "./Routes/CustomCakeRoutes.js";

const app = express();
const port = Number(process.env.PORT || 3000);
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI is required in Backend/.env");
}

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173"
}));

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);
app.use("/contacts", contactRoutes);
app.use("/custom-cakes", customCakeRoutes);

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: "Internal server error" });
});

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => {
      console.log(`BakeHouse API running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exitCode = 1;
  });

export default app;