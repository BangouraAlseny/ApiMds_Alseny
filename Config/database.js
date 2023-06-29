const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://bangoura:Guinee224@cluster0.jz2dqm5.mongodb.net/StarWars?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connecté à la base de données MongoDB');
  } catch (error) {
    console.error('Échec de la connexion à MongoDB :', error);
    process.exit(1);
  }
};

module.exports = connectDB;
