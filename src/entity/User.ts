import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  employeeId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'employee',
      key: 'id'
    }
  }
}, {
  tableName: 'users',
  timestamps: false
});
