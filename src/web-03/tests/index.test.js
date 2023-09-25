// nodejs-postgresql/tests/index.test.js

import supertest from 'supertest';
import { app } from '../index.js';

describe('GET /', () => {
    it('should respond with a message', async () => {
        const todos = [
            { id: 1, title: 'First Todo' }, // `text`プロパティは実際には`title`であるべきです
            { id: 2, title: 'Second Todo' },
            { id: 3, title: 'Third Todo' }
        ];

        const response = await supertest(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200);

        console.log(response.body); // `rows`プロパティをログ出力

        expect(response.body).toEqual(todos); // `rows`プロパティと比較
    });
});
