import { Department } from './department';

export class Employee {
    id: number;
    username: string;
    fullname: string;
    dob: Date;
    title: string;
    supervisor: Employee;
    department: Department;
    balance: number;
}
