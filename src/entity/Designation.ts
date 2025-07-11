import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Designation = sequelize.define('Designation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'designation',
    timestamps: false
});
