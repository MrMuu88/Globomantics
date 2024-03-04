import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Shared/StylesCollection';

const LoginScreen = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const cancelLogin = () => {
        Alert.alert("Login canceled");
        navigation.navigate('Home');
    };

    const executeLogin = () => {
        AsyncStorage.getItem(userName, (err, result) => {
            if (result !== password) {
                Alert.alert("incorrect username or password");
                return;
            }
            Alert.alert("Succesfully Logged in");
            navigation.navigate('Home');
        });

    };

    const createAccount = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>User Name</Text>
            <TextInput style={styles.inputs} onChangeText={setUserName} value={userName} />
            <Text style={styles.heading}>Password</Text>
            <TextInput style={styles.inputs} onChangeText={setPassword} value={password} secureTextEntry={true} />

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>

                <TouchableHighlight onPress={executeLogin} underlayColor='#000000'>
                    <Text style={styles.buttons}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={createAccount} underlayColor='#000000'>
                    <Text style={styles.buttons}>Register account</Text>
                </TouchableHighlight>
            </View>

            <TouchableHighlight onPress={cancelLogin} underlayColor='#000000'>
                <Text style={styles.buttons}>Cancel</Text>
            </TouchableHighlight>

        </View>
    );
};



export default LoginScreen;