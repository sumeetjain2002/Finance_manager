const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controller/transaction');

router.post('/login', userController.postLogin);
router.get('/profile', userController.getProfile);


module.exports = router;