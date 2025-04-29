const mongoose = require('mongoose')

console.log(3)
const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, `Yêu cầu 'email'!`],
    unique: true
  },
})

module.exports = schema
