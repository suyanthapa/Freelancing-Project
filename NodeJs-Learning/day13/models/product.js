import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true, },
    cost: { type: Number, required: true, },
    createdBy: { type: String, },
    stockQuantity: { type: Number, required: true, },
   
}, { timestamps: true })

const Product = model("Product", productSchema);

export default Product
