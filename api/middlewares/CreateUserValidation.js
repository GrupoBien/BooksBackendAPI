import { updateBooks } from '../validators/index.js';

export const validateUserCreation = async (req, res, next) => {
  const { body } = req;
  try {
    await updateBooks.validateAsync(body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error al intentar crear un usario, campos no válidos',
      error,
    });
  }
};
