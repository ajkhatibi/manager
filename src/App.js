import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCe1zHul4Gizq6Vk5ohsgWw1jWwpYK2HEs',
            authDomain: 'employeemanager-79baf.firebaseapp.com',
            databaseURL: 'https://employeemanager-79baf.firebaseio.com',
            projectId: 'employeemanager-79baf',
            storageBucket: '',
            messagingSenderId: '164785568789'
        };
        firebase.initializeApp(config);
    }
    render() {
        const reduxStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={reduxStore}>
                <View style={{ flex: 1 }}>
                    <Router />
                </View>
            </Provider>
        );
    }
}
