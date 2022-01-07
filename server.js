import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose  from "mongoose";
import categoryRouter from "./src/routes/categoryRoutes";

dotenv.config ("./.env");
const app=express();

app.use(bodyParser.json());
app.use("/user",categoryRouter);


app.use("/",(req,res)=> res.status(200).json({
    message: "This Skin Care APi is on wrong path"
}));

const dbUrl=process.env.DATABASEURL;

mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));

const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})

export default app;