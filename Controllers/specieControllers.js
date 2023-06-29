const { addLink } = require('../Config/linkUtilis');
const Specie = require('../Models/SpecieModel');

const getAllSpecies = async (req, res, next) => {
  try {
    const species = await Specie.find();

    const formattedSpecies = species.map((specie) => {
      const formattedSpecie = specie.toJSON();
      addLink(formattedSpecie, 'self', `${req.protocol}://${req.get('host')}/api/specie/${formattedSpecie._id}`);
      return formattedSpecie;
    });

    res.json(formattedSpecies);
  } catch (error) {
    next(error);
  }
};

const getSpecieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const specie = await Specie.findById(id);

    if (!specie) {
      return res.status(404).json({ message: 'Specie not found' });
    }

    const formattedSpecie = specie.toJSON();
    addLink(formattedSpecie, 'self', `${req.protocol}://${req.get('host')}/api/specie/${formattedSpecie._id}`);
    return res.json(formattedSpecie);
  } catch (error) {
    next(error);
  }
};

const createSpecie = async (req, res, next) => {
  try {
    const specie = await Specie.create(req.body);
    const formattedSpecie = specie.toJSON();
    res.status(201).json(formattedSpecie);
  } catch (error) {
    next(error);
  }
};

const updateSpecie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const specie = await Specie.findByIdAndUpdate(id, req.body, { new: true });

    if (!specie) {
      return res.status(404).json({ message: 'Specie not found' });
    }

    const formattedSpecie = specie.toJSON();
    res.json(formattedSpecie);
  } catch (error) {
    next(error);
  }
};

const deleteSpecie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const specie = await Specie.findByIdAndDelete(id);

    if (!specie) {
      return res.status(404).json({ message: 'Specie not found' });
    }

    res.json({ message: 'Specie deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSpecies,
  getSpecieById,
  createSpecie,
  updateSpecie,
  deleteSpecie,
};
