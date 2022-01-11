import UserInfos from "../models/user"

class DataChecker {
    static async validateEmail(req,res,next){
        const user = await UserInfos.findOne({email:req.body.email});
     if(!user){
         return next();
     }
     return res.status(401).json({Error:"Email Already Exist"})
    }

}
export default DataChecker;