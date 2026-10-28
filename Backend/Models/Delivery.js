import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema(
  {
    orderItem: { type: String, required: true },
    riderName: { type: String, required: true },
    deliveryStatus: { type: String, default: "Assigned" },
    deliveryAddress: { type: String, required: true },
  },
  { timestamps: true }
);

const Delivery = mongoose.model("Delivery", deliverySchema);
export default Delivery;
