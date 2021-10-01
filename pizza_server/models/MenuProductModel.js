const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const foodSchema = new Schema({
    category: String,
    name: String,
    description: String,
   smallprice: Number,
   largeprice: Number,

})
module.exports = mongoose.model('product', foodSchema);