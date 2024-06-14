const mongoose = require('mongoose');

const IsaacSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String
});

const IsaacDBModel = mongoose.model('Isaac', IsaacSchema);

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/isaacDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increased timeout
      socketTimeoutMS: 45000, // Increased timeout
    });

    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
  IsaacDBModel,
  Appointment: mongoose.model('Appointment', new mongoose.Schema({
    customerName: String,
    email: String,
    date: String,
    time: String
  })),
  BookingDate: mongoose.model('BookingDate', new mongoose.Schema({
    justDate: Date,
    dateTime: Date
  }))
};
