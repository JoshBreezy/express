const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
    subdivision: [],
    score: number
})

module.exports = mongoose.model('Part', partSchema)