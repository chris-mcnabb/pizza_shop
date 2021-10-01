const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const catSchema = new Schema({
    category: String,
    
    

})
module.exports = mongoose.model('category', catSchema);