import productInfo from "../models/product"


class productController {

    static async registerProduct(req, res){
    
        const product = await productInfo.create(req.body)
        if (!product) {
            return res.status(404).json({ error: "product not registered" })
        }
        return res.status(200).json({ message: "product registered successfully", data: product });
    }

static async getAllproducts(req,res){
 const products = await productInfo.find();
    if (!products) {
        return res.status(404).json({ error: "Unfortunately, products are not retrived" })
    }
    return res.status(200).json({ message: "products retrived successfully", data: products });
}

static async getOneProduct(req, res){
    const product = await productInfo.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ error: "product not found" });
    }

    return res.status(200).json({message:"product found", data:product});

}

static async deleteOneProduct(req, res){
    const product = await productInfo.findByIdAndDelete(req.params.id);
    if (!product) {
        return res.status(404).json({ error: "product not found" });
    }

    return res.status(200).json({message:"product deleted",data:product});

}

static async updateproduct(req,res){

    const product = await productInfo.findByIdAndUpdate(req.params.id, req.body,{new:true})
    if (!product) {
        return res.status(404).json({ error: "product not found" });
    }

    return res.status(200).json({message:"product updated successfully",data:product});

}
// get product by user ID
static async getAllProductByUserId(req,res){        
    const products =await productInfo.find({user:req.params.id});

    if (!products){
        return res.status(404).json({error:" No Products"});
    }
    return res.status(200).json({message:"All  Bookings by user Id succesfully viewed", data:products});

}

}

export default productController;