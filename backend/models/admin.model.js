// models/Admin.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  role: { type: String, enum: ['superadmin', 'moderator'], default: 'moderator' }
});

export default mongoose.model('Admin', adminSchema);
