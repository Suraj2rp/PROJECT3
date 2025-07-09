// models/Report.js
import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  coupon: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon', required: true },
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reason: { type: String, required: true },
  resolved: { type: Boolean, default: false },
  adminResponse: { type: String }
}, { timestamps: true });

export default mongoose.model('Report', reportSchema);
