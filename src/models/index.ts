import { sequelize } from '../config/db';
import { Employee } from '../entity/Employee';
import { Gender } from '../entity/Gender';
import { Emptype } from '../entity/Emptype';
import { Designation } from '../entity/Designation';
import { Empstatus } from '../entity/Empstatus';
import { User } from '../entity/User';

// This function will be called after database connection is established
export const initializeModels = () => {
  // Models using sequelize.define() are already initialized
  // We just need to ensure associations are set up
  
  // BelongsTo associations
  Employee.belongsTo(Gender, { foreignKey: 'gender_id', as: 'gender' });
  Employee.belongsTo(Emptype, { foreignKey: 'emptype_id', as: 'emptype' });
  Employee.belongsTo(Designation, { foreignKey: 'designation_id', as: 'designation' });
  Employee.belongsTo(Empstatus, { foreignKey: 'empstatus_id', as: 'empstatus' });

  // HasMany associations
  Employee.hasMany(User, { foreignKey: 'employee_id', as: 'users' });
  
  console.log('✅ Models initialized and associations set up!');
};

export {
  Employee,
  Gender,
  Emptype,
  Designation,
  Empstatus,
  User,
  sequelize
};
