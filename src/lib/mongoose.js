import mongoose from 'mongoose';

const connectMongo = async () => {
  if (mongoose.connection.readyState === 1) return; // Already connected
  await mongoose.connect("mongodb+srv://mahi:62437412@cluster0.si7vg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });
};

export default connectMongo;
