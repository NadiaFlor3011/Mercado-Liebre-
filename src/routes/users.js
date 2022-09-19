var express = require('express');
var router = express.Router();
const { login, register, updateUser, userLogin } = require('../controllers/userControllers');

const registerValidator = require('../validators/registerValidator')
const loginValidator = require('../validators/loginValidator')

/* GET users listing. */
router
    .get('/login', login)
    .post('/login', loginValidator, userLogin)
    .get('/register', register)
    .post('/update/:id', registerValidator, updateUser)


module.exports = router;