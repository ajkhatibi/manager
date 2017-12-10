import React, { Component } from 'react';
import { Picker, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { employeeCreate, employeeUpdate } from '../actions';
import { Card, CardSection, Button, Input } from './common';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift });
        console.log('buttton is pressed', this.props.employeeCreate({ name, phone, shift}));

    }
    onNameChange(value) {
        this.props.employeeUpdate({ prop: 'name', value})
        console.log('on change name', this.props.employeeUpdate({ prop: 'name', value}))
    }
    onPhoneChange(value) {
        this.props.employeeUpdate({ prop: 'phone', value})
        console.log('on change phone: ',  this.props.employeeUpdate({ prop: 'phone', value}))
    }
    onShiftChange(value) {
        this.props.employeeUpdate({ prop: 'shift', value });
        console.log('on change shift: ', this.props.employeeUpdate({ prop: 'shift', value}))
    }
    render() {
        console.log('after clicking on employee: ', this.props.employee);
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Julian'
                        value={this.props.name}
                        onChangeText={this.onNameChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-555'
                        value={this.props.phone}
                        onChangeText={this.onPhoneChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Picker
                        style={{ flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={this.onShiftChange.bind(this)}
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    shiftTextStyles: {
        fontSize: 18,
        paddingLeft: 20
    }
});

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employee;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
