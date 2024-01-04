// Create web server
// 1. Create web server
// 2. Create route
// 3. Create controller
// 4. Create view

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// 2. Create route
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

// 3. Create controller
app.get('/comments', (req, res) => {
  const comments = [
    { name: 'A', message: 'Hello' },
    { name: 'B', message: 'Hi' },
    { name: 'C', message: 'Hey' },
  ];
  res.json(comments);
});

// 4. Create view

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});