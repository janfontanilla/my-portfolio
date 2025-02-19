import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './Routes/userRoutes.js';
import contactRoutes from './Routes/contactRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());  


app.use('/api', userRoutes);
app.use('/api', contactRoutes);


const mongoURI = 'mongodb+srv://janUser:janUserPASSWORD@cluster0.430hv.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0';
const port = 3000; 


mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


app.listen(port, () => console.log(`Server running on port ${port}`));
