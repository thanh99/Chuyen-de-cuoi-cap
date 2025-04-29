const mongoose = require("mongoose")

console.log(5)
const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    email: {
        type: String,
        require: [true, `yêu cầu 'email'`],
        unique: true
    },
    content: {
        type: String,
    },
})

module.exports = schema