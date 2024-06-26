import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import{bottomTb}
import { useFocusEffect } from "@react-navigation/native";
import * as React from "react";
import Home from "./Home";
import Settings from "./Settings";
import Card from "./Cards Screen";
import Stats from "./Statistics";
import { Image } from "react-native";
import { ThemeContext } from "./ThemeContext";
// import {}



const Tab = createBottomTabNavigator();

export default function Tabs(){
    const {theme} = React.useContext(ThemeContext)
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                headerShown:  route.name==='Home'? false : true,
                headerTitleAlign: 'center',
                headerTitleStyle: {color: theme? '#fff': '#000'},
                headerStyle:{ backgroundColor: theme ? '#030030' : '#fff' },
            
                tabBarIcon: ({focused, color, size})=> {
                    let iconName;
                    if (route.name ==='Home'){
                        iconName = focused ? require("./assets/home.png"): require('./assets/home.png') 
                    } else if(route.name ==='Settings'){
                        iconName = focused ? require("./assets/settings.png") : require('./assets/settings.png')
                    }else if(route.name ==='My Cards'){
                        iconName = focused ? require("./assets/credit-card.png") : require('./assets/credit-card.png')
                    }else if(route.name ==='Statistics'){
                        iconName = focused ? require("./assets/pie-graph.png") : require('./assets/pie-graph.png')
                    }
                    
                    return<Image source= {iconName} style={{width: size, height: size, tintColor: color}}/>
                },
                tabBarActiveTintColor: '#0062FF',
                tabBarInactiveTintColor: theme? '#fff': '#000',
                tabBarStyle:{
                    
                    borderWidth: 0,
                    // borderT
                    borderColor: theme ? '#030030' : '#fff',
                    backgroundColor: theme ? '#030030' : '#fff',
                    height: 70, // Increase height of the tab bar
                    paddingBottom: 10,
                    

                },
                tabBarIconStyle: {
                    size: 60, 
                },
                tabBarLabelStyle: {
                    fontSize: 14, 
                }
                
            })}
        >
            <Tab.Screen name= "Home" component={Home}/>
            <Tab.Screen name= "My Cards" component= {Card}/>
            <Tab.Screen name="Statistics" component={Stats}/>
            <Tab.Screen name= "Settings" component={Settings} />

        </Tab.Navigator>
    )

}