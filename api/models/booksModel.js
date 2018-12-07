const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the book',
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: [{
      type: String,
      enum: ['Pending', 'Ongoing', 'Completed'],
    }],
    default: ['Pending'],
  },
});

module.exports = mongoose.model('Books', BookSchema);
