import mongoose from "mongoose"
const orderSchema= new mongoose.Schema(
{
// user: {
//     type: mongoose.Schema.ObjectId,
//     ref:"User"
// },
//  productslist:[
//         {
//             type: mongoose.Schema.ObjectId,
//             ref:"Product"
//         }

// ],
productslist:String,
user:String,
totalAmount: Number,
userId: Number,
status: String
},
{
    timestamps:true
}


);
 const order= mongoose.model("order", orderSchema)
 export default order;
