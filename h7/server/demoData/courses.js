const Course = require('../models/courseModel');

const courses = [
  new Course({
    course_id: 1,
    coursename: 'Knitting 1',
    credits: 1,
  }),
  new Course({
    course_id: 2,
    coursename: 'Somersault basics',
    credits: 2,
  }),
  new Course({
    course_id: 3,
    coursename: 'Spicy food eating techniques',
    credits: 3,
  }),
];

module.exports = courses;
