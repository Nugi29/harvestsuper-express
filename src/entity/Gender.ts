import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Gender = sequelize.define('Gender', {
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
    tableName: 'gender',
    timestamps: false
});
