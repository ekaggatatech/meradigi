import React from 'react';
import { View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import HomePageScreen from './app/screens/HomePageScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return ( 
          
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name='Welcome' component={WelcomeScreen}/>
          <Stack.Screen name='Home' component={HomePageScreen}/>
        </Stack.Navigator>
    
      </NavigationContainer>
      
  );
};

export default App;

{/* <WelcomeScreen title="Next->" welcomenote="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book
        . It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged."/>*/}