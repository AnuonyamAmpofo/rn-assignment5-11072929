import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Transaction from "./Transactions";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
// import { ThemeProvider } from "@react-navigation/native";

const transactions = [
  {
    id: 1,
    Logo: require('./assets/Apple.png'),
    Name: "Apple Store",
    Type: "Entertainment",
    Amount: -5.99,
  },
  {
    id: 2,
    Logo: require('./assets/Spotify.png') ,
    Name: 'Spotify',
    Type: 'Music',
    Amount: -12.99,
  },
  {
    id: 3,
    Logo: require('./assets/down.png'),
    Name: 'Money Transfer',
    Type: 'Transaction',
    Amount: 300,
  },
  {
    id: 4,
    Logo: require('./assets/shopping-cart.png'),
    Name: 'Grocery',
    Type: 'Shopping',
    Amount: 200,
  }
];

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    // <ThemeProvider>
    <ScrollView style={[styles.container, { backgroundColor: theme ? '#030030' : '#fff' }]}>
      <View style={styles.Welcome}>
        <View style={styles.weleft}>
          <Image source={require("./assets/profile.png")} style={styles.profile} />
          <View style={styles.info}>
            <Text style={styles.welcText}>Welcome back,</Text>
            <Text style={[styles.Name,{color: theme? '#fff': '#000'}]}>Eric Atsu</Text>
          </View>
        </View>
        <View style={[styles.searchCont,{backgroundColor: theme ?'#1d1c39':'#f1f1f4' }]}>
          <Image source={require("./assets/search.png")} style={[styles.search, {tintColor: theme ? '#fff' : '#000'}]} />
        </View>
      </View>

      <Image source={require("./assets/Card.png")} style={styles.card} />

      <View style={styles.actions}>
        <View style={styles.sentCont}>
          <View style={[styles.actionImg,{backgroundColor: theme ?'#1d1c39':'#f1f1f4' }]}>
            <Image source={require("./assets/arrow-up.png")} style={[styles.actionpic, {tintColor: theme ? '#fff' : '#000'}]} />
          </View>
            <Text style={[styles.actionWord,{color: theme? '#fff': '#000'}]}>Sent</Text>
        </View>
        <View style={styles.sentCont}>
          <View style={[styles.actionImg, {backgroundColor: theme ?'#1d1c39':'#f1f1f4' }]}>
            <Image source={require("./assets/arrow-down.png")} style={[styles.actionpic, {tintColor: theme ? '#fff' : '#000'}]} />
          </View>
          <Text style={[styles.actionWord, {color: theme? '#fff': '#000'}]}>Receive</Text>
        </View>
        <View style={styles.sentCont}>
          <View style={[styles.actionImg, {backgroundColor: theme ?'#1d1c39':'#f1f1f4' }]}>
            <Image source={require("./assets/coin.png")} style={[styles.actionpic, {tintColor: theme ? '#fff' : '#000'}, ]} />
          </View>
          <Text style={[styles.actionWord,{color: theme? '#fff': '#000'}]}>Loan</Text>
        </View>
        <View style={styles.sentCont}>
          <View style={[styles.actionImg,{backgroundColor: theme ?'#1d1c39':'#f1f1f4' }]}>
            <Image source={require("./assets/upload.png")} style={[styles.actionpic, {tintColor: theme ? '#fff' : '#000'}]} />
          </View>
          <Text style={[styles.actionWord,{color: theme? '#fff': '#000'}]}>Topup</Text>
        </View>
      </View>
      <View style={styles.headingContain}>
        <Text style={[styles.header,{color: theme? '#fff': '#000'}]}>Transaction</Text>
        <Text style={styles.see}>See All</Text>
      </View>
      <Transaction transactions={transactions} />
    </ScrollView>
    // </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: 'column',
  },
  Welcome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  info: {
    justifyContent: 'center',
    paddingLeft: 15,
  },
  searchCont: {
    backgroundColor: "#f4f6fc",
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    borderRadius: 50,
  },
  search: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  weleft: {
    flexDirection: 'row',
  },
  welcText: {
    color: "#808080",
  },
  Name: {
    fontSize: 20,
    fontWeight: '600',
  },
  card: {
    alignSelf: 'center',
    flex: 1,
    width: '100%',
    resizeMode: 'stretch',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  actionWord: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  actionpic: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  actionImg: {
    backgroundColor: '#f1f1f4',
    height: 58,
    width: 58,
    borderRadius: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
  headingContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontWeight: '400',
    fontSize: 25,
  },
  see: {
    color: "#0062ff",
    fontSize: 17,
  },
});
