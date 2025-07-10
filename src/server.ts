import app from './app';
import { connectDB } from './config/db';
import { User } from './entity/User';

const PORT = 3000;

const start = async () => {
  await connectDB();
  await User.sync(); // auto-creates table if not exists
  app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));
};

start();
