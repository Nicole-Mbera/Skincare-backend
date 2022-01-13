import mongoose from "mongoose";
const orderSchema= new mongoose.Schema(
{
// userId:String,
// productId:String,
// status:String,
user: {
    type: mongoose.Schema.ObjectId,
    ref:"User"
},
 productslist:[
        {
            type: mongoose.Schema.ObjectId,
            ref:"Product"
        }

],

// totalAmount: Number,

status:{
    type:String,
    enum:["pending","paid"],
    default:"pending"
}

},
{
    timestamps:true
}


);
 const order= mongoose.model("order", orderSchema)
 export default order;
