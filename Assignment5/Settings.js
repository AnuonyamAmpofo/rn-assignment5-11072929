import { DarkTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { ThemeContext } from './ThemeContext';

export default function Settings() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme ? "#030030" : "#fff" } ]}>
            <TouchableOpacity style={styles.option}>
                <Text style={[styles.optText, {color: theme ? "#fff" : "#000" }]}>Languages</Text>
                <Image source={require('./assets/next.png')} style={[styles.next, {tintColor: theme ? "#fff" : "#000"}]}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={[styles.optText, {color: theme ? "#fff" : "#000" }]}>My Profile</Text>
                <Image source={require('./assets/next.png')} style={[styles.next, {tintColor: theme ? "#fff" : "#000"}]}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={[styles.optText, {color: theme ? "#fff" : "#000" }]}>Contact Us</Text>
                <Image source={require('./assets/next.png')} style={[styles.next, {tintColor: theme ? "#fff" : "#000"}]}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={[styles.optText, {color: theme ? "#fff" : "#000" }]}>Privacy Policy</Text>
                <Image source={require('./assets/next.png')} style={[styles.next, {tintColor: theme ? "#fff" : "#000"}]}/>
            </TouchableOpacity>
            <View style={styles.themeSwitch}>
                <Text style={[styles.optTheme, {color: theme ? "#fff" : "#000" }]}>Theme</Text>
                <Switch onValueChange={toggleTheme} value={theme}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: 25,
    },
    option: {
        borderBottomColor: "#f2f2f3",
        borderBottomWidth: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optText: {
        fontSize: 20,
        paddingVertical: 17,
    },
    next: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        alignSelf: 'center'
    },
    themeSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 30,
    },
    optTheme: {
        fontSize: 20,
    }
});
