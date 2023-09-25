import postgresql from 'pg';
const { Client } = postgresql;

import fetchTodos from './selectToDatabase'; // デフォルトエクスポートの場合のインポートの仕方に変更

// テストデータベース接続情報
const testConfig = {
    host: 'localhost',
    user: 'dev_user',
    password: 'dev_password',
    database: 'test_db'
};

const client = new Client(testConfig);

beforeAll(async () => {
    await client.connect();
    // テーブル名を小文字に統一
    await client.query(`CREATE TABLE IF NOT EXISTS todo (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL
    )`);
    await client.query(`INSERT INTO todo (title) VALUES ('Test Todo')`);
});

afterAll(async () => {
    // idを含めてtableを空にする
    await client.query('TRUNCATE TABLE todo');
    await client.end();
});

describe('fetchTodos', () => {
    it('should fetch todos from the test database', async () => {
        const todos = await fetchTodos();
        expect(todos).toEqual([{ id: 1, title: 'Test Todo' }]);
    });
});
