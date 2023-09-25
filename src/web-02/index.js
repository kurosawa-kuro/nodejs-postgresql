// nodejs-postgresql/src/index.js

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    const todos = [
        { id: 1, text: 'First Todo' },
        { id: 2, text: 'Second Todo' },
        { id: 3, text: 'Third Todo' }
    ];
    res.json(todos);
});

export { app };