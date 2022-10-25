const City = require('../models/cityModel');

const cities = [
  new City({
    city_id: 1,
    cityname: 'Helsinki',
    population: 631695,
  }),
  new City({
    city_id: 2,
    cityname: 'Turku',
    population: 186756,
  }),
  new City({
    city_id: 3,
    cityname: 'Tampere',
    population: 226696,
  }),
];

module.exports = cities;
