const mongoose = require('mongoose');

const picSchema = new mongoose.Schema({
    pic: string
})

module.exports = mongoose.model('Pic', picSchema);