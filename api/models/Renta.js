import mongoose from 'mongoose';

const rentaSchema = new mongoose.Schema({
  quantity: Number,
  startRentDate: { type: Date, default: Date.now },
  endRentDate: Date,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Libro' }],
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
});
export default mongoose.model('Renta', rentaSchema);
