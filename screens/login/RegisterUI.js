import React, {setState, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { Auth } from 'aws-amplify';
import ConfirmSignInScreen from './ConfirmCodeScreen';

const { width: WIDTH } = Dimensions.get('window')

export default function RegisterUI({navigation}) {

  
  const [username, setUsername] =  useState('')
  const [password, setPassword] =  useState('')
  const [confirmPassword, setConfirmPassword] =  useState('')
  const [attributes, setAttributes] =  useState({})
  

  function verifyPassword(){
    if (password != confirmPassword) {
      Alert.alert('Error', 'Passwords do not match')
      return false
    }
    return true
  }

  async function register(){
    if (verifyPassword()) {
      console.log(attributes)
      try{
        const signUpResult = await Auth.signUp({
          username: username,
          password: password,
          attributes: attributes,
          validationData: []
        })
        console.log(signUpResult)
        if (signUpResult.userConfirmed == false){
          navigation.navigate('Confirm Code screen', {currentUsername: username, previousScreen : 'Register Screen'})
        }
      } catch (err){
        console.log(err.code + ' ' + err.message)
        Alert.alert (err.message)
      }
    }
  }
  
  return (
    <ScrollView style={styles.container}>
      {/* TITLE */}
      <View><Text style={styles.header}>MY BUDDY APP{"\n"}</Text></View>
        {/* USERNAME INPUT AREA */}
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'#2F9589'}
          underlineColorAndroid='transparent'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => setUsername(text)}
        />
        {/* PASSWORD INPUT AREA */}
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'#2F9589'}
          underlineColorAndroid='transparent'
          onChangeText={(text) => setPassword(text)}
        />
        {/* REPEAT PASSWORD INPUT AREA */}
        <TextInput
          style={styles.input}
          placeholder={'Repeat password'}
          secureTextEntry={true}
          placeholderTextColor={'#2F9589'}
          underlineColorAndroid='transparent'
          onChangeText={(text) => setConfirmPassword(text)}
          returnKeyType='go'
        />
        <TextInput
          style={styles.input}
          placeholder={'birthday'}
          placeholderTextColor={'#2F9589'}
          underlineColorAndroid='transparent'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => attributes['birthdate'] = text}
        />
        <TextInput
          style={styles.input}
          placeholder={'address'}
          placeholderTextColor={'#2F9589'}
          underlineColorAndroid='transparent'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => attributes['address'] = text}
        />
        <TextInput
          style={styles.input}
          placeholder={'first_name'}
          placeholderTextColor={'#2F9589'}
          underlineColorAndroid='transparent'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => attributes['name'] = text}
        />
        <TextInput
          style={styles.input}
          placeholder={'middle_name'}
          placeholderTextColor={'#2F9589'}
          underlineColorAndroid='transparent'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => attributes['middle_name'] = text}
        />
        <TextInput
          style={styles.input}
          placeholder={'last_name'}
          placeholderTextColor={'#2F9589'}
          underlineColorAndroid='transparent'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => attributes['family_name'] = text}
        />
        <TextInput
          style={styles.input}
          placeholder={'email'}
          placeholderTextColor={'#2F9589'}
          underlineColorAndroid='transparent'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => attributes['email'] = text}
        />
        <TextInput
          style={styles.input}
          placeholder={'phone'}
          placeholderTextColor={'#2F9589'}
          underlineColorAndroid='transparent'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => attributes['phone_number'] = text}
        />
          {/* REGISTER BUTTON */}
        <Text>{"\n"}</Text>
        <TouchableOpacity style={styles.loginBtn} onPress = {() => register()}>
          <Text style={styles.textBtn}>Register</Text>
        </TouchableOpacity>
    </ScrollView>
    
    );
  }

// STYLING FOR THE DIFFERENT COMPONENTS
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#2F9589',
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
  }
});