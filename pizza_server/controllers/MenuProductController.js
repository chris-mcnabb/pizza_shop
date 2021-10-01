const Product = require('../models/MenuProductModel');
const Category = require('../models/MenuCategoryModel');
class MenuProductController {
    async findAll(req, res) {
        try {
            const product = await Product.find({});
            res.status(200).send(product)
        }
        catch (e) {
            res.send({ e })
        }
    }

    async insert(req, res) {
        console.log('req.body==>', req.body)
        let { category, name, description, smallprice, largeprice } = req.body
        try {
            let catID = await Category.findOne({ category })
            const createProd = await Product.create(
                { name, description, smallprice, largeprice, category: catID.category });
            res.status(200).send(createProd)
        }
        catch (e) {
            res.send({ e })
        }
    }
    async findOne(req, res) {
        let { name } = req.body;
        try {
            const prod = await Product.findOne({ name });
            res.send(prod);
        }
        catch (e) {
            res.send({ e })
        }
    }
    async find(req, res) {
        let { category } = req.params;
        try {
            const prod = await Product.find({ category: category });
            res.send(prod);
        }
        catch (e) {
            res.send({ e })
        }
    }
    async update(req, res) {
        let { name,  description, smallprice, largeprice, newName, newDescription, newSmallPrice, newLargePrice } = req.body;
        try {

            const values = await Product.updateOne(
                { name },
                { name: newName || name, description: newDescription || description, smallprice: newSmallPrice || smallprice, largeprice: newLargePrice || largeprice }

            );
            res.send({ values });
        }

        catch (error) {
            res.send({ error });
        };
    }

    async delete(req, res) {
        console.log('delete!!')
        let { name } = req.body;
        try {
            const removed = await Product.deleteOne({name });
            res.send({ removed });
        }
        catch (e) {
            res.send({ e })
        }
    }
}
module.exports = new MenuProductController();