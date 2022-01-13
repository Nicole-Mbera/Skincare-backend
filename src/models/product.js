import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        productPicture: String,
        name: String,
        description: String,
        price: Number,
        category:{

            type: mongoose.Schema.ObjectId,
            ref: "Category"
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps: true,
    }


);
        
        productSchema.pre(/^find/,function(next){
            this.populate({
               path:"user",
               select:" firstName lastName email role phone "
            });
            next();


    });
    
const Product = mongoose.model("Product", productSchema);

export default Product;