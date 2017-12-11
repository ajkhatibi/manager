import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeEdit extends Component {
    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            console.log('employee edit component checking CWM: ', value, prop)
            this.props.employeeUpdate({ prop, value })
        })
    }
    onButtonPress(){
        const { name, phone, shift } = this.props;
        console.log('employee edit button press: ', name, phone, shift);
    }
    render(){
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button>
                        Save
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employee;
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
