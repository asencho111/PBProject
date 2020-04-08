import React from 'react';
import AppNavigator from './navigation/AppNavigator';

import Amplify from '@aws-amplify/core'
import config from './aws-exports'

Amplify.configure(config)

export default function App() {
  return (
    <AppNavigator/>
  )
}