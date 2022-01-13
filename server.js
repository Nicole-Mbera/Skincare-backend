import express from "express";
import userRouter from "./src/routes/userRouter"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import orderRoute from "./src/routes/orderRoutes";
import categoryRouter from "./src/routes/categoryRoutes";
import productRouter from "./src/routes/productRouter";

dotenv.config ("./.env");
const app=express();

app.use(bodyParser.json());
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/order", orderRoute);
app.use("/product", productRouter)
app.use("/",(req,res)=> res.status(200).json({
    message: "This is  APi does not exist"


}));

const dbUrl=process.env.DATABASEURL;

mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));

const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})

export default app;