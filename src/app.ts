import express from 'express';
import userRoutes from './routes/UserRoutes';
import genderRoutes from './routes/GenderRoutes';
import emptypeRoutes from './routes/EmptypeRoutes';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

// Employee Module
app.use('/genders', genderRoutes);
app.use('/emptypes', emptypeRoutes);



export default app;
