import { validUserSchema } from '../validators/index.js';

const validateBookeCreation = async (req, res, next) => {
  const { body } = req;
  try {
    await validUserSchema.validateAsync(body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error al intentar crear un usuario, campos no válidos',
      error,
    });
  }
};

export default validateBookeCreation;
