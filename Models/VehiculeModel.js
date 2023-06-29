const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehicle_class: {
    type: String,
    required: true
  },
  pilots: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  }],
  model: {
    type: String,
    required: true
  },
  pk: {
    type: Number,
    required: true
  }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
