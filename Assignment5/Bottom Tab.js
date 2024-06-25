import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import{bottomTb}
import { useFocusEffect } from "@react-navigation/native";
import * as React from "react";
import Home from "./Home";
import Settings from "./Settings";
import { Image } from "react-native";
// import {}



const Tab = createBottomTabNavigator();

export default function Tabs(){
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                headerShown: route.name==='Home'? false : true,
                tabBarIcon: ({focused, color, size})=> {
                    let iconName;
                    if (route.name ==='Home'){
                        iconName = focused ? require("./assets/home.png"): require('./assets/home.png') 
                    } else if(route.name ==='Settings'){
                        iconName = focused ? require("./assets/settings.png") : require('./assets/settings.png')
                    }
                    return<Image source= {iconName} style={{width: size, height: size, tintColor: color}}/>
                },
                tabBarActiveTintColor: '#0062FF',
                tabBarInactiveTintColor: '#000',
                tabBarStyle:{
                    borderTopColor: '#000',
                    borderWidth: 0.5,

                }
                
            })}
        >
            <Tab.Screen name= "Home" component={Home}/>
            <Tab.Screen name= "Settings" component={Settings} />

        </Tab.Navigator>
    )

}