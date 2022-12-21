const mongoose = require('mongoose');

const cakeSchema= new mongoose.Schema({
    name: {type:String, required: true},
    image:{type: String,required: true},
    price:{type: Number, required: true},
    remaining: {type:Number, required: true},
    inStock: Boolean
})

const Cake=mongoose.model('Cake',cakeSchema);
 module.exports = Cake;


