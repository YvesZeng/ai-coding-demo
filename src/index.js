/**
 * Simple calculator module - Demo for AI coding agent
 */

function validateNumber(value, paramName = 'parameter') {
  if (typeof value !== 'number') {
    throw new TypeError(`Invalid input: ${paramName} must be a number, received ${typeof value}`);
  }
  if (Number.isNaN(value)) {
    throw new TypeError('Invalid input: NaN is not allowed');
  }
  if (!Number.isFinite(value)) {
    throw new TypeError('Invalid input: Infinity is not allowed');
  }
}

function add(a, b) {
  validateNumber(a, 'a');
  validateNumber(b, 'b');
  return a + b;
}

function subtract(a, b) {
  validateNumber(a, 'a');
  validateNumber(b, 'b');
  return a - b;
}

function multiply(a, b) {
  validateNumber(a, 'a');
  validateNumber(b, 'b');
  return a * b;
}

function divide(a, b) {
  validateNumber(a, 'a');
  validateNumber(b, 'b');
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function modulo(a, b) {
  validateNumber(a, 'a');
  validateNumber(b, 'b');
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

module.exports = { add, subtract, multiply, divide, modulo };
