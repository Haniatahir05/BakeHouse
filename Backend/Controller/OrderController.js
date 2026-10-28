import Order from "../Models/Order.js";
import Service from "../Models/Service.js";
import User from "../Models/User.js";

export async function createOrder(req, res) {
  const { serviceId, quantity = 1, deliveryAddress, phone, paymentMethod = "COD" } = req.body;
  const service = await Service.findOne({ _id: serviceId, isAvailable: true });
  if (!service || !deliveryAddress || !phone) return res.status(400).json({ message: "Available service, deliveryAddress and phone are required" });
  const order = await Order.create({ serviceId, quantity, deliveryAddress, phone, paymentMethod, totalAmount: service.price * quantity });
  res.status(201).json(await order.populate("serviceId"));
}

export async function listOrders(req, res) {
  res.json(await Order.find({}).populate("customerId riderId serviceId").sort({ createdAt: -1 }));
}

export async function assignOrder(req, res) {
  const { riderId } = req.body;
  const rider = await User.findOne({ _id: riderId, role: "rider" });
  if (!rider) return res.status(404).json({ message: "Rider not found" });
  const order = await Order.findByIdAndUpdate(req.params.id, { riderId, status: "Accepted" }, { new: true }).populate("customerId riderId serviceId");
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
}

export async function updateOrderStatus(req, res) {
  const allowed = ["Pending", "Accepted", "In Progress", "Completed", "Cancelled"];
  if (!allowed.includes(req.body.status)) return res.status(400).json({ message: "Invalid order status" });
  const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true }).populate("customerId riderId serviceId");
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
}
