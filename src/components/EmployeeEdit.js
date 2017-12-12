import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communication from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
    constructor(){
        super();
        this.state = {
            showModal: false
        }
    }
    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            console.log('employee edit component checking CWM: ', value, prop)
            this.props.employeeUpdate({ prop, value })
        })
    }
    onButtonPress(){
        const { name, phone, shift } = this.props;
        console.log('employee edit button press: ', name, phone, shift);
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }
    onTextSend(){
        const { name, phone, shift } = this.props
        Communication.text(phone, `Hi ${name}, you're schedule to work on ${shift}! Thanks.`)
    }
    onAcceptPress(){
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }
    render(){
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextSend.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>Fire Employee</Button>
                </CardSection>
                <Confirm 
                visible={this.state.showModal}
                onDecline={() => this.setState({ showModal: false })}
                onAccept={this.onAcceptPress.bind(this)}
                >
                Are you sure you want to fire your employee?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employee;
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
