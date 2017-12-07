import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { Card, CardSection, Button, Input } from './common';

class EmployeeCreate extends Component {
    onNameChange(value) {
        this.props.employeeCreate({ prop: 'name', value})
        console.log('on change name', this.props.employeeCreate({ prop: 'name', value}))
    }
    onPhoneChange(value) {
        this.props.employeeCreate({ prop: 'phone', value})
    }
    render() {
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
                        onValueChange={value => this.props.employeeCreate({ props: 'shift', value })}
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
                    <Button>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employee;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
