// nodejs-postgresql/tests/index.test.js

import supertest from 'supertest';
import { app } from '../index.js';

describe('GET /', () => {
    it('should respond with a message', async () => {
        const todos = [
            { id: 1, text: 'First Todo' },
            { id: 2, text: 'Second Todo' },
            { id: 3, text: 'Third Todo' }
        ];
        const response = await supertest(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200);

        console.log(response.body);

        expect(response.body).toEqual(todos);
    });
});
