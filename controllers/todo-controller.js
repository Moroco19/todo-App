const Todo = require('../models/Todo');

const todoController = {
    index(req, res, next) {
        Todo.getAll()
            .then((todos) => {
                res.render('todos/index', {
                    data: { todos },
                });
            })
            .catch((err) => next(err));
    },

    show(req, res, next) {
        Todo.getById(req.params.id)
            .then((todo) => {
                res.locals.todo = todo;
                next();
            })
            .catch((err) => next(err));
    },

    create(req, res, next) {
        new Todo ({
            title:  req.body.title,
            description: req.body.description,
            status: req.body.status,
            category: req.body.category,
            user_id: req.user.id,
        })
            .save()
            .then(() => {
                res.redirect('/todos');
            })
            .catch((err) => next(err));
    },

    update(req, res, next) {
        Todo.getById(req.params.id)
        .then((todo) => {
            return todo.update(req.body);
        })
        .then((updatedTodo) => {    
            res.redirect(`/todos/${updatedTodo.id}`);
        })
        .catch((err) => next(err));
    },

    delete(req, res, next) {
        Todo.getById(req.params.id)
            .then((todo) => {
                return todo.delete();
            })
            .then(() => {
                res.redirect('/todos');
            })
            .catch((err) => next(err));
    },
}

module.exports = todoController;