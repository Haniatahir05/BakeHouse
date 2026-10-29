import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  isAvailable: { type: Boolean, default: true }
});

const Product = mongoose.model("Product", productSchema);

export default Product;