import React from "react"
import { Router } from "@reach/router"
import {Amplify} from 'aws-amplify'

import LoginPage from '../components/login'
import SecondPage from '../components/page-2'
import PrivateRoute from '../components/privateRoute'
import RegPage from '../components/register'
import ResetPasswordPage from '../components/resetpass'

Amplify.configure({
  Auth: {

    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'eu-west-2:5dd2e361-c7d3-4f9f-870b-af525fd5f2da',
    
    // REQUIRED - Amazon Cognito Region
    region: 'eu-west-2',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'eu-west-2_ykRxNNZ0h',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '198irnce62kcu0vgnl1h0tbtg7',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_SRP_AUTH',

     // OPTIONAL - Hosted UI configuration
    // oauth: {
    //     domain: 'your_cognito_domain',
    //     scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    //     redirectSignIn: 'http://localhost:3000/',
    //     redirectSignOut: 'http://localhost:3000/',
    //     responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
    // }
  }
})



function App(){
  return (
      <Router basepath = "/app">
        <LoginPage path = "/"/>
        <RegPage path = '/register'/>
        <ResetPasswordPage path = '/resetPassword'/>
        <PrivateRoute path = "/page-2" component = {SecondPage}/>
      </Router>
  )
}
export default App
