import {check,validationResult} from "express-validator";
class Validator{
    
    static validateInput=(req,res,next)=> {

        const errors =validationResult (req);
        if(!errors.isEmpty()){
            const errorMessage=errors.errors.map((err)=>err.msg);
            return res.status(400).json({message:errorMessage});
        }

        return next();
    };


    static newAccountRules (){
        return[
            check("fistName","Your firstName must be Words").trim().isAlpha(),
            check("lastName","Your LastName must be words ").trim().isAlpha(),
            check("phone","Your phone number is invalid ").trim().isMobilePhone(),
            check("email","email is invalid ").trim().isEmail(),
            check("password","password is not strong").trim().isStrongPassword(),
            
        ];
    };
    static newAccountProductRules (){
        return[
            check("name","The name is Invalid").trim().isString(),
            check("description"," The description is invalid").trim().isString(),
            check("price"," Price must be number  ").trim().isNumeric(),
           
            
        ];
    }  
    
    static newAccountCategoryRules (){
        return[
            check("name","The name is Invalid").trim().isString(),
            check("description","The description is invalid").trim().isString(),
        
            ];
    }    

}
export default Validator;