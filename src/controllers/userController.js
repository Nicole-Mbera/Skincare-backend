import UserInfos from "../models/user";
import bcrypt from "bcrypt"
import TokenAuth from "../helpers/tokenAuth"

class UserController {

 	
 //Create user in db

 	static async createUser(req, res) {

    const hashPassword= bcrypt.hashSync(req.body.password, 10)
    req.body.password= hashPassword;

      const user = await UserInfos.create(req.body);

           if (!user) {
             return res.status(404).json({ error: "user not registered" });
             }
             return res
                .status(200)
                .json({ message: "User created successfully", data: user });
    }

    // get All Users

    static async getAllUsers(req, res) {
          const users = await UserInfos.find();
           if (!users) {
            return res.status(404).json({ error: "users not successfully retrieved" });
          }
            return res
              .status(200)
              .json({ message: "Successfully retrieved users", data: users });
    
        }

    // get one user

    static async getOneUser(req, res) {
        
        const user = await UserInfos.findById(req.params.id);
         if (!user) {
            return res
            .status(404)
            .json({ error: "user not found" });
           }
    
          return res
             .status(200)
             .json({ message: "user found successfully", data: user });
         }

    // delete a user

    static async deleteOneUser(req,res){
        const user=await UserInfos.findByIdAndDelete(req.params.id);

        if(!user){
            return res .status(404).json({error: "User not found"});
            }
            return res .status(200).json({Message: "User Deleted Successfully",data: user});
            
    }
    // update a user

    static async updateOneUser(req,res){
       const user= await UserInfos.findByIdAndUpdate(req.params.id,req.body,{new:true});

      if (!user){
      return res .status(404).json({ Error: "User isnot updated"}); 
      }
      return res .status(200).json({Message: "User Updated Successfully", data: user});
    }
       
    
    static async userLogin(req,res,){
      const user= await UserInfos.findOne({email:req.body.email})
    
      if(!user){
          return res.status(404).json({error:"user not foumd! first sign up"})
      }
    
    
      if (bcrypt.compareSync(req.body.password, user.password)){
          user.password=null;
          const token= TokenAuth.tokenGenerator({user:user});
    
          return res.status(200).json ({message:"successfully logged in", token:token });
      }
    
      return res.status(400).json({error:"wrong password"});
      
    }
}

 

export default UserController;