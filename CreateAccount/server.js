const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log(`Error connecting to MongoDB: ${error}`));

// Define a Mongoose schema for users
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create a Mongoose model from the schema
const User = mongoose.model('User', userSchema);

// Route to register a new user
app.post('/api/auth/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // TODO: Add validation and error handling
  // TODO: Hash the password before saving

  const newUser = new User({ name, email, password });
  await newUser.save();

  res.status(201).json({ message: 'User registered successfully' });
});

// Start the server
const PORT = process.env.PORT ||  8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
