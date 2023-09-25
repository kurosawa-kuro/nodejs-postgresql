import express from 'express';
import postgresql from 'pg';
const { Client } = postgresql;

const app = express();

app.get('/', async (req, res) => {
    const config = {
        host: 'localhost',
        user: 'dev_user',
        password: 'dev_password',
        database: 'test_db'
    };

    const client = new Client(config);
    await client.connect();

    try {
        const result = await client.query('SELECT * FROM todo');
        res.json(result.rows); // `rows`プロパティを直接レスポンスとして返す
    } finally {
        await client.end(); // データベースの接続を閉じる
    }
});

export { app };
