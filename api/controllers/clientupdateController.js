import clienteSchema from '../models/cliente-models';

export const updateClient = async (req, res) => {
  const { id } = req.params;
  //TODO: Borrar comentarios y cambiar nombre de archivo
  // const regex = /^[a-z][0-9]*$/ etc etc
  // if (!regex.matches(id)) res.status(400).json({message: "Id inválido"})

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

export const deleteCliente = async (req, res) => {
  const { id } = req.params;
  // const regex = /^[a-z][0-9]*$/ etc etc
  // if (!regex.matches(id)) res.status(400).json({message: "Id inválido"})

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
