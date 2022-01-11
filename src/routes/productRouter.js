import express from "express";
import productController from "../controllers/productController";
import verifyToken from "../middlewares/verifytoken"


const productRouter= express.Router();

productRouter.post("/register",verifyToken, productController.registerProduct);
productRouter.get("/allproducts", productController.getAllproducts);
productRouter.get("/:id",productController.getOneProduct);
productRouter.delete("/:id", productController.deleteOneProduct);
productRouter.patch("/:id", productController.updateproduct);

export default productRouter;