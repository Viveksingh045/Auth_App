import {User} from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if(!name || !email || !password) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

    const user = new User({ name, email, password: hashedPassword, verificationToken, verificationExpiresAt: Date.now() + 3600000 });
    await user.save();

    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({ success: true, message: "User created successfully", 
    user: { ...user._doc, password: undefined } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const login = async (req, res) => {
  res.send("Login Controller");
}

export const logout = async (req, res) => {
  res.send("Logout Controller");
}