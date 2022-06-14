import { bookSchema } from '../models/index.js';
import config from '../config/index.js';

export const createBook = async (req, res) => {
  const { book } = req.body;

  try {
    const newBook = await bookSchema.create(book);
    return res.json({
      msg: 'Libro creado correctamente',
      book: newBook,
    });
  } catch (error) {
    const result = {
      msg: 'Ha ocurrido un error al guardar el libro',
      error:
        config.server.enviroment == 'local' ||
        config.server.enviroment == 'development' ||
        config.server.enviroment == 'test'
          ? error
          : null,
    };
    return res.status(500).json(result);
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await bookSchema.findByIdAndUpdate(id, req.body);
    res.status(201).json({
      message: 'Libro actualizado',
      data: book,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error al actualizar libro',
    });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookSchema.findByIdAndDelete(id);
    res.status(201).json({
      message: 'Libro eliminado',
      data: book,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error al eliminar libro',
    });
  }
};

export const getBooks = async (_, res) => {
  try {
    const books = await bookSchema.find();
    return res.json({
      msg: 'Libros encontrados',
      books,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Eror al obtener libros',
    });
  }
};
