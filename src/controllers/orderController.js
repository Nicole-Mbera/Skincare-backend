import orderInfos from "../models/order";
import sendSms from "../helpers/sendSms";
import productInfo from "../models/product"

class orderController{
    //create order
    static async createorder(req,res){
        const order= await orderInfos.create({user:req.user._id, productslist:req.body.productslist});

        const product = await productInfo.findById(req.params.id); 


        

        if(!order){
            return res.status(404).json({error:"failed to fetch order"});
        }
        return res.status(200).json({

            message: "orders fetched successfully",
  
            data: order,


   
    });
  }
  //get all orders
  static async getAllorder(req, res) {
    const orders = await orderInfos.find();

    if (!orders) {
      return res.status(404).json({ error: "failed to fetch orders" });
    }

    return res.status(200).json({
      message: "orders fetched successfully",

      user: orders,
    });
  }

  //get One order

  static async getOneorder(req, res) {
    // console.log(req.params.id);
    const order = await orderInfos.findById(req.params.id);

    let sum = 0;
    order.productslist.forEach((product) => {
      sum = sum + product.price;
    });

    // console.log(sum);

    if (!order) {
      return res.status(404).json({ error: "failed to fetch order" });
    }

    return res.status(200).json({
      message: "order fetched successfully",

      data: { order, amountToPay: sum },
    });
  }
  // delete order
  static async deleteorder(req, res) {
    const order = await orderInfos.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "order are not deleted" });
    }
    return res
      .status(200)
      .json({ message: " order deleted successfully", data: order });
  }
  
  // update One Order
  static async updateOneorder(req, res) {
    const order = await orderInfos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) {
      return res.status(404).json({ Error: "order is not updated" });
    }
    let sum =0;
    let productsNames = [];
    order.productslist.forEach((product) => {

      sum =sum + product.price;
      productsNames.push(product.name);
    });

    sendSms(order.user.lastName, productsNames,sum,order.status,order._id,order.user.phone);

    return res
      .status(200)
      .json({ Message: "order Updated Successfully", data: order });
  }

  // static async changeOrderStatus(req, res) {
  //   const { id, status } = req.body;
  //   const order = await orderInfos.findByIdAndUpdate(
  //     id,
  //     { status: status },
  //     { new: true }
  //   );
  //   if (!order) {
  //     return res.status(404).json({ error: "failed to upadate status" });
  //   }
  //   sendSms(
  //     order.user.lastName,
  //     order.product.names,
  //     order.status,
  //     order.id,
  //     order.user.phone
  //   );
  //   return res
  //     .status(200)
  //     .json({ message: "success order updated", data: order });
  // }
}

export default orderController;
