const express = require('express');
const Photo = require('../schemas/Photo');

const photoRouter = express.Router();

photoRouter.route('/')
.post((req, res, next) => {
    Photo.create(req.body)
    .then(photo => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(photo._id);
    })
    .catch(err => next(err));
})

photoRouter.route('/:photoId')
.get((req, res, next) => {
    Photo.findById(req.params.photoId)
    .then(photo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'applications/json')
        res.json(photo);
    })
    .catch(err => next(err));
})

module.exports = photoRouter;