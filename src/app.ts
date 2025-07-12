import express from 'express';
import userRoutes from './routes/UserRoutes';
import genderRoutes from './routes/GenderRoutes';
import emptypeRoutes from './routes/EmptypeRoutes';
import designationRoutes from './routes/DesignationRoutes';
import empstatusRoutes from './routes/EmpstatusRoutes'; 
import employeeRoutes from './routes/EmployeeRoutes';


const app = express();
app.use(express.json());

app.use('/users', userRoutes);

// Employee Module
app.use('/genders', genderRoutes);
app.use('/emptypes', emptypeRoutes);
app.use('/designations', designationRoutes);
app.use('/empstatuses', empstatusRoutes);
app.use('/employees', employeeRoutes);



export default app;
