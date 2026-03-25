const express = require('express');
const { add, subtract, multiply, divide } = require('./index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

function validateNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return false;
  }
  if (isNaN(a) || isNaN(b)) {
    return false;
  }
  if (!isFinite(a) || !isFinite(b)) {
    return false;
  }
  return true;
}

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  
  if (!validateNumbers(a, b)) {
    return res.status(400).json({ error: 'Invalid input: a and b must be valid numbers' });
  }
  
  const result = add(a, b);
  res.json({ result });
});

app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  
  if (!validateNumbers(a, b)) {
    return res.status(400).json({ error: 'Invalid input: a and b must be valid numbers' });
  }
  
  const result = subtract(a, b);
  res.json({ result });
});

app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  
  if (!validateNumbers(a, b)) {
    return res.status(400).json({ error: 'Invalid input: a and b must be valid numbers' });
  }
  
  const result = multiply(a, b);
  res.json({ result });
});

app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  
  if (!validateNumbers(a, b)) {
    return res.status(400).json({ error: 'Invalid input: a and b must be valid numbers' });
  }
  
  try {
    const result = divide(a, b);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
