
import UserInfos from "../models/user";
import orderInfos from "../models/order"

class DataChecker{

    // check if user email exist

    static async isEmailExist (req,res,next){
        const user = await UserInfos.findOne({ email: req.body.email});

        if(!user){
            return next();
        }

        return res.status(401).json({ error:"email already exists you must try another!"})
    }
    static async isproductslist (req,res,next){


        if(req.body.productslist.length <1){

            return res .status(404).json({error: "Product List must not be empty!"});
        }

        return next();
    }
}


export default DataChecker;