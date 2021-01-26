const express = require('express');

const adminController = require('../controller/admin');
 
const router = express.Router();

router.get('/', adminController.getUser) // GET User

router.get('/users', adminController.getUsers);    // GET users

router.post('/create-user', adminController.postCreateUser);

router.post('/create-users', adminController.postCreateUsers);

router.post('/update-user', adminController.postUpdateUser);

router.post('/update-users', adminController.postUpdateUsers);

router.post('/delete-user', adminController.postDeleteUser);

router.post('/delete-users', adminController.postDeleteUsers);

module.exports = router;
