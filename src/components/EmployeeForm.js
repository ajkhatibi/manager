import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
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
    render(){
        return (
            <View>
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
            </View>
        );
    }
};


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employee
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm); 
