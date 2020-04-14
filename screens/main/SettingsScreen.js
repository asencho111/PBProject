import React, { useState } from 'react';
import { Dimensions, View, ScrollView, Alert, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import { Auth } from 'aws-amplify';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default function SettingsScreen(){

  const [password,setPassword] = useState("")
  const [newPassword, setNewPass] = useState("")
  const [confirmPassword, setConfirm] = useState("")


  const changePassword = async () => {
    if (newPassword==confirmPassword){
      try{
        const user = await Auth.currentAuthenticatedUser()
        await Auth.changePassword(user,password,newPassword );
        navigation.goBack()
      }catch(e){Alert.alert(e.message)}
    }else Alert.alert("Error", "Passwords do not match")
  }

  return (
      <ScrollView style={styles.container}>
            <View style={styles.itemContainer}>
              <TextInput style = {styles.bodyText} onChange={txt => setPassword(txt)}>Enter your password</TextInput>
            </View>
            <View style={styles.itemContainer}>
              <TextInput style = {styles.bodyText} onChange={txt => setNewPass(txt)}>Set a new password</TextInput>
            </View>
            <View style={styles.itemContainer}>
              <TextInput style = {styles.bodyText} onChange={txt => setConfirm(txt)}>confirm your new password</TextInput>
            </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.buttonLeft} onPress={async () => {await changePassword()}}>
              <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.buttonRight} onPress = {() => {Auth.signOut().then(navigation.navigate("Log-in Screen"))}}>
              <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
  );
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
        flexDirection: 'row',
        height: WIDTH / 8,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    formLeft: {
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    formRight: {
      justifyContent: 'center',
      paddingRight: HEIGHT / 40,
    },
    buttonLeft: {
        marginRight: WIDTH / 1.8,
        marginLeft: WIDTH / 100,
        marginTop: 10,
        padding: 20,
        backgroundColor: '#660033',
    },
    buttonRight: {
      marginRight: WIDTH / 100,
      marginLeft: WIDTH / 1.8,
      marginTop: 10,
      padding: 20,
      backgroundColor: '#660033',
}
      ,
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    headingText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: HEIGHT / 40,
    },
    bodyText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'left',
        marginLeft: HEIGHT / 40,
    }
});
