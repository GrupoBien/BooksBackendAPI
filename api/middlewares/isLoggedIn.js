import { loginValidator } from "../validators/index.js";

export const isLoggedIn = async(req, res, next) => {
    const body = req;
    try {
        await loginValidator.validateAsync({body});
        next();
    } catch (error) {
        // return unauthorized
      return res.status(400).json({
          msg: 'Error en Autenticación, Usuario ó contraseña incorrectas 😢',
          error,
      });
    }
  };
  