import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Empstatus = sequelize.define('Empstatus', {
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
    tableName: 'empstatus',
    timestamps: false
});
