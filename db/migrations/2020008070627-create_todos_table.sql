CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(255),
    category TEXT
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password_digest TEXT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL
);

ALTER TABLE todos ADD COLUMN user_id INTEGER REFERENCES users(id);