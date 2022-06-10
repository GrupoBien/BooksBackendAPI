import clienteSchema from "../models/cliente-models";

export const updateClient = async (req, res) => {
    const { id } = req.params;

    try {
        const client = await clienteSchema.findByIdAndUpdate(id, req.body);
        res.status(201).json({
            message: "Cliente actualizado",
            data: client,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al actualizar cliente",
        });
    }
};

export const deleteClient = async (req, res) => {
    const { id } = req.params;

    try {
        const client = await clienteSchema.findByIdAndDelete(id);
        res.status(201).json({
            message: "Cliente eliminado",
            data: client,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error al eliminar cliente",
        });
    }
};
