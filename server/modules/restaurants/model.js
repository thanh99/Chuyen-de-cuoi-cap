const mongoose = require('mongoose')
const schema = require("./schema")

const MODEL_NAME = 'restaurants'
const COLLECTION_NAME = 'restaurants' 
console.log(13222222)
const model = mongoose.model(
    MODEL_NAME,
    schema,
    COLLECTION_NAME
)

module.exports = model