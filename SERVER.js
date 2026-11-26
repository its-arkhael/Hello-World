const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve everything inside the "public" folder as your frontend UI
app.use(express.static(path.join(__dirname, 'public')));

// 2. Backend API endpoint that sends the popup text
app.get('/api/check', (req, res) => {
  res.json({ message: 'it works!!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});