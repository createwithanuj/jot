import express from 'express';
import notesRoutes from './routes/notesRoutes.js'
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import rateLimter from './middleware/rateLimiter.js';
dotenv.config();

const PORT = process.env.PORT;

const app = express();




app.use(express.json());

app.use(rateLimter);

app.use("/api/notes", notesRoutes);

connectDB().then(
    () => {
        app.listen(PORT || 5001, ()=> {
    console.log('Server is running on port http://localhost:5001');
})
    }
)
