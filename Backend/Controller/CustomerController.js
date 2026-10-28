import Order from "../Models/Order.js";

export async function dashboard(req, res) {
  const orders = await Order.find({}).populate("serviceId").sort({ createdAt: -1 });
  res.json({ orders });
}

export async function profile(req, res) {
  const updates = {};
  if (req.body.fullName) updates.fullName = req.body.fullName;
  if (req.body.phone) updates.phone = req.body.phone;
  res.json({ profile: updates });
}
