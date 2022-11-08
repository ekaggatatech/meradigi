import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePageScreen from '../HomePageScreen';
import ServicesScreen from '../ServicesScreen';
import MenuScreen from '../MenuScreen';
import { Image, View , Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Services') {
              iconName = focused ? 'handshake-o' : 'handshake-o';
            } else if (route.name === 'Menu'){
              iconName = focused ? 'bars' : 'bars';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00d4ff',
          tabBarInactiveTintColor: 'black',
        })}
        >
            <Tab.Screen name='Home' component={HomePageScreen}/>
            <Tab.Screen name='Services' component={ServicesScreen}/>
            <Tab.Screen name='Menu' component={MenuScreen}/>
        </Tab.Navigator>

    );
}


export default Tabs;