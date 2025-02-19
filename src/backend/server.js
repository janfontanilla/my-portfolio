import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './Routes/userRoutes.js';
import contactRoutes from './Routes/contactRoutes.js';

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes); 
app.use('/api/contacts', contactRoutes); 


const mongoURI = 'mongodb+srv://janUser:janUserPASSWORD@cluster0.430hv.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log('MongoDB connection error:', err));


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
