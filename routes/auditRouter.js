const express = require('express');
const Audit = require('../schemas/Audit');

const auditRouter = express.Router();

auditRouter.route('/')
.post((req, res, next) => {
    Audit.create(req.body)
    .then(audit => {
        console.log(audit);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(audit);
    })
    .catch(err => next(err));
})

auditRouter.route('/:auditId')
.get((req, res, next) => {
    Audit.findById(req.params.auditId)
    .then(audit => {
        console.log(audit);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(audit);
    })
    .catch(err => next(err))
})
.put((req, res, next) => {
    Audit.findByIdAndUpdate(req.params.auditId, { $set: req.body }, { new: true })
    .then(audit => {
        console.log(audit);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(audit);
    })
    .catch(err => next(err))
    
})

module.exports = auditRouter;