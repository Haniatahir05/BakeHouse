import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: {
    type: String,
    enum: ["customer", "admin", "rider"],
    default: "customer"
  },
  isAvailable: { type: Boolean, default: true }
});

const User = mongoose.model("User", userSchema);

export default User;