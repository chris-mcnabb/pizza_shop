const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paySchema = new Schema({



    delSet: {
        time: Array,
        name: String,
        address: String,
        city: String,
        email: String,
        phone: String,
        pick: String},
    items: [{
        name: String,
        toppings: Array,
        quantity: Number,
        amount: Number
    }]
})
module.exports = mongoose.model('payment', paySchema);
