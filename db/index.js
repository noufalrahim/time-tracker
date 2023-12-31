import mongoose from 'mongoose';

const uri = 'mongodb+srv://projectmail0444:noufalrahim@cluster0.o60sual.mongodb.net/Database';

async function connectDB() {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

export default connectDB;