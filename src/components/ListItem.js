import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    onPressHandeler(){
        Actions.employeeCreate({ employee: this.props.employee });
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onPressHandeler.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.styleText}>{this.props.row}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


const styles = StyleSheet.create({
    styleText: {
        fontSize: 18,
        paddingLeft: 15
    }
});

export default ListItem;
