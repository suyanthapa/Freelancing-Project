import { catchAsync } from "../helpers/catchAsync.js";
import Product from "../models/product.js";



const addNew = catchAsync(async function (req, res) {

    const newProduct = await Product.create({ ...req.body, createdBy: req.user._id })

    return res.status(201).send({ product: newProduct })

});

const getAll = async function (req, res) {
    const products = await Product.find({}).sort({ createdAt: -1 }) 
    return res.send({products})
}
//get all products details from a specific user id
const userId = catchAsync( async function (req,res) {

    const {userId}= req.params.userId;
    const data = await Product.find({createdBy: userId})

    if(!data){
        throw new Error ("UserId not found")
    }
    else{
        return res.json({data})
    }
  
})

//get specific product details from id
const SpecificProduct = catchAsync( async function (req, res) {
    
    const userId = req.params.productId;

    const product = await Product.findOne({_id:  userId})

    if(!product){
        throw new Error ("Product not found by "+ userId)
    }
    else{
        return res.json({product})
    }
  
})


const productController = { addNew, getAll, userId , SpecificProduct}

export default productController;