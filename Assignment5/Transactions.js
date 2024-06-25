import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const Transaction =({transactions})=>{
    const renderTransaction=({item})=> (
        <View style={styles.card}>
            <View style={styles.content}>
                <View style={styles.info}>
                    <View style={styles.ImgCont}>
                        <Image source={item.Logo} style={styles.logo}/>
                    </View>
                    <View style={styles.names}>
                        <Text style={styles.comName}>{item.Name}</Text>
                        <Text style={styles.comType}>{item.Type}</Text>
                    </View>

                </View>
                <Text style={[styles.amount, {color: item.Amount>0? '#0062ff': '#000'}]}>
                    {item.Amount <0 ? "-$": "$"}{item.Amount <0 ? -item.Amount : item.Amount}
                    </Text>
            </View>
            
        </View>
    );

    return(
        <View style={styles.container}>
            <FlatList
            data={transactions}
            renderItem={renderTransaction}
            keyExtractor={item =>item.id}
            showsVerticalScrollIndicator={false}


            />
        </View>
    )
};






const styles= StyleSheet.create({
    card:{
        // flexDirection: 'row',
        justifyContent: 'center',
        height: 74,
        marginVertical: 10,

    },
    content:{

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    

    logo:{
        width: 25,
        height: 25,
        resizeMode:'contain',
        // alignContent:'center',
        
    },
    ImgCont:{
        width: 50,
        height: 50,
        backgroundColor: '#f1f1f4',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 50,
    },
    info: {
        flexDirection: 'row',
        // justifyContent: 'center'
        // alignSelf: 'center'


    },
    names:{
        paddingLeft:15,
    },
    comType:{
        color: '#808080',
    },
    comName: {
        fontSize: 20,
        fontWeight: '500',
    },
    amount: {
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
    },
}); 

export default Transaction;