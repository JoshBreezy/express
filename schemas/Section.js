const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    name: String,
    parts: [],
    score: Number
})

module.exports = mongoose.model('Section', sectionSchema)