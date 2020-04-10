import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useState } from 'react'
import LoginUI from '../screens/login/LoginUI';
import RegisterUI from '../screens/login/RegisterUI'
import ConfirmCodeScreen from '../screens/login/ConfirmCodeScreen'
import {Auth} from 'aws-amplify'
import { Alert } from 'react-native';
import HomeScreen from '../screens/main/HomeScreen';
// import ResetPasswordScreen from '../screens/login/ResetPasswordScreen'
import CurrentUserContext from './UserContext'

const appContainer = function(){

  const AuthStack = createStackNavigator()

  const [currentUser, setCurrentUser] = useState({})  
  const contextValue = {currentUser, setCurrentUser}



  return (
    <CurrentUserContext.Provider value = {contextValue}>
      <NavigationContainer>
        <AuthStack.Navigator >
          {false ? (
            <>
            <AuthStack.Screen name = 'Log-in screen' component = {LoginUI}/>
            <AuthStack.Screen name = 'Register screen' component = {RegisterUI}/>
            <AuthStack.Screen name = 'Confirm Code screen' component = {ConfirmCodeScreen}/>
            </>
            
          ) : (
            <>
            <AuthStack.Screen name = 'Home screen' component = {HomeScreen}/>
            </>
          )}
        </AuthStack.Navigator>
      </NavigationContainer>    
    </CurrentUserContext.Provider>
  )}

export default appContainer;