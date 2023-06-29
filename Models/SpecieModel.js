const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
  edited: {
    type: Date,
    required: true
  },
  classification: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true
  },
  eye_colors: {
    type: String,
    required: true
  },
  people: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'People'
  },
  skin_colors: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  hair_colors: {
    type: String,
    required: true
  },
  homeworld: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Planet',
    required: true
  },
  average_lifespan: {
    type: String,
    required: true
  },
  average_height: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  pk: {
    type: Number,
    required: true
  }
});

const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;
