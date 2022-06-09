// import from ...

export const updateBook = async (req, res) => {
    const { id } = req.params;
    // const regex = /^[a-z][0-9]*$/ etc etc
    // if (!regex.matches(id)) res.status(400).json({message: "Id inválido"})

    try {
        // si modelo se llama ModeloBooks -->
        const book = await ModeloBooks.findByIdAndUpdate(id, req.body);
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
    // const regex = /^[a-z][0-9]*$/ etc etc
    // if (!regex.matches(id)) res.status(400).json({message: "Id inválido"})

    try {
        // si modelo se llama ModeloBooks -->
        const book = await ModeloBooks.findByIdAndDelete(id);
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
