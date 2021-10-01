const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ingredientSchema = new Schema({
    category: String,
    ingredient: String,
    


})
module.exports = mongoose.model('ingredient', ingredientSchema);