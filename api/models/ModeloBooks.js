import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  autores: String,
  titulo: String,
  categoria: String,
  editorial: String,
  fechaImpresion: Date,
  paginas: Number,
  isbn: Number,
  idioma: String,
  tipo: String,
  mayoriaEdad: Boolean,
  portada: Image
});

export default mongoose.model('Book', bookSchema);