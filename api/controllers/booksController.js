import bookSchema from "../models/ModeloBooks.js";

export const updateBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await bookSchema.findByIdAndUpdate(id, req.body);
        res.status(201).json({
            message: "Libro actualizado",
            data: book,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al actualizar libro",
        });
    }
};

export const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await bookSchema.findByIdAndDelete(id);
        res.status(201).json({
            message: "Libro eliminado",
            data: book,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al eliminar libro",
        });
    }
};

export const bookStatus = async (req, res) => {
    const { status } = req;
  
    try {
      const newPet = await bookSchema.rentalStatus(status);
      return req.json({
        msg: 'Ese libro esta rentado',
        pet: newPet,
      });
    } catch (error) {
      const result = {
        msg: 'Ha ocurrido un error al consultar la base de datos',
      };
    }
  };