require('dotenv').config();
const express = require ('express');
const cors = require ('cors');
const bcrypt = require ("bcrypt");
const jwt = require ('jsonwebtoken');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const saltRounds = 10;
const { body, validationResult } = require('express-validator');
const { connectDB, IsaacDBModel, Appointment, BookingDate } = require('./Models/IsaacDB');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

connectDB

// CORS middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.get("/", (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) {
    res.status(401);
    return;
  }

  try {
    verify(token.split(" ")[1], "secret");
  } catch (e) {
    res.status(403);
    res.send("Invalid token");
    return;
  }

  res.status(200);
  res.setHeader("Content-Type", "text/plain");
  res.send("Hello World!");
});
app.post("/api/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  users.push({
    name,
    email,
    password: hash,
    role: "user",
  });

  res.status(201);
  res.send("Created user");
}); 

app.post('/api/v2/signup', async (req, res) => {
  const name = req.body.name;
  const  email = req.body.email; 
   const password  = req.body;

  try {
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user with the hashed password
    const newUser = await IsaacDBModel.create(
      { 
        name: name, 
        email: email, 
        password: hashedPassword
      });

    res.status(201).json({ message: 'User successfully added to the database', user: newUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Secured endpoint for getting users
app.get('/api/users', async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = await jwt.verify(token, 'secret');

    // Check if the user is an admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    // Fetch all users
    const users = await IsaacDBModel.find({}, { name: 1, email: 1 });

    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ error: 'Invalid token' });
  }
});

// User login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await IsaacDBModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'No account exists with this email' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Password is valid, login successful
    const idToken = jwt.sign(
      {
        email: user.email,
        role: user.role,
      },
      'secret'
    );

    res.status(200).json({ message: 'Login successful', idToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
});

app.post('/appointmentDetails',async (req, res) =>{
  const date = req.body.date;
  const time = req.body.time;
  const totalTtems = req.body.totalTtems;
  const durationTime = req.body.durationTime;
  const gender = req.body.gender;
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const message = req.body.message;

  try {
    const newAppointment = await Appointment.create({
      date,
      time,
      totalTtems,
      durationTime,
      gender,
      name,
      email,
      phoneNumber,
      message
    });

    res.status(201).json({ message: 'Appointment created successfully', appointment: newAppointment });
  } catch (err) {
    console.error('Error creating appointment:', err);
    res.status(500).json({ error: 'Failed to create appointment' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});