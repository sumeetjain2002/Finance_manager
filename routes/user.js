const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controller/userdb');


router.post('/signup', userController.postSignup);

router.post('/login',userController.postLogin);

router.get('/profile', userController.getProfile);

router.get('/fillout', userController.getFillout);


router.post('/fillout', userController.postFillout);

module.exports = router;