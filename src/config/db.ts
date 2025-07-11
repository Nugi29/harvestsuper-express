import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'harvestsuper',       // database name
  'root',       // username
  '1234',   // password
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // disable SQL logs
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL connected!');
  } catch (error) {
    console.error('❌ MySQL connection error:', error);
  }
};
