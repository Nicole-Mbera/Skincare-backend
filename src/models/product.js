import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        productPicture: String,
        name: String,
        description: String,
        price: Number

        // category:{

        //     type: mongoose.Schema.ObjectId,
        //     ref: "Category"
        // }


    });

const Product = mongoose.model("Product", productSchema);

export default Product;