import React, {useState} from 'react';
import { Dimensions, View, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {Auth} from 'aws-amplify'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

  export default function ResetPasswordScreen({navigation}){
    
    const [username, setUsername] = useState('')

    const resetPassword = async () => {
      const a = await Auth.forgotPassword(username)
      navigation.navigate('Reset Password confirm', {username})
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.label}>Enter your username</Text>
                <TextInput 
                    style={styles.passwordInput}
                    onChangeText={(text) => setUsername(text)}
                    clearButtonMode={'always'}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress = {async () => {resetPassword()}}>
                <Text style={styles.buttonText}>Reset password</Text>
            </TouchableOpacity>
        </ScrollView>
        )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: HEIGHT / 40,
        paddingBottom: HEIGHT / 40,
        backgroundColor: '#EEE',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: WIDTH / 20,
    },
    button: {
        marginRight: WIDTH / 10,
        marginLeft: WIDTH / 10,
        marginTop: 10,
        padding: 20,
        backgroundColor: '#005EB8',
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    label: {
        color: 'gray',
        textAlign: 'left',
        marginLeft: HEIGHT / 40,
        marginBottom: WIDTH / 80,
    },
    passwordInput: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 18,
        textAlign: 'left',
        height: WIDTH / 10,
        width: WIDTH,
        paddingLeft: HEIGHT / 40,
        paddingRight: HEIGHT / 40,
    }
});