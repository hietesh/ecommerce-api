const mongoose = require('mongoose');
// auto increment plugin
const autoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = new mongoose.Schema({
    _id: Number,
    name : {
        type: String,
        required:true
    },
    quantity : {
        type: Number,
        required:true
    }
});

productSchema.plugin(autoIncrement);
module.exports = mongoose.model('product',productSchema);