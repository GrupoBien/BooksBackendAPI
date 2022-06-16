import mongoose from 'mongoose';

//TODO: normalizar nombres de archivos
const clienteSchema = new mongoose.Schema({
  name: String,
  date_birth: Date,
  address: String,
  Number,
  references: [
    {
      name: String,
      phone: Number,
    },
  ],
  email: String,
  phone: Number,
});

export default mongoose.model('cliente', clienteSchema);
