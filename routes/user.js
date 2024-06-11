const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controller/userdb');
const transactionController=require('../controller/transaction')

router.post('/signup', userController.postSignup);

router.post('/login',userController.postLogin);

router.get('/profile', userController.getProfile);

router.get('/fillout', userController.getFillout);

router.get('/dash', transactionController.getDashboard);

router.post('/fillout', userController.postFillout);


module.exports = router;