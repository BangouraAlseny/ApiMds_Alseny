const { addLink } = require('../Config/linkUtilis');
const Planet = require('../Models/PlanetModel');

const getAllPlanets = async (req, res, next) => {
  try {
    const planets = await Planet.find();

    const formattedPlanets = planets.map((planet) => {
      const formattedPlanet = planet.toJSON();
      addLink(formattedPlanet, 'self', `${req.protocol}://${req.get('host')}/api/planet/${formattedPlanet._id}`);
      return formattedPlanet;
    });

    res.json(formattedPlanets);
  } catch (error) {
    next(error);
  }
};

const getPlanetById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const planet = await Planet.findById(id);

    if (!planet) {
      return res.status(404).json({ message: 'Planet not found' });
    }

    const formattedPlanet = planet.toJSON();
    addLink(formattedPlanet, 'self', `${req.protocol}://${req.get('host')}/api/planet/${formattedPlanet._id}`);
    return res.json(formattedPlanet);
  } catch (error) {
    next(error);
  }
};

const createPlanet = async (req, res, next) => {
  try {
    const planet = await Planet.create(req.body);
    const formattedPlanet = planet.toJSON();
    res.status(201).json(formattedPlanet);
  } catch (error) {
    next(error);
  }
};

const updatePlanet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const planet = await Planet.findByIdAndUpdate(id, req.body, { new: true });

    if (!planet) {
      return res.status(404).json({ message: 'Planet not found' });
    }

    const formattedPlanet = planet.toJSON();
    res.json(formattedPlanet);
  } catch (error) {
    next(error);
  }
};

const deletePlanet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const planet = await Planet.findByIdAndDelete(id);

    if (!planet) {
      return res.status(404).json({ message: 'Planet not found' });
    }

    res.json({ message: 'Planet deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPlanets,
  getPlanetById,
  createPlanet,
  updatePlanet,
  deletePlanet,
};
