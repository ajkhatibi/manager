import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate, employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift });
        console.log('buttton is pressed', this.props.employeeCreate({ name, phone, shift}));
    }
    render() {
        console.log('after clicking on employee: ', this.props.employee);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employee;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
