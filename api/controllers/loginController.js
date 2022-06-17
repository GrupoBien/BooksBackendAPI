import { ModelUser } from '../models/index.js';
import bcryp from 'bcrypt';
import jwt from 'jwt-simple';

const login = async (req, res) => {
  const { mail, password } = req.body;
  try {
    // here we get the user from the database
    const userLogged = await ModelUser.findOne({ mail });
    const match = await bcryp.compare(password, userLogged.password);
    if (!match) {
      return res.status(400).json({
        msg: 'username or password not found 😒',
      });
    }
    const expDate = new Date();
    expDate.setMinutes(expDate.getMinutes() + 1); //this is the time life of the token

    const token = jwt.encode(
      {
        userLogged,
        expDate,
      },
      process.env.JWT_SECRET
    );
    return res.json({
      msg: 'Usuario encontrado',
      token,
    });
  } catch (error) {
    const result = {
      msg: 'Ha ocurrido un error al iniciar sesión 🤢🐱‍🚀',
      error:
        process.env.NODE_ENV == 'local' || process.env.NODE_ENV == 'development'
          ? error
          : null,
    };
    return res.status(500).json(result);
  }
};

const register = async (req, res) => {
  const { user } = req.body;
  try {
    user.password = await bcryp.hash(user.password, 3);
    const newUser = ModelUser.create(user);
    delete newUser.password;
    return res.json({
      msg: 'Usuario registrado correctamente 😂',
      user: newUser,
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Error al registrar nuevo usuario',
    });
  }
};
export { login, register };
