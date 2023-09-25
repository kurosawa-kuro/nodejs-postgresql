import postgresql from 'pg';
const { Client } = postgresql;

// データベース接続情報
const config = {
    host: 'localhost',
    user: 'dev_user',
    password: 'dev_password',
    database: 'test_db'
};

const fetchTodos = async () => {
    // 新しいクライアントインスタンスを作成
    const client = new Client(config);
    await client.connect();

    try {
        const result = await client.query('SELECT * FROM todo');
        console.log(result.rows);
        return result.rows;
    } catch (err) {
        console.error('Error executing query', err.stack);
        return [];
    } finally {
        await client.end();
    }
};

export default fetchTodos;
