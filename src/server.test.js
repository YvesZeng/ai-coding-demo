const { describe, it, before, after } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('./server.js');

describe('Calculator REST API', () => {
  describe('POST /add', () => {
    it('should add two positive numbers', async () => {
      const response = await request(app)
        .post('/add')
        .send({ a: 2, b: 3 })
        .expect(200);
      assert.strictEqual(response.body.result, 5);
    });

    it('should add negative numbers', async () => {
      const response = await request(app)
        .post('/add')
        .send({ a: -1, b: 1 })
        .expect(200);
      assert.strictEqual(response.body.result, 0);
    });

    it('should return 400 for invalid input - missing a', async () => {
      const response = await request(app)
        .post('/add')
        .send({ b: 3 })
        .expect(400);
      assert.ok(response.body.error);
    });

    it('should return 400 for invalid input - non-numeric a', async () => {
      const response = await request(app)
        .post('/add')
        .send({ a: 'hello', b: 3 })
        .expect(400);
      assert.ok(response.body.error);
    });
  });

  describe('POST /subtract', () => {
    it('should subtract two positive numbers', async () => {
      const response = await request(app)
        .post('/subtract')
        .send({ a: 5, b: 3 })
        .expect(200);
      assert.strictEqual(response.body.result, 2);
    });

    it('should subtract resulting in negative', async () => {
      const response = await request(app)
        .post('/subtract')
        .send({ a: 0, b: 5 })
        .expect(200);
      assert.strictEqual(response.body.result, -5);
    });

    it('should return 400 for invalid input - string values', async () => {
      const response = await request(app)
        .post('/subtract')
        .send({ a: '5', b: '3' })
        .expect(400);
      assert.ok(response.body.error);
    });
  });

  describe('POST /multiply', () => {
    it('should multiply two positive numbers', async () => {
      const response = await request(app)
        .post('/multiply')
        .send({ a: 3, b: 4 })
        .expect(200);
      assert.strictEqual(response.body.result, 12);
    });

    it('should multiply negative numbers', async () => {
      const response = await request(app)
        .post('/multiply')
        .send({ a: -2, b: 3 })
        .expect(200);
      assert.strictEqual(response.body.result, -6);
    });

    it('should return 400 for invalid input - null values', async () => {
      const response = await request(app)
        .post('/multiply')
        .send({ a: null, b: 3 })
        .expect(400);
      assert.ok(response.body.error);
    });
  });

  describe('POST /divide', () => {
    it('should divide two numbers', async () => {
      const response = await request(app)
        .post('/divide')
        .send({ a: 10, b: 2 })
        .expect(200);
      assert.strictEqual(response.body.result, 5);
    });

    it('should divide resulting in decimal', async () => {
      const response = await request(app)
        .post('/divide')
        .send({ a: 7, b: 2 })
        .expect(200);
      assert.strictEqual(response.body.result, 3.5);
    });

    it('should return 400 for division by zero', async () => {
      const response = await request(app)
        .post('/divide')
        .send({ a: 5, b: 0 })
        .expect(400);
      assert.ok(response.body.error);
    });

    it('should return 400 for invalid input - undefined values', async () => {
      const response = await request(app)
        .post('/divide')
        .send({ a: undefined, b: 2 })
        .expect(400);
      assert.ok(response.body.error);
    });

    it('should return 400 for NaN input', async () => {
      const response = await request(app)
        .post('/divide')
        .send({ a: NaN, b: 2 })
        .expect(400);
      assert.ok(response.body.error);
    });
  });
});
