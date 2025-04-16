const express = require('express');
     const mongoose = require('mongoose');
     const cors = require('cors');
     require('dotenv').config();

     const submissionsRoute = require('./routes/submissions');

     const app = express();

     app.use(cors({
       origin: 'https://thomasgee03.github.io',
     }));

     app.use(express.json());

     app.get('/', (req, res) => {
       res.send('Server is up and running!');
     });

     app.use('/api/submissions', submissionsRoute);

     const connectDB = async () => {
       try {
         console.log('MongoDB URI:', process.env.MONGO_URI ? 'Set' : 'Undefined');
         await mongoose.connect(process.env.MONGO_URI, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
         });
         console.log('MongoDB Connected');
       } catch (err) {
         console.error('MongoDB connection error:', err);
         process.exit(1);
       }
     };
     connectDB();

     const PORT = process.env.PORT || 5000;
     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


