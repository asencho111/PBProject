import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useEffect } from 'react'
import LoginUI from '../screens/login/LoginUI';
import RegisterUI from '../screens/login/RegisterUI'
import ConfirmCodeScreen from '../screens/login/ConfirmCodeScreen'
import HomeScreen from '../screens/main/HomeScreen';
import ResetPasswordScreen from '../screens/login/ResetPasswordScreen'
import ResetPasswordConfirm from '../screens/login/ResetPasswordConfirm'
import SettingsScreen from '../screens/main/SettingsScreen';
import VoteInfoScreen from '../screens/main/VoteInfoScreen'

const appContainer = function(){
  let loggedIn = false
  const AuthStack = createStackNavigator()
  
  return (
    <NavigationContainer>
      <AuthStack.Navigator >
        {loggedIn ? (
          <>
          <AuthStack.Screen name = 'Log-in screen' component = {LoginUI}/>
          <AuthStack.Screen name = 'Register screen' component = {RegisterUI}/>
          <AuthStack.Screen name = 'Confirm Code screen' component = {ConfirmCodeScreen}/>
          <AuthStack.Screen name = 'Reset Password screen' component = {ResetPasswordScreen}/>
          <AuthStack.Screen name = 'Reset Password confirm' component = {ResetPasswordConfirm}/>
          </>
          
        ) : (
          <>
          <AuthStack.Screen name = 'Home screen' component = {HomeScreen}/>
          <AuthStack.Screen name = "Settings screen" component = {SettingsScreen}/>
          <AuthStack.Screen name = "Voting Session Information screen" component = {VoteInfoScreen}/>
          </>
        )}
      </AuthStack.Navigator>
    </NavigationContainer>    
  )}

export default appContainer;