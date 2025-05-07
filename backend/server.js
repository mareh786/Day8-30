const express = require('express');
const cors = require('cors');
const path = require('path');
const { addOrCheckMember } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.post('/api/check', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name is required' });

  addOrCheckMember(name.trim(), (err, message) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    res.json({ message });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
