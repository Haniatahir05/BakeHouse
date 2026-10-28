import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    riderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    quantity: { type: Number, min: 1, default: 1 },
    deliveryAddress: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    paymentMethod: { type: String, enum: ["COD", "Card", "EasyPaisa"], default: "COD" },
    paymentStatus: { type: String, enum: ["Unpaid", "Paid"], default: "Unpaid" },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "In Progress", "Completed", "Cancelled"],
      default: "Pending",
    },
    totalAmount: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
