const mongoose = require('mongoose')
const schema = require("./schema")

const MODEL_NAME = 'reviews'
const COLLECTION_NAME = 'reviews' 

console.log(1244)
const model = mongoose.model(
    MODEL_NAME,
    schema,
    COLLECTION_NAME
)

module.exports = model