import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    productslist: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ],


    status: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

  
orderSchema.pre(/^find/,function(next){
    this.populate({
       path:"user",
       select:" firstName lastName email role phone "
    }).populate({
        path:"productslist"
    });
    next();


});

const order = mongoose.model("order", orderSchema);
export default order;
