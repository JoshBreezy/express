const express = require('express');

const picsRouter = express.Router();

picsRouter.route('/')
.post((req, res, next) => {
    Pic.Create(req.body)
    .then(pic => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(pic._id);
    })
    .catch(err => next(err));
})

module.exports = picsRouter;