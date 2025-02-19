import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created: { type: Date, required: true },
  updated: { type: Date, required: true }
});

export default mongoose.model('User', userSchema);
