import express from 'express';
import connectDB from './db/dbConnect.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app=express();

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});