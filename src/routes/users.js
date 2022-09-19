var express = require('express');
var router = express.Router();
const { login, register, updateUser, checkLoguin, logout } = require('../controllers/userControllers');

const registerValidator = require('../validators/registerValidator')
const loginValidator = require('../validators/loginValidator')

/* GET users listing. */
router
    .get('/login', login)
    .post('/login', loginValidator, checkLoguin)
    .get('/register', register)
    .post('/update/:id', registerValidator, updateUser)
    .get('/logout', logout)


module.exports = router;