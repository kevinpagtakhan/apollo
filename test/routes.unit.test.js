const request = require('supertest');
const express = require('express');
const router = require('../server/routes');

describe('routes', function() {
    describe('GET /health', function () {
        it('should return 200', function () {
            const app = express();
            app.use('/', router);
            return request(app).get('/health')
                .then(function(data) {
                    expect(data.status).toBe(200);
                });
        });
    });
});
