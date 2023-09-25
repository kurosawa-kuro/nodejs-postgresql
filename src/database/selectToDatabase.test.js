// Importing Dependencies
import { Client } from 'pg';
import fetchTodos from './selectToDatabase';

// Test Database Configuration
const testConfig = {
    host: 'localhost',
    user: 'dev_user',
    password: 'dev_password',
    database: 'test_db',
};

const client = new Client(testConfig);

// Setting up the Test Environment
beforeAll(async () => {
    await client.connect();
    await client.query(`
    CREATE TABLE IF NOT EXISTS todo (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL
    )
  `);
    await client.query('TRUNCATE todo RESTART IDENTITY;');
    await client.query(`INSERT INTO todo (title) VALUES ('Test Todo')`);
});

// Cleaning up the Test Environment
afterAll(async () => {
    await client.query('TRUNCATE todo RESTART IDENTITY;');
    await client.end();
});

// Test Suite
describe('fetchTodos', () => {
    it('should fetch todos from the test database', async () => {
        const todos = await fetchTodos();
        expect(todos).toEqual([{ id: 1, title: 'Test Todo' }]);
    });
});
