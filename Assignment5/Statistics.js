import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Stats (){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Statistics Screen</Text>
        </View>
    )



    
}

const styles= StyleSheet.create({
    container:{
        alignContent: 'center',
        justifyContent: 'center'
    }
})