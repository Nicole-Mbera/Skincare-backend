import express from "express";
import userRouter from "./src/routes/userRouter"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config ("./.env");
const app=express();

app.use(bodyParser.json());
app.use("/User",userRouter);


app.use("/",(req,res)=> res.status(200).json({
    message: "This Skin Care API is on wrong Path "
}));

const dbUrl=process.env.DATABASEURL;

mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));

const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})

export default app;