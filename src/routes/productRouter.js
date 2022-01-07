import express from "express";
import productController from "../controllers/productController";


const productRouter= express.Router();

productRouter.post("/register", productController.registerProduct);
productRouter.get("/allproducts", productController.getAllproducts);
productRouter.get("/:id",productController.getOneProduct);
productRouter.delete("/:id", productController.deleteOneProduct);
productRouter.patch("/:id", productController.updateproduct);

export default productRouter;