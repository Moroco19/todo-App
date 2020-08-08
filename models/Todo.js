const db = require('../db/config');

class Todo {
    constructor({ id, title, description, status, category }) {
        this.id = id || null;
        this.title = title;
        this.description = description;
        this.status = status;
        this.category = category;
    }

    static getAll() {
        return db
            .query('SELECT * FROM todos')
            .then((todos) => todos.map((todo) => new this(todo)));
    }

    // static getById(id) {

    // }

    // save() {

    // }

    // update(changes) {

    // }

    // delete() {
    //     return db.non('DELETE FROM todos WHERE id = $/id/', this);
    // }
}

module.exports = Todo;