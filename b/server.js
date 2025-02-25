import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from './routes/userRoutes.js';  



dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());


const MONGO_URI=process.env.MONGO_URI

mongoose.connect(MONGO_URI).then(()=>{
 console.log('db connted')
}).catch(()=>{
    console.log('db not connted')
})
app.use("/api/users", userRoutes);

app.listen(5000,()=>{
    console.log('app islisten')
})