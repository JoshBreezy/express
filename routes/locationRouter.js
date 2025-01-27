const express = require('express');
const Locations = require('../schemas/Locations');
const authenticate = require('../authenticate');

const locationsRouter = express.Router();

locationsRouter.route('/')
.post((req, res, next) => {
    Locations.create(req.body)
    .then(locations => {
        console.log(locations);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(locations);
    })
    .catch(err => next(err));
})
.get(authenticate.verifyUser,(req, res, next) => {
    Locations.find()
    .then(locations => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'applications/json')
        res.json(locations);
    })
    .catch(err => next(err));
})



module.exports = locationsRouter;