import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import { View, Text } from 'react-native';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch()
    }
    render(){
        return (
            <View>
                <Text>
                    hello
                </Text>
            </View>
        );
    }
}

export default connect(null, {employeeFetch})(EmployeeList); 

