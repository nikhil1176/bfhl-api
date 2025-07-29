const express = require('express');
const app = express();
const processData = require('./logic');  // Importing the logic

app.use(express.json()); // Middleware to parse JSON

// GET route (optional test route)
app.get('/', (req, res) => {
  res.send('BFHL API is live');
});

// POST /bfhl route
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const result = processData(data);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, message: "Server error" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
