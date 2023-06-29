const express = require('express');
const router = express.Router();
const transportController = require('../Controllers/transportControllers');

router.get('/transport', transportController.getAllTransports);

router.get('/transport/:id', transportController.getTransportById);

router.post('/transport', transportController.createTransport);

router.put('/transport/:id', transportController.updateTransport);

router.delete('/transport/:id', transportController.deleteTransport);

module.exports = router;
