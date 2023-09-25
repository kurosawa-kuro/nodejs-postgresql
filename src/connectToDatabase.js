import { Client } from 'pg';

// データベース接続情報
const config = {
    host: 'localhost',
    user: 'dev_user',
    password: 'dev_password',
    database: 'development_db'
};

class DatabaseConnector {
    constructor() {
        // PostgreSQLクライアントを作成
        this.client = new Client(config);
    }

    async connectToDatabase() {
        try {
            await this.client.connect();
            console.log('Connected to PostgreSQL');
            return true;
        } catch (err) {
            console.error('Connection error', err.stack);
            return false;
        } finally {
            await this.client.end();
        }
    }
}

export default DatabaseConnector;
