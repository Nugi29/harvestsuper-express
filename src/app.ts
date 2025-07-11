import express from 'express';
import userRoutes from './routes/UserRoutes';
import genderRoutes from './routes/GenderRoutes';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/genders', genderRoutes);


export default app;
