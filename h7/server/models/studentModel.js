const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
  student_id: Number,
  lastname: String,
  firstname: String,
  birthday: Date,
  eyecolor: String,
  income: Schema.Types.Decimal128,
  taxrate: Schema.Types.Decimal128,
  hometown_id: Number,
  grades: [
    {
      date: Date,
      course_id: Number,
      grade: Number,
    },
  ],
});

module.exports = mongoose.model('Student', studentSchema);
