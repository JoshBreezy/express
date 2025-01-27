const express = require('express');
const User = require ('../schemas/User');
const passport = require('passport');
const authenticate = require('../authenticate');

const userRouter = express.Router();

userRouter.post('/signup', (req, res) => {
    User.register(
        new User({username: req.body.username, email: req.body.email}),
        req.body.password,
        err => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({err: err});
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({success: true, status: 'Registration Successful'});
                });
            }
        }
    )
})

userRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    const token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        success: true, 
        token: token, 
        status: 'You are successfully logged in!',
        user: {
            _id: req.user._id,
            admin: req.user.admin
        }
    });
});

userRouter.post('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    })
});

module.exports = userRouter;