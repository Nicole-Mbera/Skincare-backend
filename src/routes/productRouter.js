import express from "express";
import productController from "../controllers/productController";
import VerifyAccess from "../middlewares/verifyaccess";


const productRouter= express.Router();

productRouter.post("/register", VerifyAccess("admin"),productController.registerProduct);
productRouter.get("/allproducts", VerifyAccess("user"),productController.getAllproducts);
productRouter.get("/:id",productController.getOneProduct);
productRouter.delete("/:id", productController.deleteOneProduct);
productRouter.patch("/:id", productController.updateproduct);

export default productRouter;