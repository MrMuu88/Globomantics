import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import styles from "../Shared/StylesCollection";

const GloboHeader = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState('');
    const navigation = useNavigation();

    const toggleUser = () => {
        if (isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                setLoggedIn(false);
                setLoggedInUser('');
            });
        } else {
            navigation.navigate('Login');
        }
    };

    useEffect(() => {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result === 'none') {
                console.log('NONE is lgged in');
            }
            else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('user is set to none')
                });
            }
            else {
                setLoggedIn(true);
                setLoggedInUser(result);
            }
        });
    });

    let display = isLoggedIn ? loggedInUser : "Tap to Login";

    return (
        <View style={localStyles.headerStyle}>
            <Image style={localStyles.imageStyle} source={require('../img/hacker.png')} />
            <Text style={localStyles.headText} onPress={toggleUser}>{display}</Text>
        </View>
    );
};

const localStyles = StyleSheet.create({
    headerStyle: { backgroundColor: '#35605a', flexDirection: 'row' },
    imageStyle: { alignSelf: 'flex-start', width: 5, height: 100, flex: 1, resizeMode: 'contain' },
    headText: { textAlign: 'right', textAlignVertical: 'center', color: '#ffffff', flex: 1, paddingRight: 15 }
});

export default GloboHeader;