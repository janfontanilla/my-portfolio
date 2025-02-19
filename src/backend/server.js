import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './Routes/userRoutes.js';
import contactRoutes from './Routes/contactRoutes.js'

const app = express();
app.use(express.json()); 
app.use(userRoutes); 

mongoose
  .connect('mongodb://127.0.0.1:27017/Skeleton', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
