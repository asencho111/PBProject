import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useState } from 'react'
import LoginUI from '../screens/login/LoginUI';
import RegisterUI from '../screens/login/RegisterUI'
import ConfirmCodeScreen from '../screens/login/ConfirmCodeScreen'

// import ResetPasswordScreen from '../screens/login/ResetPasswordScreen'




const appContainer = function(){

  const AuthStack = createStackNavigator()
  
  const [loggedUser, setLoggedUser] = useState({})
  const contextValue = {loggedUser, setLoggedUser}
  const LoggedUserContext = React.createContext({
    loggedUser: {},
    setLoggedUser: () => {}
  })


  function checkSignIn(){
    const {currentUser, setCurrentUser} = useContext(LoggedUserContext)
    console.log(currentUser)
    if (currentUser == undefined) return true
    return false 
  }
  return (
    <LoggedUserContext.Provider value = {contextValue}>
      <NavigationContainer>
        <AuthStack.Navigator >
          {checkSignIn() ? (
            <>
            <AuthStack.Screen name = 'Log-in screen' component = {LoginUI}/>
            <AuthStack.Screen name = 'Confirm Code screen' component = {ConfirmCodeScreen}/>
            </>
            
          ) : (
            <>
            <AuthStack.Screen name = 'Register screen' component = {RegisterUI}/>
            </>
          )}
        </AuthStack.Navigator>
      </NavigationContainer>
    </LoggedUserContext.Provider>
    
  )}

export default appContainer;