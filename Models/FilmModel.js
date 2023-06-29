const mongoose = require('mongoose');
const { addLink } = require('../Config/linkUtilis');

const filmSchema = new mongoose.Schema({
  fields: {
    producer: String,
    title: String,
    created: String,
    episode_id: Number,
    director: String,
    release_date: String,
    opening_crawl: String,
  },
  model: String,
  pk: Number,
});

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;
