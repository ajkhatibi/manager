import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import { View, Text, ListView } from 'react-native';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch();
        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource({ employeesArray }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.employeesArray);
    }
    render(){
        console.log('logging render method', this.props);
        return (
            <View>
                <Text>
                    hello
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const employeesArray = _.map(state.employeeList, (val,uid) => {
        return { ...val, uid}
    });
    return { employeesArray };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList); 

