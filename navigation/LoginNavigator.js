import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LoginUI from '../screens/login/LoginUI';
import RegisterUI from '../screens/login/RegisterUI'

const AuthStack = createStackNavigator()

export default class LoginNavigator extends React.Component {

    state = {
        username: '',
        password: '',
        confirm_password: '',
        attributes : {
          name:'',
          middle_name:'',
          family_name:'',
          email: '',
          birthdate:'',
          address:'',
          phone_number:'',
        },
        validationData: [],
        user: {},
    };

    render(){
        return (
            <AuthStack.Navigator initialRouteName = 'Register screen'>
                <AuthStack.Screen name = 'Log-in screen' component = {LoginUI} />
                <AuthStack.Screen name = 'Register screen' component = {RegisterUI}/>
            </AuthStack.Navigator>
        )
    }
}