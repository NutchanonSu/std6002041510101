// import library
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

// write component
class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind()
    }
    onChangeEmail(e) {
        console.log('onChangeEmail', e)
        this.setState({
            email: e.target
        })
    }
    render () {
        return (
            <View>
                <TextInput 
                    style={{ height: 40, fontWeight: 'bold', fontSize: 18 }}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={this.onChangeEmail} 
                />
                <TextInput 
                    secureTextEntry
                    style={{ height: 40, fontWeight: 'bold', fontSize: 18 }}
                    placeholder="Password"
                    value={this.state.password}
                />
                <Button 
                    title="Login"
                />
            </View>
        );
    }
}

//export
export default Login;