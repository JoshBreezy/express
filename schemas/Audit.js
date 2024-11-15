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
    location: String,
    sections: [],
    totalScore: Number
})

module.exports = mongoose.model('Audit', auditSchema) 