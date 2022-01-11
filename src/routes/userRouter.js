import express from "express"; 
import UserController from "../controllers/userController";



const userRouter = express.Router();

userRouter.post("/create",UserController.createUser)
userRouter.post("/login", UserController.userLogin);
userRouter.get("/all", UserController.getAllUsers)
userRouter.get("/cat/:id",UserController.getOneUser)
userRouter.delete("/cat/:id",UserController.deleteOneUser)
userRouter.patch("/cat/:id",UserController.updateOneUser)

export default userRouter;