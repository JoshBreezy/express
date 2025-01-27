const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    locations: []
})

module.exports = mongoose.model('Location', locationSchema) 