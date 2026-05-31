import express from "express";
import { changeRoleToOwner } from "../controllers/OwnerController.js";
import { protect } from "../middleware/AuthMiddleware.js";


const ownerRouter = express.Router();
ownerRouter.post("/change-role",protect, changeRoleToOwner)
ownerRouter.post("/add-car",upload.single("image"),protect, changeRoleToOwner)



export default ownerRouter;