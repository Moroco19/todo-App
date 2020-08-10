const bcrypt = require('bcryptjs');
const User = require('../models/User');

const userController = {
    index(req, res, next) {
        res.redirect('/todos');
    },

    create(req, res, next) {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(req.body.password, salt);
        new User({
            username: req.body.username,
            email: req.body.email,
            password_digest: hash,
            name: req.body.name,
        })
        .save()
        .then((user) => {
            req.login(user, (err) => {
                if (err) return next(err);
                res.redirect('/todos');
            });
        })
        .catch(next);
    }
}

module.exports = userController;