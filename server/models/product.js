const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

// const Schema = mongoose.Schema
var productSchema = new mongoose.Schema({
    productName: String,
    productDes: String,
    image:[String]
},{timestamps:true});
productSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('product', productSchema);