const { describe, it } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide, power, modulo } = require('./index.js');

describe('Calculator', () => {
  it('should add two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(add(-1, 1), 0);
  });

  it('should subtract two numbers', () => {
    assert.strictEqual(subtract(5, 3), 2);
    assert.strictEqual(subtract(0, 5), -5);
  });

  it('should multiply two numbers', () => {
    assert.strictEqual(multiply(3, 4), 12);
    assert.strictEqual(multiply(-2, 3), -6);
  });

  it('should divide two numbers', () => {
    assert.strictEqual(divide(10, 2), 5);
    assert.strictEqual(divide(7, 2), 3.5);
  });

  it('should throw on division by zero', () => {
    assert.throws(() => divide(5, 0), { message: 'Division by zero' });
  });

  it('should calculate power', () => {
    assert.strictEqual(power(2, 3), 8);
    assert.strictEqual(power(5, 2), 25);
    assert.strictEqual(power(2, 0), 1);
  });

  it('should calculate modulo', () => {
    assert.strictEqual(modulo(10, 3), 1);
    assert.strictEqual(modulo(15, 5), 0);
  });

  it('should throw on modulo by zero', () => {
    assert.throws(() => modulo(5, 0), { message: 'Division by zero' });
  });
});
