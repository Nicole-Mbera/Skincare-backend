import  express  from "express";
import orderController from "../controllers/orderController";
import VerifyAccess from "../middlewares/verifyaccess";
import verifyToken from "../middlewares/verifytoken";
import DataChecker  from "../middlewares/dataChecker";


const orderRoute = express.Router()

  

orderRoute.post("/", verifyToken, VerifyAccess("user"),DataChecker.isproductslist,orderController.createorder);
orderRoute.get("/all",orderController.getAllorder);
orderRoute.get("/:id",orderController.getOneorder);
orderRoute.delete("/:id",orderController.deleteorder);
orderRoute.patch("/cat/:id",orderController.updateOneorder);


export  default orderRoute