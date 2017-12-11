import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
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

export default connect()(EmployeeEdit);
