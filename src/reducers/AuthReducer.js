import { 
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER 
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    console.log('actions from reducer.js: ', action);
    switch (action.type) {
        case EMAIL_CHANGE:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGE:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, ...INITIAL_STATE };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authenication Failed', password: '', loading: false };
        default:
            return state;
    }
}; 
