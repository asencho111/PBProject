import React from 'react';
import { Dimensions, View, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, Alert} from 'react-native';

import Header from '../components/Header';
import firebase from 'firebase';


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default class ChangePasswordScreen extends React.Component {
    static navigationOptions = {
        headerTitle: (
            <Header/>
        ),
        headerStyle: {
            backgroundColor: '#005eb8'
        },
        headerTintColor: 'white',
    };

    constructor() {
        super();
        this.state = {
            email: '',
        }
    }

    _onResetPassword = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email).then(() => {
            Alert.alert('Success','A link to reset your password has been sent to your e-mail.')
            this.props.navigation.navigate('LoginUI')
          }).catch(function(error) {
            Alert.alert(error.code,error.message);
          });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.itemContainer}>
                    <Text style={styles.label}>Enter your e-mail</Text>
                    <TextInput 
                        style={styles.passwordInput}
                        onChangeText={(text) => this.state.email = text}
                        clearButtonMode={'always'}
                    />
                </View>
                
                <TouchableOpacity style={styles.button} onPress = {this._onResetPassword} >
                    <Text style={styles.buttonText}>Reset password</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
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