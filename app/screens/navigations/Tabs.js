import React from 'react';
import Icon from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../HomePage';
import Login from '../LoginRegister/Login';
// import MenuScreen from '../MenuScreen';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Tabs = () => 
{
    return(
      <>
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
            /* else if (route.name === 'Menu') 
            {
              iconName = focused ? 'bars' : 'bars';
            } */
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FE0629',
          tabBarInactiveTintColor: '#060606'
          })
          }
        >
          <Tab.Screen name='Home' component={HomePage}/>
          <Tab.Screen name='Login' component={Login} />
          {/* <Tab.Screen name='Menu' component={MenuScreen} /> */}
        </Tab.Navigator>
      </>
    );
}

export default Tabs;