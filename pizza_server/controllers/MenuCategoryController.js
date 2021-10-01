const Category = require('../models/MenuCategoryModel');

class MenuCategoryController {

    async findAll(req, res) {
        try {
            const category = await Category.find({});
            res.status(200).send(category)
        }
        catch (e) {
            res.send({ e })
        }
    }
    async insert(req, res) {
        console.log('req.body==>', req.body)
        let { category } = req.body
        try {
            const createCat = await Category.create({ category });
            res.status(200).send(createCat)
        }
        catch (e) {
            res.send({ e })
        }
    }
    async update(res, req) {
        let { category, newCat } = req.body
        try {
            const updated = await Category.updateOne(
                { category }, { category: newCat })

            res.status(200).send(updated)
        }
        catch (e) {
            res.send({ e })
        }

    }
    async findOne(req, res) {
        let { category } = req.params;
        try {
            const cat = await Category.findOne({ category });
            res.send(cat);
        }
        catch (e) {
            res.send({ e })
        }
    }
    async delete(req, res) {
        console.log('delete!!')
        let { category } = req.body;
        try {
            const removed = await Category.deleteOne({ category });
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
module.exports = new MenuCategoryController();
