const db = require('../db/config');

class Todo {
    constructor({ id, title, description, status, category, user_id }) {
        this.id = id || null;
        this.title = title;
        this.description = description;
        this.status = status;
        this.category = category;
        this.user_id = user_id;
    }
//
    static getAll(user) {
        return db
            .query('SELECT * FROM todos JOIN users ON users.id = todos.user_id WHERE users.id = $1', user.id)
            .then((todos) => todos.map((todo) => new this(todo)));
    }

    static getById(id) {
        return db
            .oneOrNone('SELECT * FROM todos WHERE id =$1', id)
            .then((todo) => {
                if (todo) return new this(todo);
                throw new Error(`Todo not found`);
            });
    }

    save() {
        return db
            .one(
                `INSERT INTO todos (title, description, status, category, user_id)
                VALUES ($/title/, $/description/, $/status/, $/category/, $/user_id/)
                RETURNING *`, this
            )
            .then((todo) => {
                return Object.assign(this, todo);
            });
    }

    update(changes) {
        Object.assign(this, changes);
        return db
            .oneOrNone(
                `UPDATE todos SET
                title = $/title/,
                description = $/description/,
                status = $/status/,
                category = $/category/
                WHERE id = $/id/
                RETURNING *`, this
            )
            .then((todo) => {
                return Object.assign(this, todo);
            });
    }

    delete() {
        return db.none('DELETE FROM todos WHERE id = $/id/', this);
    }
}

module.exports = Todo;