import Order from "../Models/Order.js";

export async function dashboard(req, res) {
  const orders = await Order.find({}).populate("customerId serviceId").sort({ createdAt: -1 });
  res.json({ orders });
}

export async function updateAvailability(req, res) {
  if (typeof req.body.isAvailable !== "boolean") return res.status(400).json({ message: "isAvailable must be a boolean" });
  res.json({ isAvailable: req.body.isAvailable });
}
