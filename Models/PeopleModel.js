const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fields: {
    edited: { type: String },
    name: { type: String },
    created: { type: String },
    gender: { type: String },
    skin_color: { type: String },
    hair_color: { type: String },
    height: { type: String },
    eye_color: { type: String },
    mass: { type: String },
    homeworld: { type: Number },
    birth_year: { type: String },
  },
  model: { type: String },
  pk: { type: Number },
});

const People = mongoose.model('People', peopleSchema);

module.exports = People;
