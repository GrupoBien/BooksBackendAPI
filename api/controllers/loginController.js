//import {user} from "../models/login";
import bcryp from 'bcrypt';
import jwt from 'jwt-simple';

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
      // here we get the user from the database
      //const user = await user.findById({ usuario: email })
      
      const match = await bcryp.compare(password, user.password);

      /*we see if the password send by the client and password 
      of the database match*/
      if (!match) {
        return res.status(400).json({
          msg: 'username or password not found 😒',
      });
      }

      const expDate = new Date();
      expDate.setMinutes(expDate.getMinutes() + 1);//this is the time life of the token

      const token = jwt.encode(
        {
            user,
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
  
  export { login};
  