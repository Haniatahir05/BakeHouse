import Order from "../Models/Order.js";
import User from "../Models/User.js";

export async function dashboard(req, res) {
  const [users, orders, pendingOrders] = await Promise.all([
    User.countDocuments(),
    Order.countDocuments(),
    Order.countDocuments({ status: "Pending" }),
  ]);
  res.json({ users, orders, pendingOrders });
}

export async function listUsers(req, res) {
  res.json(await User.find().select("-passwordHash").sort({ createdAt: -1 }));
}

export async function updateUserRole(req, res) {
  if (!["customer", "rider", "admin"].includes(req.body.role)) return res.status(400).json({ message: "Invalid role" });
  const user = await User.findByIdAndUpdate(req.params.id, { role: req.body.role }, { new: true }).select("-passwordHash");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
}
