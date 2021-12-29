const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    type: String,
    title:  String,
    description:  String,
    shipping: Object,
    pricing: Object,
    details: Object
})

module.exports = mongoose.model("products" , productSchema);