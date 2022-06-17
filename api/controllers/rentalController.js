import { rentalSchema } from '../models/index.js';

const getAllRentals = async (req, res) => {
  try {
    const rentals = await rentalSchema.find();

    return res.status(200).json({
      message: 'Ok',
      rentals,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error al obtener todas las rentas',
    });
  }
};

export { getAllRentals };
