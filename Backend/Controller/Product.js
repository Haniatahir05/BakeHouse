import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    pid: { type: String, required: true },
    pname: { type: String, required: true },
    pdescription: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
