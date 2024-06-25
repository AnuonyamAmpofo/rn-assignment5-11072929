import React from "react";
import {View, Text, StyleSheet, ScrollView, Image} from "react-native";
import Transaction from "./Transactions";


const transaction= [
    {
        id: 1,
        Logo: require('./assets/Apple.png'),
        Name: "Apple Store",
        Type: "Entertainment",
        Amount: -5.99,

    },
    {
        id :2,
        Logo: require('./assets/Spotify.png'),
        Name:'Spotify',
        Type: 'Music',
        Amount: -12.99,
    }
]
export default function Home(){

    



    return(
        <ScrollView style={styles.container}>
        
            <View style= {styles.Welcome}>
                <View style={styles.weleft}>

                <Image source={require("./assets/profile.png")} style= {styles.profile}/>
                <View style={styles.info}>
                <Text style={styles.welcText}>Welcome back,</Text>
                <Text style={styles.Name}>Eric Atsu</Text>
                </View>
                </View>
                <View style={styles.searchCont}>
                    <Image source={require("./assets/search.png")} style={styles.search}/>
                </View>
            </View>

            <Image source={require("./assets/Card.png")} style={styles.card}/>

            <View style={styles.actions}>
                <View style={styles.sentCont}>
                    <View style={styles.actionImg}>
                    <Image source={require("./assets/arrow-up.png")} style= {styles.actionpic}/>
                    </View>
                    <Text style={styles.actionWord}>Sent</Text>
                </View>
                <View style={styles.sentCont}>
                    <View style={styles.actionImg}>
                    <Image source={require("./assets/arrow-down.png")} style= {styles.actionpic}/>
                    </View>
                    <Text style={styles.actionWord}>Receive</Text>
                </View>
                <View style={styles.sentCont}>
                    <View style={styles.actionImg}>
                    <Image source={require("./assets/coin.png")} style= {styles.actionpic}/>
                    </View>
                    <Text style={styles.actionWord}>Loan</Text>
                </View>
                <View style={styles.sentCont}>
                    <View style={styles.actionImg}>
                    <Image source={require("./assets/upload.png")} style= {styles.actionpic}/>
                    </View>
                    <Text style={styles.actionWord}>Topup</Text>
                </View>
            </View>
            <View style={styles.headingContain}>
            <Text style={styles.header}>Transaction</Text>
            <Text style={styles.see}>Sell All</Text>
            </View>
            {/* <Text>Home Screen</Text< */}
            <Transaction transactions={transaction}/>

        
        
        </ScrollView> 

    );
}

const styles= StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        backgroundColor: '#fff',
        // alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
        flexDirection: 'column',
        
    },
    Welcome:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 50,

    },
    info:{
        // alignSelf: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 15,
    },

    searchCont:{
        backgroundColor:"#f4f6fc",
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        borderRadius: 50,

        
    },
    search:{
        alignContent: 'center',
        justifyContent: 'center'
    },
    
    weleft:{
        // justifyContent: ''
        flexDirection: 'row',
    },
    welcText:{
        color:"#808080",
    },
    Name:{
        fontSize: 20,
        fontWeight: '600',
    },
    card:{
        // alignContent: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
        // width: '150%',
        width: '100%',
        resizeMode: 'stretch',
        // height: 500,
    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignSelf: 'center',
        paddingVertical: 40,
    },
    actionWord:{
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
    },
    actionpic:{
        // resizeMode: 'contain',
        width: 30,
        height: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        // alignContent
        // tintColor: 'black',

    },
    actionImg: {
        backgroundColor: '#f1f1f4',
        height: 58, 
        width: 58,
        borderRadius: 40,
        justifyContent: 'center',
        alignContent: 'center'
    },
    headingContain:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header:{
        fontWeight: '400',
        fontSize: 25
    },
    see:{
        color: "#0062ff",
        fontSize: 17,
    }


})