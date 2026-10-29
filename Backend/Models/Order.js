import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  riderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  quantity: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  phone: { type: String, required: true },
  paymentMethod: { type: String },
  paymentStatus: { type: String, default: "Pending" },
  status: { type: String, default: "Pending" },
  totalAmount: { type: Number, required: true }
});

const Order = mongoose.model("Order", orderSchema);

export default Order;