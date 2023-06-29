const { addLink } = require('../Config/linkUtilis');
const Vehicle = require('../Models/VehiculeModel');

const getAllVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();

    const formattedVehicles = vehicles.map((vehicle) => {
      const formattedVehicle = vehicle.toJSON();
      addLink(formattedVehicle, 'self', `${req.protocol}://${req.get('host')}/api/vehicle/${formattedVehicle._id}`);
      return formattedVehicle;
    });

    res.json(formattedVehicles);
  } catch (error) {
    next(error);
  }
};

const getVehicleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findById(id);

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    const formattedVehicle = vehicle.toJSON();
    addLink(formattedVehicle, 'self', `${req.protocol}://${req.get('host')}/api/vehicle/${formattedVehicle._id}`);
    return res.json(formattedVehicle);
  } catch (error) {
    next(error);
  }
};

const createVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    const formattedVehicle = vehicle.toJSON();
    res.status(201).json(formattedVehicle);
  } catch (error) {
    next(error);
  }
};

const updateVehicle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByIdAndUpdate(id, req.body, { new: true });

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    const formattedVehicle = vehicle.toJSON();
    res.json(formattedVehicle);
  } catch (error) {
    next(error);
  }
};

const deleteVehicle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByIdAndDelete(id);

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    res.json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
