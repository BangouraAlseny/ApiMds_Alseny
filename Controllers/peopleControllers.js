const { addLink } = require('../Config/linkUtilis');
const Person = require('../Models/PeopleModel');

const getAllPeople = async (req, res, next) => {
  try {
    const people = await Person.find();

    const formattedPeople = people.map((person) => {
      const formattedPerson = person.toJSON();
      addLink(formattedPerson, 'self', `${req.protocol}://${req.get('host')}/api/people/${formattedPerson._id}`);
      return formattedPerson;
    });

    res.json(formattedPeople);
  } catch (error) {
    next(error);
  }
};

const getPersonById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const person = await Person.findById(id);

    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }

    const formattedPerson = person.toJSON();
    addLink(formattedPerson, 'self', `${req.protocol}://${req.get('host')}/api/people/${formattedPerson._id}`);
    return res.json(formattedPerson);
  } catch (error) {
    next(error);
  }
};

const createPerson = async (req, res, next) => {
  try {
    const person = await Person.create(req.body);
    const formattedPerson = person.toJSON();
    res.status(201).json(formattedPerson);
  } catch (error) {
    next(error);
  }
};

const updatePerson = async (req, res, next) => {
  try {
    const { id } = req.params;
    const person = await Person.findByIdAndUpdate(id, req.body, { new: true });

    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }

    const formattedPerson = person.toJSON();
    res.json(formattedPerson);
  } catch (error) {
    next(error);
  }
};

const deletePerson = async (req, res, next) => {
  try {
    const { id } = req.params;
    const person = await Person.findByIdAndDelete(id);

    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }

    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPeople,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
};
