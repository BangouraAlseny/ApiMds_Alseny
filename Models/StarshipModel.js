const mongoose = require('mongoose');

const starshipSchema = new mongoose.Schema({
  pilots: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Person'
  },
  MGLT: {
    type: String,
    required: true
  },
  starship_class: {
    type: String,
    required: true
  },
  hyperdrive_rating: {
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

const Starship = mongoose.model('Starship', starshipSchema);

module.exports = Starship;
