import { Employee } from '../models';

export class EmployeeDAO {
    // Fetch all employees

    async findAllIdName() {
        return await Employee.findAll({
            attributes: ['id', 'fullname']

        });
    }

    async findAll() {
        return await Employee.findAll({ 
            include: ['gender', 'emptype', 'designation', 'empstatus'],
            attributes: { exclude: ['gender_id', 'emptype_id', 'designation_id', 'empstatus_id'] }
        });
    }

    // Find employee by ID
    async findById(id: number) {
        return await Employee.findByPk(id, { 
            include: ['gender', 'emptype', 'designation', 'empstatus'],
            attributes: { exclude: ['gender_id', 'emptype_id', 'designation_id', 'empstatus_id'] }
        });
    }

    // Create new employee
    async save(data: {
        number: string;
        fullname: string;
        callingname: string;
        photo?: Buffer;
        dobirth: Date;
        nic: string;
        address: string;
        mobile: string;
        land?: string;
        email: string;
        doassignment: Date;
        description?: string;
        gender_id: number;
        emptype_id: number;
        designation_id: number;
        empstatus_id: number;
    }) {
        return await Employee.create(data);
    }

    // Update employee by ID
    async update(
        id: number,
        data: Partial<{
            number: string;
            fullname: string;
            callingname: string;
            photo?: Buffer;
            dobirth: Date;
            nic: string;
            address: string;
            mobile: string;
            land?: string;
            email: string;
            doassignment: Date;
            description?: string;
            gender_id: number;
            emptype_id: number;
            designation_id: number;
            empstatus_id: number;
        }>
    ) {
        const employee = await Employee.findByPk(id);
        if (employee) {
            return await employee.update(data);
        }
        return null;
    }

    // Delete employee by ID
    async delete(id: number) {
        const employee = await Employee.findByPk(id);
        if (employee) {
            await employee.destroy();
        }
    }
}
