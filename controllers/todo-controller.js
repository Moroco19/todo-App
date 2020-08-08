const Todo = require('../models/Todo');

const todoController = {
    index(req, res, next) {
        Todo.getAll()
            .then((todos) => {
                res.render('todos/index', {
                    todos: todos,
                });
            })
            .catch((err) => next(err));
    },

    // show(req, res, next) {

    // },

    // create(req, res, next) {

    // },

    // update(req, res, next) {

    // },

    // delete(req, res, next) {

    // },
}

module.exports = todoController;