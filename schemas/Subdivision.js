const mongoose = require('mongoose');

const subdivisionSchema = new mongoose.Schema({
    name: String,
    checklist: [],
    Score: Number
})

module.exports = mongoose.model('Subdivision', subdivisionSchema)