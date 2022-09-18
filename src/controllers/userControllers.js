const { validationResult } = require('express-validator');


module.exports = {
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {

        res.render("register");
    },
    updateUser: (req, res) => {

        let errors = validationResult(req);



        if (errors.isEmpty()) {


            res.redirect("/");
        }

        res.render("register", {
            errors: errors.mapped(),
            old: req.body,
        });
    },


}