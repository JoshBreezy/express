const mongoose = require('mongoose');

const checkItemSchema = new mongoose.Schema({
    text: String,
    value: Number,
    check: Boolean
})

module.exports = mongoose.model('CheckItem', checkItemSchema)