import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  walletBalance: { type: Number, default: 0 },

  couponsListed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' }],
  couponsBought: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' }],
  ratingsReceived: [{
    rating: Number,
    review: String,
    fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }]
}, { timestamps: true });

export default mongoose.model('User', userSchema);
