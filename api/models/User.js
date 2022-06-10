import mongoose from 'mongoose';

//TODO: Falta campo contraseña y los campos email y contraseña deben ser OBLOGATORIOS
const ModelUser = new mongoose.Schema({
  nombre: String,
  fecha_de_nacimiento: Date,
  mail: String,
  nombre_app: String,
});

export default mongoose.model('User', ModelUser);
