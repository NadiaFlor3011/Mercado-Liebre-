const { check, body } = require('express-validator');


module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min: 2
        }).withMessage(' Se requieren mínimo 2 caracteres').bail()
        .isAlpha("es-ES", { ignore: " " })
        .withMessage("El nombre debe contener sólo caracteres alfabéticos"),

    check('surname')
        .notEmpty().withMessage('El apellido es obligatorio').bail()
        .isLength({
            min: 2
        }).withMessage('Mínimo 2 caracteres').bail()
        .isAlpha("es-ES", { ignore: " " })
        .withMessage("El nombre debe contener sólo caracteres alfabéticos"),

    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Se requiere un email válido'),


    check('password')
        .notEmpty().withMessage('La contraseña es obligatoria').bail()
        .isLength({
            min: 6,
            max: 12
        })
        .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),



]