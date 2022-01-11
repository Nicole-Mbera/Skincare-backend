import express from "express";
import productController from "../controllers/productController";
import VerifyAccess from "../middlewares/verifyaccess";
import Validator from "../middlewares/validator"



const productRouter= express.Router();


productRouter.post("/register", VerifyAccess("admin"),Validator.newAccountProductRules(),
Validator.validateInput,productController.registerProduct);
productRouter.get("/allproducts", VerifyAccess("user"),productController.getAllproducts);
productRouter.get("cat/:id",productController.getOneProduct);
productRouter.delete("cat/:id", productController.deleteOneProduct);
productRouter.patch("cat/:id", productController.updateproduct);


export default productRouter;