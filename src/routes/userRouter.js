import express from "express"; 
import UserController from "../controllers/userController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/dataChecker";



const userRouter = express.Router();

userRouter.post("/create",
Validator.newAccountRules(),
Validator.validateInput,
DataChecker.validateEmail,
UserController.createUser)
userRouter.get("/all", UserController.getAllUsers)
userRouter.get("/use/:id",UserController.getOneUser)
userRouter.delete("/use/:id",UserController.deleteOneUser)
userRouter.patch("/use/:id",UserController.updateOneUser)

export default userRouter;