// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Crucial for allowing your React app to talk to this server
app.use(express.json()); // Parses incoming JSON payloads

// Mock User Data (Normally this lives in a database like PostgreSQL or MongoDB)
const MOCK_USER = {
  email: 'test@netflix.com',
  password: 'password123'
};

// Login Route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Basic Backend Validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  // Authentication Check
  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    // In a real app, you would generate and return a JWT (JSON Web Token) here
    return res.status(200).json({ message: 'Login successful', token: 'mock-jwt-token-123' });
  } else {
    // 401 Unauthorized is the correct HTTP status code for failed logins
    return res.status(401).json({ error: 'Invalid email or password.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});