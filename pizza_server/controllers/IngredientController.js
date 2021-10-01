const Ingredient = require('../models/IngredientModel');
const Category = require('../models/MenuCategoryModel');

class IngredientController {

    async findAll(req, res) {
        try {
            const ingredient = await Ingredient.find({});
            res.status(200).send(ingredient)
        }
        catch (e) {
            res.send({ e })
        }
    }
    async insert(req, res) {
        console.log('req.body==>', req.body)
        let { category, ingredient} = req.body
        try {
            let catID = await Category.findOne({ category })
           
            const createIng = await Ingredient.create({ ingredient, category: catID.category});
            res.status(200).send(createIng)
        }
        catch (e) {
            res.send({ e })
        }
    }
    async update(res, req) {
        let { ingredient, newIng } = req.body
        try {
            const updated = await Ingredient.updateOne(
                { ingredient }, { ingredient: newIng })

            res.status(200).send(updated)
        }
        catch (e) {
            res.send({ e })
        }

    }
    async findOne(req, res) {
        let { ingredient } = req.body;
        try {
            const ing = await Ingredient.findOne({ ingredient });
            res.send(ing);
        }
        catch (e) {
            res.send({ e })
        }
    }
    async find(req, res) {
        let { category } = req.params;
        try {
            const ing = await Ingredient.find({ category: category });
            res.send(ing);
        }
        catch (e) {
            res.send({ e })
        }
    }
    async delete(req, res) {
        console.log('delete!!')
        let { ingredient } = req.body;
        try {
            const removed = await Ingredient.deleteOne({ ingredient });
            res.send({ removed });
        }
        catch (e) {
            res.send({ e })
        }
    }
    /*const categories = (res, req) => {
        let all = []
        DB.forEach(function (x) {
    
            console.log(x.category)
            all.push(x.category)
        })
        res.send(all)
    }*/

}
module.exports = new IngredientController();
