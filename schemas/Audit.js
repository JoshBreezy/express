const mongoose = require('mongoose');

const auditSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    location: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    authorID: {
        type: String,
        required: true
    },
    finalized: {
        type: Boolean,
        default: false,
        required: true
    },
    sections: [],
    pics: [],
    totalScore: Number
})

module.exports = mongoose.model('Audit', auditSchema) 