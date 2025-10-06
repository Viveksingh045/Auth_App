import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastLogin: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false },
  resetPasswordToken: { type: String },
  resetPasswordExpiresAt: { type: Date },
  verificationToken: { type: String },
  verificationExpiresAt: { type: Date },
}, {
  timestamps: true,
});

export const User = mongoose.model("User", userSchema);


