const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const itemRoutes = require('./itemRoute');
const userRoutes = require('./userRoute');

app.use('/api', itemRoutes);
app.use('/api', userRoutes);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Connection ready' });
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });

