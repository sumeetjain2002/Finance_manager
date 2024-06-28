const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/login', (req, res, next) => {
    res.render('login');
});

router.get('/signup', (req, res, next) => {
 res.render('signup'); 
});

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        req.session.username = req.user.username;
        req.session.email = req.user.email;
        req.session.save();
        res.redirect('/user/profile');
    });


module.exports = router;