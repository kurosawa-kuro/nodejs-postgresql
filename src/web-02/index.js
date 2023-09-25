// nodejs-postgresql/src/index.js

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    const todos = [
        { id: 1, title: 'First Todo' },
        { id: 2, title: 'Second Todo' },
        { id: 3, title: 'Third Todo' }
    ];
    res.json(todos);
});

export { app };