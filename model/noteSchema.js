const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
  content: String,
  groupId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
});









const User = mongoose.model('Note', noteSchema);

module.exports = User;

