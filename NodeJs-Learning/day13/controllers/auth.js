import { catchAsync } from "../helpers/catchAsync.js";
import User from "../models/user.js";
import { findProductByProduct, findUserByEmail } from "../services/user.js";
import bcrypt from 'bcrypt'
import Product from  "../models/product.js";

const register = catchAsync(async function (req, res) {

    const existingUser = await findUserByEmail(req.body.email);

    if (existingUser) {
        throw new Error("Email already taken");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = (await User.create({ ...req.body, password: hashedPassword })).toObject();

    return res.send({ user: { ...newUser, password: undefined } })

})

const login = catchAsync(async function (req, res) {

    const { email, password } = req.body;
    const existingUser = await findUserByEmail(email);

    if (!existingUser) {
        throw new Error("User not found.");
    }

    const hasedPassword = existingUser.password;

    const matched = await bcrypt.compare(password, hasedPassword)

    if (matched) {
        return res.send({ user: { ...existingUser, password: undefined } })
    } else throw new Error("Email or password invalid.")

})

const authorizedPerson = catchAsync(async function (req, res) {
    const{name,cost,stockQuantity} = req.body;
    const email = req.headers['x-email']; 
    const password = req.headers['x-password'];
    const existingUser = await findUserByEmail(email);

    const createdBy= req.headers['x-email']; 
    console.log("Data entered by---"+createdBy);

    if (!existingUser) {
        throw new Error("User not found.");
    }

    const hasedPassword = existingUser.password;

    const matched = await bcrypt.compare(password, hasedPassword)

    if (matched) {

         const productData = {
        name,
        cost,
        stockQuantity,
        createdBy,
    };

    const newProduct = (await Product.create( productData)).toObject();

    return res.send({ Product: { ...newProduct, password: undefined } })
        
        // return res.send({ user: { ...existingUser, password: undefined } })
    } else throw new Error("Email or password invalid.")


   
})


const product = catchAsync(async function (req,res) {

    const {name, cost,stockQuantity} = req.body;
    const exisitngProduct= await findProductByProduct(name);
    const createdBy= req.headers['x-email']; 
    console.log(createdBy);
   

    if(exisitngProduct){
        throw new Error("Product already listed")
    }

    const productData = {
        name,
        cost,
        stockQuantity,
        createdBy,
    };

    const newProduct = (await Product.create( productData)).toObject();

    return res.send({ Product: { ...newProduct, password: undefined } })
    
})

const authController = { register, login , product, authorizedPerson}

export default authController;