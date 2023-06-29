const express = require('express');
const router = express.Router();
const peopleController = require('../Controllers/peopleControllers');

router.get('/people', peopleController.getAllPeople);

router.get('/people/:id', peopleController.getPersonById);

router.post('/people', peopleController.createPerson);

router.put('/people/:id', peopleController.updatePerson);

router.delete('/people/:id', peopleController.deletePerson);

module.exports = router;
