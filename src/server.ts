import { connectDB } from './config/db';

const PORT = 8080;

const start = async () => {
  await connectDB();
  
  // Import app after database connection is established
  const app = (await import('./app')).default;
  
  app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));
};

start();
