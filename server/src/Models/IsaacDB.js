require('dotenv').config()

const mongoose = require('mongoose');

const IsaacSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String
});

const IsaacDBModel = mongoose.model('isaacs', IsaacSchema);

const connectDB = mongoose.connect(process.env.DATABASE_URL);

module.exports = {
  connectDB,
  IsaacDBModel,
  Appointment: mongoose.model('appointments', new mongoose.Schema({
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
