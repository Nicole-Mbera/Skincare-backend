import express from "express"; 
import UserController from "../controllers/userController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/dataChecker";
import verifyToken from "../middlewares/verifytoken";
import verifyAccess from "../middlewares/verifyaccess";



const userRouter = express.Router();

userRouter.post("/login", UserController.userLogin);
userRouter.post("/create", Validator.newAccountRules(),Validator.validateInput,DataChecker.isEmailExist,UserController.createUser)
userRouter.get("/all", UserController.getAllUsers)
userRouter.get("/use/:id",UserController.getOneUser)
userRouter.delete("/use/:id",UserController.deleteOneUser),
userRouter.patch("/use/:id",UserController.updateOneUser)
userRouter.patch("/user/status",UserController.updateOneUser)
userRouter.get("/products/:id",UserController.getAllOrderedproductsByProductId)



export default userRouter;