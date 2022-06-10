import bookSchema from "../models/ModeloBooks.js";

export const createBook = async(req, res) =>{
    const {book} = req.body
    
    if(!book){
        return res.status(400).json({
            msg: "Falta informacion en el body, favor de completar toda la información"
        })
    }

    try {
        const newBook = await bookSchema.create(book)
        return res.json({
            msg: 'Libro creado correctamente',
            book: newBook
        })
    } catch (error) {
        const result = {
            msg: 'Ha ocurrido un error al guardar el libro',
            error: process.env.NODE_ENV == 'local' || process.env.NODE_ENV == 'development' ? error : null
        }
        return res.status(500).json(result)
    }
}

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
      const book = await bookSchema.rentalStatus(status);
      return req.json({
        msg: 'Ese libro esta rentado',
        data: book,
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
