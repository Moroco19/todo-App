const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todo-controller');

todoRouter.get('/', todoController.index);
// todoRouter.post('/', todoController.create);
// todoRouter.get('/new', (req, res) => {
//     res.render('todos/add');
// });
// todoRouter.get('/:id', todoController.show, (req, res) => {
//     res.render('todos/show', {
//         todo: res.locals.todo,
//     });
// });
// todoRouter.get('/:id/edit', todoController.show, (req, res) => {
//     res.render('/todos/edit', {
//         todo: res.locals.todo,
//     })
// });
// todoRouter.put('/:id', todoController.update);
// todoRouter.delete('/:id', todoController.delete);

module.exports = todoRouter;