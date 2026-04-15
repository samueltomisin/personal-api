const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.status(200).json({ message: "API is running" });
});

app.get('/health', (req, res) => {
  res.status(200).json({ message: "healthy" });
});

app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Samuel Tomisin",
    email: "samueltomisin31@gmail.com",
    github: "https://github.com/samueltomisin",
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));