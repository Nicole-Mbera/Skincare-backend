import mongoose from "mongoose"

const userSchema = new mongoose.Schema(  
    {
      fistName: {
        type:String,
        required:true,
    },
      lastName:{
        type:String,
        required:true,
    },
      phone: {
        type:String,
        required:true,
    },
      email: {
          type:String,
          required:true,
          unique:true,
      },
      password:{
          type:String,
          required:true,
      },

    
      address:{
          type:String,
          default:"Rwanda"
       },
       role:{
           type:String,
           default:"user",
           enum:["admin","user"]
       },
      
      status:{
          type:String,
          enum:["null","Activate","Desactivate"],
          default:"null"
      }


   },
      {
          timestamps: true,  
      }

   

);

const User = mongoose.model('User',userSchema)

export default User;