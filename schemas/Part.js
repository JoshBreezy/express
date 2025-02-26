const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
    name: String,
    subdivisions: [],
    score: number
})

module.exports = mongoose.model('Part', partSchema)