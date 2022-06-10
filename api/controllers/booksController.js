import bookSchema from "../models/index.js";

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


export const getBook = (req, res) => {
    const {title} = req.params;

    try {
        const books = await bookSchema.find(title);

        if(!books){
            return res.status(404).json({
                msg: `Libro no encontrado`
            });
        }

        return res.status(200).json({
            message: "Ok",
            books,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al obtener el libro solicitado",
        });
    }
};
