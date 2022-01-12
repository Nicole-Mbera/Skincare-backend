import express from "express"; 
import UserController from "../controllers/userController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/dataChecker";

const userRouter = express.Router();

userRouter.post("/login", UserController.userLogin);
userRouter.post("/create", Validator.newAccountRules(),Validator.validateInput,DataChecker.isEmailExist,UserController.createUser)
userRouter.get("/all", UserController.getAllUsers)

//ordering paths/
// userRouter.post("/order/:id", UserController.orderProduct);

userRouter.get("/use/:id",UserController.getOneUser)
userRouter.delete("/use/:id",UserController.deleteOneUser)
userRouter.patch("/use/:id",UserController.updateOneUser)


export default userRouter;