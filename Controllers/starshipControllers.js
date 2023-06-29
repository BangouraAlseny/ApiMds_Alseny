const { addLink } = require('../Config/linkUtilis');
const Starship = require('../Models/StarshipModel');

const getAllStarships = async (req, res, next) => {
  try {
    const starships = await Starship.find();

    const formattedStarships = starships.map((starship) => {
      const formattedStarship = starship.toJSON();
      addLink(formattedStarship, 'self', `${req.protocol}://${req.get('host')}/api/starship/${formattedStarship._id}`);
      return formattedStarship;
    });

    res.json(formattedStarships);
  } catch (error) {
    next(error);
  }
};

const getStarshipById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const starship = await Starship.findById(id);

    if (!starship) {
      return res.status(404).json({ message: 'Starship not found' });
    }

    const formattedStarship = starship.toJSON();
    addLink(formattedStarship, 'self', `${req.protocol}://${req.get('host')}/api/starship/${formattedStarship._id}`);
    return res.json(formattedStarship);
  } catch (error) {
    next(error);
  }
};

const createStarship = async (req, res, next) => {
  try {
    const starship = await Starship.create(req.body);
    const formattedStarship = starship.toJSON();
    res.status(201).json(formattedStarship);
  } catch (error) {
    next(error);
  }
};

const updateStarship = async (req, res, next) => {
  try {
    const { id } = req.params;
    const starship = await Starship.findByIdAndUpdate(id, req.body, { new: true });

    if (!starship) {
      return res.status(404).json({ message: 'Starship not found' });
    }

    const formattedStarship = starship.toJSON();
    res.json(formattedStarship);
  } catch (error) {
    next(error);
  }
};

const deleteStarship = async (req, res, next) => {
  try {
    const { id } = req.params;
    const starship = await Starship.findByIdAndDelete(id);

    if (!starship) {
      return res.status(404).json({ message: 'Starship not found' });
    }

    res.json({ message: 'Starship deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStarships,
  getStarshipById,
  createStarship,
  updateStarship,
  deleteStarship,
};
