const { describe, it } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide, modulo } = require('./index.js');

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

  it('should throw TypeError for non-numeric input in add', () => {
    assert.throws(() => add('2', 3), { name: 'TypeError' });
    assert.throws(() => add(2, '3'), { name: 'TypeError' });
    assert.throws(() => add(null, 3), { name: 'TypeError' });
    assert.throws(() => add(2, undefined), { name: 'TypeError' });
  });

  it('should throw TypeError for NaN input', () => {
    assert.throws(() => add(NaN, 3), { message: 'Invalid input: NaN is not allowed' });
    assert.throws(() => subtract(NaN, 5), { message: 'Invalid input: NaN is not allowed' });
    assert.throws(() => multiply(3, NaN), { message: 'Invalid input: NaN is not allowed' });
    assert.throws(() => divide(NaN, 2), { message: 'Invalid input: NaN is not allowed' });
  });

  it('should throw TypeError for Infinity input', () => {
    assert.throws(() => add(Infinity, 3), { message: 'Invalid input: Infinity is not allowed' });
    assert.throws(() => subtract(5, -Infinity), { message: 'Invalid input: Infinity is not allowed' });
    assert.throws(() => multiply(Infinity, 3), { message: 'Invalid input: Infinity is not allowed' });
    assert.throws(() => divide(10, Infinity), { message: 'Invalid input: Infinity is not allowed' });
  });

  it('should throw TypeError for non-numeric input in all functions', () => {
    assert.throws(() => subtract({}, 3), { name: 'TypeError' });
    assert.throws(() => multiply([], 3), { name: 'TypeError' });
    assert.throws(() => divide('10', 2), { name: 'TypeError' });
    assert.throws(() => modulo('10', 2), { name: 'TypeError' });
  });

  it('should modulo two numbers', () => {
    assert.strictEqual(modulo(10, 3), 1);
    assert.strictEqual(modulo(8, 2), 0);
  });

  it('should throw on modulo by zero', () => {
    assert.throws(() => modulo(5, 0), { message: 'Modulo by zero' });
  });

  it('should return number type for all functions', () => {
    assert.strictEqual(typeof add(2, 3), 'number');
    assert.strictEqual(typeof subtract(5, 3), 'number');
    assert.strictEqual(typeof multiply(3, 4), 'number');
    assert.strictEqual(typeof divide(10, 2), 'number');
    assert.strictEqual(typeof modulo(10, 3), 'number');
  });
});
