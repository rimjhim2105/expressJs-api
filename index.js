import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import mongoConnection from './config/db.js';
dotenv.config();
mongoConnection();
const app = express();
const port = process.env.PORT
app.use(express.json());

app.use('/api', userRoute )


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})