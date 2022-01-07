import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema(
    {
       name:String,
       description: String,
       subcategory: [
           {
            name:String,
            description: String
           }
       ]
    },
    {
        timestamps: true
    }
)
const category = mongoose.model('Category', CategorySchema);
export default category;