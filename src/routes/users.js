var express = require('express');
var router = express.Router();
const { login, register, updateUser } = require('../controllers/userControllers');

const registerValidator = require('../validators/registerValidator')

/* GET users listing. */
router
    .get('/login', login)
    .get('/register', register)
    .post('/update/:id', registerValidator, updateUser)


module.exports = router;