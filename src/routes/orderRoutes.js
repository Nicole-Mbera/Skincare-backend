import  express  from "express";
import orderController from "../controllers/orderController";


const orderRoute = express.Router()

  
orderRoute.post("/create",orderController.createorder);
orderRoute.get("/all",orderController.getAllorder);
orderRoute.get("/:id",orderController.getOneorder);
orderRoute.delete("/:id",orderController.deleteorder);
orderRoute.patch("/cat/:id",orderController.updateOneorder);


export  default orderRoute