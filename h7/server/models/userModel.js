const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name for the user'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
