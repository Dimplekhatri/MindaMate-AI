const express = require('express');
const {register, login, getProfile} = require('../Controllers/authcontroller')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router();


router.post('/register', register);


router.post('/login',  login);

router.get('/getProfile', authMiddleware, getProfile);

module.exports = router;


