import { Employee } from './Employee';
import { Gender } from './Gender';
import { Emptype } from './Emptype';
import { Designation } from './Designation';
import { Empstatus } from './Empstatus';
import { User } from './User';
// import { Supplier } from './Supplier';
// import { Purorder } from './Purorder';

export const setupAssociations = () => {
  // BelongsTo
  Employee.belongsTo(Gender, { foreignKey: 'gender_id', as: 'gender' });
  Employee.belongsTo(Emptype, { foreignKey: 'emptype_id', as: 'emptype' });
  Employee.belongsTo(Designation, { foreignKey: 'designation_id', as: 'designation' });
  Employee.belongsTo(Empstatus, { foreignKey: 'empstatus_id', as: 'empstatus' });

  // HasMany
  Employee.hasMany(User, { foreignKey: 'employeeId', as: 'users' });
//   Employee.hasMany(Supplier, { foreignKey: 'employeeId', as: 'suppliers' });
//   Employee.hasMany(Purorder, { foreignKey: 'employeeId', as: 'purorders' });
};
