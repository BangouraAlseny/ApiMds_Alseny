const express = require('express');
const router = express.Router();
const filmController = require('../Controllers/filmControllers');

router.get('/film', filmController.getAllFilms);

router.get('/film/:id', filmController.getFilmById);

router.post('/film', filmController.createFilm);

router.put('/film/:id', filmController.updateFilm);

router.delete('/film/:id', filmController.deleteFilm);

module.exports = router;
