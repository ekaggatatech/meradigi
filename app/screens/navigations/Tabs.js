import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePageScreen from '../HomePageScreen';
import ServicesScreen from '../ServicesScreen';
import MenuScreen from '../MenuScreen';
import { Image, View , Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
          tabBarOptions= {
            {activeTintColor: '#00d4ff',
              labelStyle: {
              fontSize: 15,
               
            },
            style: {
              position:'absolute',
              bottom:25,
              left:20,
              right:20,
              elevation:0,
              backgroundColor: 'black',
              borderRadius:15,
              height:90,   
                       
            },
          }}
        >
            <Tab.Screen name='Home' component={HomePageScreen} options={{
              tabBarIcon:({focused}) =>{
                <View>
                  <Image 
                    source={require('./../../assets/homeicon.png')}
                    resizeMode="contain"
                    style={{
                      width:25,
                      height:25,
                    }}/>
                  <Text></Text>
                </View>
              }
            }}/>
            <Tab.Screen name='Services' component={ServicesScreen}/>
            <Tab.Screen name='Menu' component={MenuScreen}/>
        </Tab.Navigator>

    );
}


export default Tabs;