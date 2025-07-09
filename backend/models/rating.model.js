// models/Rating.js
import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
  transaction: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction', required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String }
}, { timestamps: true });

export default mongoose.model('Rating', ratingSchema);
