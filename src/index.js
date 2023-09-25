// nodejs-postgresql/src/index.js

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

export { app };