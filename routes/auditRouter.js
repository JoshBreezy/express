const express = require('express');
const Audit = require('../schemas/Audit');
const authenticate = require('../authenticate');

const auditRouter = express.Router();

auditRouter.route('/')
.post(authenticate.verifyUser, (req, res, next) => {
    Audit.create(req.body)
    .then(audit => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(audit);
    })
    .catch(err => next(err));
})
.get((req, res, next) => {
    Audit.find()
    .then(audits => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'applications/json')
        res.json(audits);
    })
    .catch(err => next(err));
})

auditRouter.route('/:auditId')
.get((req, res, next) => {
    Audit.findById(req.params.auditId)
    .then(audit => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(audit);
    })
    .catch(err => next(err))
})
.put(authenticate.verifyUser,(req, res, next) => {
    Audit.findByIdAndUpdate(req.params.auditId, { $set: req.body }, { new: true })
    .then(audit => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(audit);
    })
    .catch(err => next(err))
})

auditRouter.route('/:auditId/pics')
.put(authenticate.verifyUser, (req, res, next) => {
    Audit.findByIdAndUpdate(req.params.auditId, {$set: req.body }, {new: true})
    .then(pic => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(pic._id);
    })
})

module.exports = auditRouter;