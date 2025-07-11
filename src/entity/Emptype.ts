import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Emptype = sequelize.define('Emptype', {
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
    tableName: 'emptype',
    timestamps: false
});
