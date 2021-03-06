import React, {useState} from 'react';
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
import {Auth} from 'aws-amplify'
const { width: WIDTH } = Dimensions.get('window')

export default function ConfirmCodeScreen({navigation, route}) {

  const [code, setCode] = useState('')
  const {previousScreen} = route.params
  const {currentUsername} = route.params

  function confirmPressed() {
    if (previousScreen == 'Log-in Screen') {
      confirmSignIn()
    } else if (previousScreen == 'Register screen'){
      confirmSignUp()
    }
  }

  async function confirmSignIn(){
    const {currentUser} = await Auth.currentUserInfo()
    try {
      const mfaType = currentUser.challengeName
      const user = await Auth.confirmSignIn(currentUser, code, mfaType)
      console.log(user)
    } catch(err) {
      Alert.alert(err.message)
    }
  }

  async function confirmSignUp(){
    try{
      await Auth.confirmSignUp(currentUsername, code)
      navigation.goBack()
      navigation.goBack()
    } catch(err) {
      Alert.alert(err.message)
    }
  }
  async function resendCode(){
    try {
      await Auth.resendSignUp(currentUsername)
      Alert.alert('', 'Code has been resent')
    } catch (err) {Alert.alert(err.message)}   
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <TextInput
        style={styles.input}
        placeholder={'Confirmation code'}
        secureTextEntry={true}
        placeholderTextColor={'#2F9589'}
        underlineColorAndroid='transparent'
        onChangeText={(text) => setCode(text)}
        returnKeyType='go'
      />
        <Text>{"\n"}</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={() => confirmPressed()}>
        <Text style={styles.textBtn}>Confirm</Text>
      </TouchableOpacity>
      {previousScreen == 'Register screen' 
      ?(<TouchableOpacity style={styles.loginBtn} onPress={() => resendCode()}>
          <Text style={styles.textBtn}>Resend Code </Text>
        </TouchableOpacity>)
      : null}
    </KeyboardAvoidingView>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
},
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
},
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: '#F1F2F2',
    marginHorizontal: 25,
    opacity: 0.8,
    marginTop: 20
},
  header: {
    color: '#2F9589',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 0,
    opacity: 0.8
  },
  eyeBtn: {
    position: 'absolute',
    top: 8,
    left: 35
  },
  loginBtn: {
    width: WIDTH - 100,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#DEDEDD',
    justifyContent: 'center',
    marginTop: 25
  },
  emergencyBtn: {
    width: WIDTH - 100,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#F47777',
    justifyContent: 'center',
    marginTop: 40
  },
  text: {
    color: '#2F9589',
    fontSize: 16,
    textAlign: 'center'
  },
  textBtn: {
    color: '#6E6A6A',
    fontSize: 16,
    textAlign: 'center'
  },
  forgotPasswordText: {
    color: '#2F9589',
    textDecorationLine:'underline',
    marginTop: 40
  }
});