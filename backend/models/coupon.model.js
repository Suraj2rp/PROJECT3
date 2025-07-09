// models/Coupon.js
import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  title: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  discountAmount: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
  terms: { type: String },
  price: { type: Number, required: true },

  isVerified: { type: Boolean, default: false }, // Coupon verification system
  isReported: { type: Boolean, default: false }, // Reporting by users
  isSold: { type: Boolean, default: false },

  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },

  visibility: { type: Boolean, default: true }, // If admin hides coupon
}, { timestamps: true });

couponSchema.index({ brand: 'text', title: 'text' }); // for filter/search

export default mongoose.model('Coupon', couponSchema);
