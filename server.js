const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./Config/database');
const peopleRoute = require('./Routes/peopleRoute');
const filmRoute = require('./Routes/filmRoute');
const specieRoute = require('./Routes/specieRoute');
const starshipRoute = require('./Routes/starshipRoute');
const transportRoute = require('./Routes/transportRoute');
const vehiculeRoute = require('./Routes/vehiculeRoute');
const planetRoute = require('./Routes/planetRoute');
const authRoute = require('./Routes/authRoutes');

const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use('/api', authRoute);

connectDB();

app.use('/api', peopleRoute);
app.use('/api', filmRoute);
app.use('/api', specieRoute);
app.use('/api', starshipRoute);
app.use('/api', transportRoute);
app.use('/api', vehiculeRoute);
app.use('/api', planetRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
