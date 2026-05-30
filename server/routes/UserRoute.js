import express from "express";
import { registerUser ,loginUser} from "../controllers/UserController.js";
import { getUserData } from "../controllers/UserController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const userRouter = express.Router();
userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/data",protect, getUserData)   
export default userRouter;