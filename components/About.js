import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from axios

class About extends Component {
    constructor() {
    super();ß
    this.state ={
            name: '',
            email: ''
        }
    }

    comoponentDidModut() {
        const url = 'http://128.199.240.120:9999/api/auth/me';
        const config = {
            headers: {
                accept: '*/*',
                Authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1Y2E1YWZhNzE5OGUwMDA4NDcyZGRlMmYiLCJpYXQiOjE1NTQ5NjY0MjJ9.eooiaIV0RuOtBGStAMYpy_wGdf9H2HAoK_7E6S1CGD0 '
            }
        }

        axios.get(url, config)
            .then(response => {
                console.log(response.data.data);
                this.setState({
                    email:response.data.data.email,
                    name: response.data.data.name
                })
            })
            .catch(error => {
                console.log('error'.error);
            })
    }
    render() {
        return (
            <View>
                <Text style={styles.text}>Name: {this.statename}</Text>
                <Text style={styles.text}>Email: {this.state.email}</Text>
            </View>
        );

    }
}
const styles = {
    text: {
        fontSize: 30
    }
}

export default About;