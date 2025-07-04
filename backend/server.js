// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (optional)
app.use(express.json()); // For parsing JSON bodies

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
