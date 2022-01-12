import categoryInfo from "../models/category";

class CategoryController{

    // create a category

    static async createCategory(req, res) {

        const category = await categoryInfo.create(req.body);
        if (!category) {
            return res.status(404).json({ error: "Category not registred, try again!" });
        }
        return res
            .status(200)
            .json({ message: "Category created successfully", data: category });
    }

    // get all categories

    static async getAllCategories(req, res) {

        const categories = await categoryInfo.find();

        if (!categories) {
            return res.status(404).json({ error: "Categories not found" });
        }

        return res
            .status(200)
            .json({ message: "Successfully retrieved categories", data: categories });
    }

    // get one category

    static async getOneCategory(req, res) {

        const category = await categoryInfo.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ error: "category not found" });
        }

        return res
            .status(200)
            .json({ message: "category found successfully", data: category });
    }

    //delete one category

    static async deleteOneCategory(req, res) {

        const category = await categoryInfo.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({ error: "Category not deleted" });
        }

        return res
            .status(200)
            .json({ message: "Category deleted successfully", data: category });
    }

    // Update category

    static async updateOneCategory(req,res) {

    const category = await categoryInfo.findByIdAndUpdate(req.params.id,req.body,{new:true});

    if (!category) {

        return res.status(404).json({ error: "Category not updated" })
    }

    return res
    .status(200)
    .json({ message: "Category updated successfully", data: category });
        
    }
}

export default CategoryController;

