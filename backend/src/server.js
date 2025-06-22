import express from 'express';
import notesRoutes from './routes/notesRoutes.js'
import dotenv from "dotenv";
import connectDB from "./config/db.js"
dotenv.config();

const PORT = process.env.PORT;

const app = express();


connectDB();

app.use(express.json());


app.use("/api/notes", notesRoutes);


app.listen(PORT || 5001, ()=> {
    console.log('Server is running on port http://localhost:5001');
})