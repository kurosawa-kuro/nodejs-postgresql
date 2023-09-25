import postgresql from 'pg';
const { Client } = postgresql;

// データベース接続情報
const config = {
    host: 'localhost',
    user: 'dev_user',
    password: 'dev_password',
    database: 'development_db'
};

// クライアントのインスタンスを作成
const client = new Client(config);

const fetchTodos = async () => {
    // データベースに接続
    await client.connect();

    try {
        // SQLクエリを実行して結果を取得
        const result = await client.query('SELECT * FROM Todo');
        // 取得したTodoのリストをコンソールに出力
        console.log(result.rows);
    } catch (err) {
        // エラーが発生した場合、エラーメッセージをコンソールに出力
        console.error('Error executing query', err.stack);
    } finally {
        // データベース接続を終了
        await client.end();
    }
};

// Todoのリストを取得
fetchTodos();
