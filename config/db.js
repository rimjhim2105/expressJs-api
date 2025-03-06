import mongoose from "mongoose";
import dotenv from "dotenv";
import { CollectionName } from "../constant.js";
dotenv.config();

const mongoConnection = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${CollectionName}`)
        console.log("database is connected here");
    } catch (error) {
        console.log('connection failed', error)
    }
}
export default mongoConnection;