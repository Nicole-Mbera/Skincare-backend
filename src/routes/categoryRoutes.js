import CategoryController from "../controllers/categoryController";
import express  from "express";
import Validator from "../middlewares/validator"

const categoryRouter = express.Router();

categoryRouter.post("/create",
Validator.newAccountCategoryRules(),
Validator.validateInput,
CategoryController.createCategory);
categoryRouter.get("/getall", CategoryController.getAllCategories);
categoryRouter.get("/cat/:id", CategoryController.getOneCategory);
categoryRouter.delete("/cat/:id",CategoryController.deleteOneCategory);
categoryRouter.patch("/cat/:id",CategoryController.updateOneCategory);

export default categoryRouter;