import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Auth} from "aws-amplify"
  
  export default function HomeScreen({navigation}) {
    return(
      <View>
        <Text>Home</Text>
        <TouchableOpacity onPress={async () => Alert.alert((await Auth.currentSession()).getAccessToken)}><Text>Get user</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings screen")}><Text>go settings</Text></TouchableOpacity>
      </View>
    )
  }