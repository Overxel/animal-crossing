const mongoose = require('mongoose');
const Type = require('../enums/type.enum.js');
const Habitat = require('../enums/habitat.enum.js');
const Weather = require('../enums/weather.enum.js');

const AnimalSchema = mongoose.Schema({
    name: String,
    price: Number,
    type: Type,
    habitat: Habitat,
    schedule: {months: [Number], timeFrom: Date, timeTo: Date},
    weather: Weather,
    img: String 
}, {
    timestamps: true
});

module.exports = mongoose.model('Animal', AnimalSchema);