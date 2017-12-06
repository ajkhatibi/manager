import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene key='login' component={LoginForm} title='Welcome' initial/>
                <Scene 
                rightTitle='add'
                onRight={()=> Actions.employeeCreate()}
                key='employeeList' 
                component={EmployeeList} 
                title='Employees'  />
                 <Scene title='Create Employee' key='employeeCreate' component={EmployeeCreate} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
