import { Router } from "express";
import requireLogin from "../middlewares/requireLogin.js"
import validate from "../middlewares/validate.js"
import productValidation from "../validations/product.js"
import productController from "../controllers/product.js";
import captureUserFromAuthToken from "../middlewares/captureUserFromAuthToken.js";
const productRouter = Router();

// get all prodcuts
productRouter.get("/", productController.getAll)

// add new product
productRouter.post("/",captureUserFromAuthToken, requireLogin, validate(productValidation.addNew), productController.addNew)

//get all products from a specific user
productRouter.get("/byUserId/:userId",validate(productValidation.userId),productController.userId)


//get specific product details
productRouter.get("/:productId",  validate(productValidation.productId), productController.SpecificProduct)


//edit product details by the creator

export default productRouter;

