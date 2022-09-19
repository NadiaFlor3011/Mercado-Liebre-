const { check, body } = require("express-validator");
const { loadUsers } = require("../data/db-module");
const bcryptjs = require('bcryptjs')

module.exports = [
    check('email')
        .notEmpty().withMessage('Este campo en obligatorio').bail(),


    body('password')

        .notEmpty().withMessage('Este campo en obligatorio').bail()
        .custom((value, { req }) => {
            let password = loadUsers().find(user => user.email === req.body.email && bcryptjs.compareSync(value, user.password));
            return password ? true : false
        }).withMessage('Comprueba tu usuario y contraseña e inténtalo de nuevo')
]