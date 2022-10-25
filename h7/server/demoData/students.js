const Student = require('../models/studentModel');

const students = [
  new Student({
    student_id: 1,
    lastname: 'Jaakso',
    firstname: 'Jamppa',
    birthday: '1998-03-25',
    eyecolor: 'Green',
    income: 3800.5,
    taxrate: 16.2,
    hometown_id: 1,
    grades: [
      {
        date: '2022-10-25',
        course_id: 1,
        grade: 5,
      },
      {
        date: '2022-10-25',
        course_id: 2,
        grade: 4,
      },
      {
        date: '2022-10-25',
        course_id: 3,
        grade: 5,
      },
    ],
  }),
  new Student({
    student_id: 2,
    lastname: 'Lemmetty',
    firstname: 'Lempi',
    birthday: '1996-10-19',
    eyecolor: 'Blue',
    income: 3200.5,
    taxrate: 14.0,
    hometown_id: 2,
    grades: [
      {
        date: '2022-10-25',
        course_id: 1,
        grade: 3,
      },
      {
        date: '2022-10-25',
        course_id: 2,
        grade: 5,
      },
      {
        date: '2022-10-25',
        course_id: 3,
        grade: 5,
      },
    ],
  }),
  new Student({
    student_id: 3,
    lastname: 'Kariniemi',
    firstname: 'Kari',
    birthday: '1999-09-18',
    eyecolor: 'Brown',
    income: 4100.5,
    taxrate: 17.2,
    hometown_id: 3,
    grades: [
      {
        date: '2022-10-25',
        course_id: 1,
        grade: 5,
      },
      {
        date: '2022-10-25',
        course_id: 2,
        grade: 5,
      },
      {
        date: '2022-10-25',
        course_id: 3,
        grade: 5,
      },
    ],
  }),
];

module.exports = students;
