import mongoose from 'mongoose';

const ModelUser = new mongoose.Schema({
  nombre: String,
  fecha_de_nacimiento: Date,
  mail: String,
  nombre_app: String,
});

export default mongoose.model('User', ModelUser);