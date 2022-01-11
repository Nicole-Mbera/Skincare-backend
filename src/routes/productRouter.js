import express from "express";
import productController from "../controllers/productController";
import Validator from "../middlewares/validator"


const productRouter= express.Router();

productRouter.post("/register", 
Validator.newAccountProductRules(),
Validator.validateInput,productController.registerProduct);
productRouter.get("/allproducts", productController.getAllproducts);
productRouter.get("cat/:id",productController.getOneProduct);
productRouter.delete("cat/:id", productController.deleteOneProduct);
productRouter.patch("cat/:id", productController.updateproduct);

export default productRouter;