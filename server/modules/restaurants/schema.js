const mongoose = require("mongoose")

console.log(2)
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Yêu cầu 'name'!`]
    },
    address: {
        type: String,
        required: [true, `Yêu cầu 'price'!`]
    },
    image: {
        type: String,
        required: [true, `Yêu cầu 'image'!`]
    },
    description: {
        type: String,
        require: [true, `yêu cầu 'description'`]
    },
    star: {
        type: String,
        require: [true, `yêu cầu 'status'`]
    },
    category: {
        type: String,
        require: [true, `yêu cầu 'category'`]
    }
})

module.exports = schema