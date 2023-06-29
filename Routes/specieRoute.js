const express = require('express');
const router = express.Router();
const speciesController = require('../Controllers/specieControllers');

router.get('/species', speciesController.getAllSpecies);

router.get('/species/:id', speciesController.getSpecieById);

router.post('/species', speciesController.createSpecie);

router.put('/species/:id', speciesController.updateSpecie);

router.delete('/species/:id', speciesController.deleteSpecie);

module.exports = router;
