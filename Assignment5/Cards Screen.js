import React, {useContext} from "react";
import { View, StyleSheet, Text } from "react-native";
import {ThemeContext} from "./ThemeContext";

export default function Card (){
    const {theme} = useContext(ThemeContext)
    return(
        <View style={styles.container}>
            <Text style={[styles.text, {color: theme? '#fff': '#000'}]}>My Cards Screen</Text>
        </View>
    )



    
}

const styles= StyleSheet.create({
    container:{
        alignContent: 'center',
        justifyContent: 'center'
    }
})