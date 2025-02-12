// server.test.js (Jest and Supertest tests)
const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('should return 200 OK and Hello, Mujtaba', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, Mujtaba');
  });
});

describe('GET /about', () => {
    it('should return 200 OK and Hello, Mujtaba at the about page', async () => {
      const response = await request(app).get('/about');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello, Mujtaba at the about page');
    });
  });


  describe('GET /error', () => {
    it('should return 404 OK and not found', async () => {
      const response = await request(app).get('/error');
      expect(response.status).toBe(404);
      expect(response.text).toBe('not found');
    });
  });