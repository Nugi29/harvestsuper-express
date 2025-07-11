import express from 'express';
import userRoutes from './routes/UserRoutes';
import genderRoutes from './routes/GenderRoutes';
import emptypeRoutes from './routes/EmptypeRoutes';
import designationRoutes from './routes/DesignationRoutes';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

// Employee Module
app.use('/genders', genderRoutes);
app.use('/emptypes', emptypeRoutes);
app.use('/designations', designationRoutes);



export default app;
