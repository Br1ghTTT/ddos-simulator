const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getUser); // -> GET user

router.get('/users', adminController.getUsers);  // -> GET users

/*router.post('/create-user');

router.post('/create-users');

router.post('/update-user');

router.post('/update-users');

router.post('/delete-user');

router.post('/delete-users'); */

module.exports = router;
