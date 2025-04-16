const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserStats = require('./models/UserStats');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://mongo:27017/hangman', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/api/stats', async (req, res) => {
  const { username, result } = req.body;
  const user = await UserStats.findOne({ username }) || new UserStats({ username });
  if (result === 'win') user.wins++;
  else user.losses++;
  await user.save();
  res.sendStatus(200);
});

app.get('/api/stats/:username', async (req, res) => {
  const user = await UserStats.findOne({ username: req.params.username });
  res.json(user || { username: req.params.username, wins: 0, losses: 0 });
});

app.listen(4000, () => console.log('Server running on port 4000'));