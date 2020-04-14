import React, {useState, useEffect} from 'react';
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

export default function LoginUI({navigation}){

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    async function logOut(){
      await Auth.signOut()
    }
    logOut()
  },[])
  async function  signIn(){
    try {
        const user = await Auth.signIn(username, password);
        if (user.challengeName == 'SMS_MFA') {
          navigation.navigate('Confirm Code screen', {currentUser: user, previousScreen : 'Log-in Screen'})
        }
        // if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        //   const {requiredAttributes} = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
        //   // You need to get the new password and required attributes from the UI inputs
        //   // and then trigger the following function with a button click
        //   // For example, the email and phone_number are required attributes
        //   const {username, email, phone_number} = getInfoFromUserInput();
        //   const loggedUser = await Auth.completeNewPassword(
        //     user,              // the Cognito User Object
        //     newPassword,       // the new password
        //     // OPTIONAL, the required attributes
        //     {
        //         email,
        //         phone_number,
        //     }
        //   );
        // }
    } catch (err) {
        Alert.alert(err.message)
    }   
  }
  

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View><Text style={styles.header}>MY BUDDY APP{"\n"}</Text></View>
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'#2F9589'}
          autoCapitalize='none'
          spellCheck={false}
          underlineColorAndroid='transparent'
          onChangeText={(text) => {
            setUsername(text)
          }}
          />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'#2F9589'}
          underlineColorAndroid='transparent'
          onChangeText={(text) => setPassword(text)}
          returnKeyType='go'
        />
        <View>
          <Text style={styles.forgotPasswordText} onPress={() => navigation.navigate('Reset Password screen')}> Forgot Password</Text>
        </View>
        <Text>{"\n"}</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={() => signIn()}>
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
          
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Register screen')}>
          <Text style={styles.textBtn}>Go to Registration</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );  
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
  loginBtn: {
    width: (0.8 * WIDTH),
    height: 40,
    borderRadius: 25,
    backgroundColor: '#DEDEDD',
    justifyContent: 'center',
    marginTop: 25
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