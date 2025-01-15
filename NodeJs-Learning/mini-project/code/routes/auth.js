import { Router } from "express";

import validate from "../middlewares/validate.js"
import authValidation from '../validation/user.js';
import authController from '../controllers/auth.js'

const userRouter = Router();

userRouter.post("/register", validate(authValidation.register) , authController.register  )

userRouter.get("/login", validate(authValidation.login) , authController.login  )

export default userRouter