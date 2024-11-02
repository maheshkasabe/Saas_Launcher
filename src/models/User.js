// Assuming you’re using Mongoose for MongoDB
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  profileImage: String,
  subscriptionStatus: {
    type: String,
    enum: ['free', 'subscribed'],
    default: 'free',
  },
  subscriptionPlan: {
    type: String,
    enum: ['Free', 'Pro', 'Plus'], // Define your plan names
    default: 'Free',
  },
  subscriptionExpiry: Date, // If using time-based access
});

export default mongoose.models.User || mongoose.model('User', userSchema);
