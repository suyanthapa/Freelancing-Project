
import User from "../models/user.js"
import Product from "../models/product.js"

const findUserByEmail = async function (email) {
    const user = await User.findOne({ email });
    if (user) return user.toObject();
    else return null;
}

const findProductByProduct = async function (product) {
    const productData = await Product.findOne({product});
    
    if(productData){
        return productData.toObject();
    }
     else{
        return null;
     }
}
export { findUserByEmail , findProductByProduct}
