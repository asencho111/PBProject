import {CognitoUser} from 'amazon-cognito-identity-js'

export const isUserLogged = (user) => {
  try{
    user instanceof CognitoUser 
      ? window.localStorage.setItem('isLoggedIn', true)
      : window.localStorage.setItem('isLoggedIn', false)
  }catch(err){alert(err.message)}
}