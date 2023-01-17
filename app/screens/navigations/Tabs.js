import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePageScreen from '../HomePageScreen';
import MenuScreen from '../MenuScreen';
import Login from '../LoginRegister/Login';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
          screenOptions={ 
          ({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') 
            {
              iconName = focused
                ? 'home'
                : 'home';
            }
            else if (route.name === 'Login') 
            {
              iconName = focused ? 'user' : 'user';
            }
            else if (route.name === 'Menu') 
            {
              iconName = focused ? 'bars' : 'bars';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00d4ff',
          tabBarInactiveTintColor: 'black'
        })}
        >
            <Tab.Screen name='Home' component={HomePageScreen}/>
            <Tab.Screen name='Login' component={Login}/>
            <Tab.Screen name='Menu' component={MenuScreen}/>
        </Tab.Navigator>
    );
}

export default Tabs;