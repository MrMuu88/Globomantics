import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfim] = useState('');

    const cacelRegister = () => {
        Alert.alert('Registration cancelled');
        navigation.navigate('Home');
    };

    const registerAccount = () => {
        if (!userName) {
            Alert.alert('please enter a username');
        }
        else if (!password || password !== passwordConfirm) {
            Alert.alert('please enter a valid password');
        }
        else {
            AsyncStorage.getItem(userName, (err, result) => {
                if (result !== null) {
                    Alert.alert(`${userName} already exists`);
                }
                else {
                    AsyncStorage.setItem(userName, password, (err, result) => {
                        navigation.navigate('Home');
                    });
                }
            });
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading} >User Name</Text>
            <TextInput style={styles.inputs} onChangeText={setUserName} value={userName} />
            <Text style={styles.labels}>Enter a Username</Text>

            <Text style={styles.heading} >Password</Text>
            <TextInput style={styles.inputs} onChangeText={setPassword} value={password} secureTextEntry={true} />
            <Text style={styles.labels}>Enter a password</Text>

            <Text style={styles.heading} >Password again</Text>
            <TextInput style={styles.inputs} onChangeText={setPasswordConfim} value={passwordConfirm} secureTextEntry={true} />
            <Text style={styles.labels}>repeat the password again</Text>

            <TouchableHighlight onPress={registerAccount} underlayColor='#000000'>
                <Text style={styles.buttons}>Register</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={cacelRegister} underlayColor='#000000'>
                <Text style={styles.buttons}>cancel</Text>
            </TouchableHighlight>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { alignItems: 'center', paddingBottom: '45%', paddingTop: '5%' },
    heading: { fontSize: 20, fontStyle: 'bold', color: '#000000' },
    inputs: { width: '80%', marginTop: 12, borderWidth: 1, height: 45, fontSize: 16, color: '#000000' },
    buttons: { padding: 15, margin: 5, fontSize: 16, width: 150, height: 50, textAlign: 'center', backgroundColor: '#000000' },
    labels: { paddingBottom: 10, fontSize: 16, fontWeight: 'bold', color: '#000000' }
});

export default RegisterScreen;
