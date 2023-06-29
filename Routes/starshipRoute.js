const express = require('express');
const router = express.Router();
const starshipController = require('../Controllers/starshipControllers');

router.get('/starship', starshipController.getAllStarships);

router.get('/starship/:id', starshipController.getStarshipById);

router.post('/starship', starshipController.createStarship);

router.put('/starship/:id', starshipController.updateStarship);

router.delete('/starship/:id', starshipController.deleteStarship);

module.exports = router;
