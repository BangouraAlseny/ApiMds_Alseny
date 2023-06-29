const { addLink } = require('../Config/linkUtilis');
const Transport = require('../Models/TransportModel');

const getAllTransports = async (req, res, next) => {
  try {
    const transports = await Transport.find();

    const formattedTransports = transports.map((transport) => {
      const formattedTransport = transport.toJSON();
      addLink(formattedTransport, 'self', `${req.protocol}://${req.get('host')}/api/transport/${formattedTransport._id}`);
      return formattedTransport;
    });

    res.json(formattedTransports);
  } catch (error) {
    next(error);
  }
};

const getTransportById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const transport = await Transport.findById(id);

    if (!transport) {
      return res.status(404).json({ message: 'Transport not found' });
    }

    const formattedTransport = transport.toJSON();
    addLink(formattedTransport, 'self', `${req.protocol}://${req.get('host')}/api/transport/${formattedTransport._id}`);
    return res.json(formattedTransport);
  } catch (error) {
    next(error);
  }
};

const createTransport = async (req, res, next) => {
  try {
    const transport = await Transport.create(req.body);
    const formattedTransport = transport.toJSON();
    res.status(201).json(formattedTransport);
  } catch (error) {
    next(error);
  }
};

const updateTransport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const transport = await Transport.findByIdAndUpdate(id, req.body, { new: true });

    if (!transport) {
      return res.status(404).json({ message: 'Transport not found' });
    }

    const formattedTransport = transport.toJSON();
    res.json(formattedTransport);
  } catch (error) {
    next(error);
  }
};

const deleteTransport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const transport = await Transport.findByIdAndDelete(id);

    if (!transport) {
      return res.status(404).json({ message: 'Transport not found' });
    }

    res.json({ message: 'Transport deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTransports,
  getTransportById,
  createTransport,
  updateTransport,
  deleteTransport,
};
