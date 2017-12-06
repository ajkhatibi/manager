import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene key='login' component={LoginForm} title='Welcome'/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
