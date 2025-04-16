const mongoose = require('mongoose');
const userStatsSchema = new mongoose.Schema({
  username: String,
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 }
});

module.exports = mongoose.model('UserStats', userStatsSchema);
