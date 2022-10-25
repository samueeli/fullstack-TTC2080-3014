const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new Schema({
  city_id: Number,
  cityname: String,
  population: Number,
});

module.exports = mongoose.model('City', citySchema);
