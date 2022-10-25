const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db.js');

const Student = require('./models/studentModel');
const Course = require('./models/courseModel');
const City = require('./models/cityModel');

const students = require('./demoData/students');
const courses = require('./demoData/courses');
const cities = require('./demoData/cities');

const createData = async () => {
  try {
    await connectDB();
    await Student.deleteMany();
    await Course.deleteMany();
    await City.deleteMany();

    for (let i = 0; i < cities.length; i++) {
      cities[i].save();
    }
    for (let i = 0; i < courses.length; i++) {
      courses[i].save();
    }
    for (let i = 0; i < students.length; i++) {
      students[i].save();
    }

    console.log('Created demodata!');
  } catch (err) {
    console.log('Error generating demodata!', err);
  }
};

createData();
