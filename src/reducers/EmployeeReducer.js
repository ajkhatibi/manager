import { EMPLOYEE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMPLOYEE_SUCCESS:
            console.log('employee success', action);
            return state;
        default:
            return state;
    }
}
