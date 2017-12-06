import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { emailChanged, passwordChange, userLogin } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    onChangeEmail(text) {
        this.props.emailChanged(text);
        console.log('email change: ', this.props.emailChanged(text));
    }

    onPasswordChange(text) {
        this.props.passwordChange(text);
        console.log('password change: ', this.props.passwordChange(text));
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.userLogin({ email, password });
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.textStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>Login/Sign Up</Button>
        );
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='email'
                        placeholder='your email'
                        onChangeText={this.onChangeEmail.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='password'
                        placeholder='and password'
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 25
    }
});

const mapToStateProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapToStateProps, { emailChanged, passwordChange, userLogin })(LoginForm);
