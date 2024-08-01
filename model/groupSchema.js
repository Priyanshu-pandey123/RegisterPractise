const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: String,
  color: String,
});



const User = mongoose.model('Group', groupSchema);

module.exports = User;



