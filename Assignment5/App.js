import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import Tabs from './Bottom Tab'; // Assuming you have this component
import { ThemeProvider, ThemeContext } from './ThemeContext';

export default function App() {
    return (
        <ThemeProvider>
            <ThemedApp />
        </ThemeProvider>
    );
}

function ThemedApp() {
    const { theme } = useContext(ThemeContext);

    return (
        <NavigationContainer>
            <View style={[styles.container, { backgroundColor: theme ? '#030042' : '#fff' }]}>
                <StatusBar style={theme ? 'light' : 'dark'} />
                <Tabs />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
