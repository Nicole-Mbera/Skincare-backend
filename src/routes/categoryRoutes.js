import CategoryController from "../controllers/categoryController";
import express  from "express";

const categoryRouter = express.Router();

categoryRouter.post("/create", CategoryController.createCategory);
categoryRouter.get("/getall", CategoryController.getAllCategories);
categoryRouter.get("/cat/:id", CategoryController.getOneCategory);
categoryRouter.delete("/cat/:id",CategoryController.deleteOneCategory);
categoryRouter.patch("/cat/:id",CategoryController.updateOneCategory);

export default categoryRouter;