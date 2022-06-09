import user from "../models/login";

const getLogin = async (req, res) => {
    const { username, password } = req.body;
    
    if (!(username && password)) {
      return res.status(400).json({
        msg: 'username or password not found',
      });
    }
    try {
      const newPet = await Pet.create(pet);
      return res.json({
        msg: 'Mascota creada satisfactoriamente',
        pet: newPet,
      });
    } catch (error) {
      const result = {
        msg: 'Ha ocurrido un error al guardar la mascota',
        error:
          process.env.NODE_ENV == 'local' || process.env.NODE_ENV == 'development'
            ? error
            : null,
      };
      return res.status(500).json(result);
    }
  };
  
  export { getLogin };