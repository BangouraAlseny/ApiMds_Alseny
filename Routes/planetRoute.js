const express = require('express');
const router = express.Router();
const planetController = require('../Controllers/planetControllers');

router.get('/planet', planetController.getAllPlanets);

router.get('/planet/:id', planetController.getPlanetById);

router.post('/planet', planetController.createPlanet);

router.put('/planet/:id', planetController.updatePlanet);

router.delete('/planet/:id', planetController.deletePlanet);

module.exports = router;
