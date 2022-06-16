import { clienteSchema } from '../models/index.js';

export const deleteCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const client = await clienteSchema.findByIdAndDelete(id);
    res.status(201).json({
      message: 'Cliente eliminado',
      data: client,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error al eliminar cliente',
    });
  }
};

export const updateClient = async (req, res) => {
  const { id } = req.params;

  try {
    const client = await clienteSchema.findByIdAndUpdate(id, req.body);
    res.status(201).json({
      message: 'Cliente actualizado',
      data: client,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error al actualizar cliente',
    });
  }
};

export const createClient = async (req, res) => {
  const { body } = req;

  try {
    const cliente = await clienteSchema.create(body);
    res.status(201).json({
      msg: 'Cliente creado',
      data: cliente,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear usuario',
    });
  }
};
