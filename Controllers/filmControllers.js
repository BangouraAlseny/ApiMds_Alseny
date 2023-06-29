const { addLink } = require('../Config/linkUtilis');
const Film = require('../Models/FilmModel');

const getAllFilms = async (req, res, next) => {
  try {
    const films = await Film.find();

    const formattedFilms = films.map((film) => {
      const formattedFilm = film.toJSON();
      addLink(formattedFilm, 'self', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}`);
      addLink(formattedFilm, 'starships', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}/starships`);
      addLink(formattedFilm, 'vehicles', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}/vehicles`);
      addLink(formattedFilm, 'planets', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}/planets`);
      addLink(formattedFilm, 'characters', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}/characters`);
      addLink(formattedFilm, 'species', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}/species`);
      return formattedFilm;
    });

    res.json(formattedFilms);
  } catch (error) {
    next(error);
  }
};

const getFilmById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const film = await Film.findById(id);

    if (!film) {
      return res.status(404).json({ message: 'Film not found' });
    }

    const formattedFilm = film.toJSON();
    addLink(formattedFilm, 'self', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}`);
    addLink(formattedFilm, 'starships', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}/starships`);
    addLink(formattedFilm, 'vehicles', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}/vehicles`);
    addLink(formattedFilm, 'planets', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}/planets`);
    addLink(formattedFilm, 'characters', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}/characters`);
    addLink(formattedFilm, 'species', `${req.protocol}://${req.get('host')}/api/film/${formattedFilm._id}/species`);

    return res.json(formattedFilm);
  } catch (error) {
    next(error);
  }
};

const createFilm = async (req, res, next) => {
  try {
    const film = await Film.create(req.body);
    const formattedFilm = film.toJSON();
    res.status(201).json(formattedFilm);
  } catch (error) {
    next(error);
  }
};

const updateFilm = async (req, res, next) => {
  try {
    const { id } = req.params;
    const film = await Film.findByIdAndUpdate(id, req.body, { new: true });

    if (!film) {
      return res.status(404).json({ message: 'Film not found' });
    }

    const formattedFilm = film.toJSON();
    res.json(formattedFilm);
  } catch (error) {
    next(error);
  }
};

const deleteFilm = async (req, res, next) => {
  try {
    const { id } = req.params;
    const film = await Film.findByIdAndDelete(id);

    if (!film) {
      return res.status(404).json({ message: 'Film not found' });
    }

    res.json({ message: 'Film deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllFilms,
  getFilmById,
  createFilm,
  updateFilm,
  deleteFilm,
};
