// nodejs-postgresql/tests/index.test.js

import supertest from 'supertest';
import { app } from '../index.js';

describe('GET /', () => {
    it('should respond with a message', async () => {
        const response = await supertest(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toEqual({ message: 'Hello, World!' });
    });
});
