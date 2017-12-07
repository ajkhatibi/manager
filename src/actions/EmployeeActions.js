import { EMPLOYEE_UPDATE } from './types';

export const employeeCreate = ({ prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};