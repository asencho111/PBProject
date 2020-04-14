import React from "react"
import { Router } from "@reach/router"
import Amplify from 'aws-amplify'
import awsconfig from '../aws-exports'
import AWSAppSyncClient, {AUTH_TYPE} from 'aws-appsync'
import {ApolloProvider} from 'react-apollo'
import {ApolloProvider as ApolloHooksProvider} from '@apollo/react-hooks'
import {Rehydrated} from 'aws-appsync-react'

import LoginPage from '../auth/login'
import RegPage from '../auth/register'
import ResetPasswordPage from '../auth/resetpass'
import HomePage from '../main/homePage'
import SettingsPage from '../main/settings'
import VoteCreationPage from '../main/createVoteForm'
import EditVoteSession from '../main/editVoteSession'
import PrivateRoute from '../services/privateRoute'


Amplify.configure(awsconfig)

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: awsconfig.aws_appsync_apiKey,
  },
  disableOffline: true
});

const withClient = () => (
  <ApolloProvider client = {client}>
    <ApolloHooksProvider client = {client}>
      <Rehydrated>
        <Router basepath = "/app">
          <LoginPage path = "/"/>
          <RegPage path = '/register'/>
          <ResetPasswordPage path = '/resetPassword'/>
          <PrivateRoute path = "/main" component = {HomePage}/>
          <PrivateRoute path = "/main/settings" component = {SettingsPage}/>
          <PrivateRoute path = "/main/createVoteForm" component = {VoteCreationPage}/>
          <PrivateRoute path = "/main/editVoteSession" component = {EditVoteSession}/>
        </Router>
      </Rehydrated>
    </ApolloHooksProvider>
  </ApolloProvider>
)
export default withClient
