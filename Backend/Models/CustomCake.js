import mongoose from "mongoose";

const customCakeSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  flavor: { type: String, required: true },
  size: { type: String, required: true },
  frosting: { type: String, required: true },
  toppings: { type: String },
  message: { type: String },
  price: { type: Number }
});

const CustomCake = mongoose.model("CustomCake", customCakeSchema);

export default CustomCake;