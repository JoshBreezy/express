const express = require('express');
const Photo = require('../schemas/Photo');

const photoRouter = express.Router();

photoRouter.route('/')
.post((req, res, next) => {
    Photo.Create(req.body)
    .then(photo => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(photo._id);
    })
    .catch(err => next(err));
})

module.exports = photoRouter;