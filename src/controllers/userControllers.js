const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loadUsers, storeUsers } = require('../data/db-module')


module.exports = {
    login: (req, res) => {
        res.render('login')
    },
    userLogin: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let { name, password } = loadUsers().find(
                (user) => user.user === req.body.user
            );

            req.session.userLogin = {
                name,
                password,
            };
            // if (req.body.remenber) {
            //     res.cookie('userLeySeca', req.session.userLogin, {
            //         maxAge: 1000 * 60
            //     })
            // }
            res.redirect("/");
        } else {
            res.render("login", {
                errors: errors.mapped(),
            });
        }
    },
    register: (req, res) => {

        res.render("register");
    },
    updateUser: (req, res) => {

        let errors = validationResult(req);



        if (errors.isEmpty()) {
            const { name, surname, email, password } =
                req.body;
            const users = loadUsers();

            newUser = {
                id: users[users.length - 1] ? users[users.length - 1].id + 1 : 1,
                name: name.trim(),
                surname: surname.trim(),

                email: email.trim(),
                password: bcrypt.hashSync(password.trim(), 10),


            };
            const userModify = [...users, newUser];
            storeUsers(userModify);

            res.redirect("/users/login");
        }

        res.render("register", {
            errors: errors.mapped(),
            old: req.body,
        });
    },


}