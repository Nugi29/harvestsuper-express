import {
    Model,
    DataTypes,
    Optional,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    ForeignKey
} from 'sequelize';
import { sequelize } from '../config/db';


export class Employee extends Model<InferAttributes<Employee>, InferCreationAttributes<Employee>> {
    declare id: CreationOptional<number>;
    declare number: string;
    declare fullname: string;
    declare callingname: string;
    declare photo: Buffer | null;
    declare dobirth: Date;
    declare nic: string;
    declare address: string;
    declare mobile: string;
    declare land: string | null;
    declare email: string;
    declare doassignment: Date;
    declare description: string | null;

    // FK relations
    declare gender_id: number;
    declare emptype_id: number;
    declare designation_id: number;
    declare empstatus_id: number;
}

// Define model
Employee.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    number: {
        type: DataTypes.STRING(4),
        allowNull: false,
        validate: {
            is: /^\d{4}$/
        }
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^([A-Z][a-z]*[.]?[\s]?)*([A-Z][a-z]*)$/
        }
    },
    callingname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^([A-Z][a-z]+)$/
        }
    },
    photo: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    },
    dobirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    nic: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^([\d]{9}[vVxX]|[\d]{12})$/
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[\w\/\-,\s]{2,}$/
        }
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^0\d{9}$/
        }
    },
    land: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            is: /^\d{0,10}$/
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    doassignment: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
    ,
    gender_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    emptype_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    designation_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    empstatus_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'employee',
    timestamps: false,
    freezeTableName: true
});
