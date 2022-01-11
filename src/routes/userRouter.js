import express from "express"; 
import UserController from "../controllers/userController";
import DataChecker from "../middlewares/dataChecker";



const userRouter = express.Router();



userRouter.post("/create", DataChecker.isEmailExist,UserController.createUser)
userRouter.get("/all", UserController.getAllUsers)
userRouter.get("/cat/:id",UserController.getOneUser)
userRouter.delete("/cat/:id",UserController.deleteOneUser)
userRouter.patch("/cat/:id",UserController.updateOneUser)

export default userRouter;