// models/Transaction.js
import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  coupon: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon', required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },

  paymentStatus: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed', 'Refunded'],
    default: 'Pending'
  },
  paymentDate: { type: Date, default: Date.now },
  couponCodeDelivered: { type: Boolean, default: false }
});

export default mongoose.model('Transaction', transactionSchema);
