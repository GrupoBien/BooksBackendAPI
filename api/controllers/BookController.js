import connection from '../utils/database.js';

const BookStatus = async (req, res) => {
  try {
    const estado = await connection.select('*').from('Rental');
    return res.json({
      estado,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: 'Ocurrió un error al consultar las rentas de libros',
    });
  }
};

export { BookStatus };