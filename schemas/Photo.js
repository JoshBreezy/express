const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    pic: String
});

module.exports = mongoose.model('Photo', photoSchema);