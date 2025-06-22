import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async ()=> {
    try {
    mongoose.connect(MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLY");

    }catch(error) {
     console.error("Error connecting mongoDB", error);
     process.exitCode(1);
    }
}

export default connectDB;