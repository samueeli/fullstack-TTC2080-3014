const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
  course_id: Number,
  coursename: String,
  credits: Number,
});

module.exports = mongoose.model('Course', courseSchema);
