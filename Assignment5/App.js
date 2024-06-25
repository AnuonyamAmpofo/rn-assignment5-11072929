import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import * as React from'react';
import Tabs from './Bottom Tab';


export default function App() {
  return (
    <NavigationContainer>

    
    
    <View style={styles.container}>
      {/* <Home/> */}
      <StatusBar style="auto" />
    </View>
    <Tabs/>
     </NavigationContainer>
  );
    
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
