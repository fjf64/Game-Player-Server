const express = require('express');
const axios = require('axios');
const cors = require('cors');

const router = express.Router();

// Middleware
router.use(cors()); // This handles CORS properly
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Preflight handling (optional, but good if you're debugging)
router.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
})); // Handles OPTIONS requests

// Main POST handler
router.post('/', async (req, res) => {
  try {
    // console.log('Headers:', req.headers);
    // console.log('Body:', req.body);

    const { newUrl } = req.body;
    if (!newUrl) {
      console.log('Missing newUrl');
      return res.status(400).json({ error: 'newUrl is required' });
    }

    const response = await axios.get(newUrl, {
      withCredentials: false,
    });

    res.send(response.data);
  } catch (error) {
    console.error('Error fetching URL:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
