import {CognitoUser} from 'amazon-cognito-identity-js'

export const isUserLogged = (user) => {
  try{
    user instanceof CognitoUser /* TODO better check for logged in */
      ? window.localStorage.setItem('isLoggedIn', true)
      : window.localStorage.setItem('isLoggedIn', false)
  }catch(err){alert(err.message)}
}