const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerSchema = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
   

})
module.exports = mongoose.model('customer', customerSchema);