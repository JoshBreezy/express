const mongoose = require('mongoose');

const checkItemSchema = new mongoose.Schema({
    item: String,
    checked: Boolean,
    value: Number
})

module.exports = mongoose.model('CheckItem', checkItemSchema)