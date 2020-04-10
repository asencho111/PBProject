import React from "react"
import { Router } from "@reach/router"
import {Amplify} from 'aws-amplify'
import config from '../awsconfig'

import LoginPage from '../auth/login'
import RegPage from '../auth/register'
import ResetPasswordPage from '../auth/resetpass'
import HomePage from '../main/homePage'
import SettingsPage from '../main/settings'
import VoteCreationPage from '../main/createVoteForm'
import PrivateRoute from '../services/privateRoute'

Amplify.configure(config)


function App(){
  return (
    <Router basepath = "/app">
      <LoginPage path = "/"/>
      <RegPage path = '/register'/>
      <ResetPasswordPage path = '/resetPassword'/>
      <PrivateRoute path = "/main" component = {HomePage}/>
      <PrivateRoute path = "/main/settings" component = {SettingsPage}/>
      <PrivateRoute path = "/main/createVoteForm" component = {VoteCreationPage}/>
    </Router>
  )
}
export default App
