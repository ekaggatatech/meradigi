import React from 'react';
//import { View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import HomePageScreen from './app/screens/HomePageScreen';
import WebDev from './app/shared/WebDev';
import DigitalMarketing from './app/shared/DigitalMarketing';
import ErpSolution from './app/shared/ErpSolution';
import Seo from './app/shared/Seo';
import SocialMediaMarketing from './app/shared/SocialMediaMarketing';
import ContentMarketing from './app/shared/ContentMarketing';
import GraphicDesign from './app/shared/GraphicDesign';
import CelebrityMarketing from './app/shared/CelebrityInfluencerMarketing';
import RadioAdvertisement from './app/shared/RadioAdvertisement';
import TalktousModal from './app/screens/TalktousModal';
import Tabs from './app/screens/navigations/Tabs';
import WebDesigningPackage from './app/screens/PricingScreens/WebDesignPriceScreens/MainPackageScreens';
import BasicWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/BasicWebPack';
import ProfessionalWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/ProfessionalWebPack';
import EnterpriseWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/EnterpriseWebPack';
import CelebritySlider from './app/screens/PricingScreens/CelebrityPriceScreens/CelebritySlider';
import MainPackages from './app/screens/PricingScreens/DigitalMarketPriceScreens/MainPackages';
import ChoosePrice from './app/screens/PricingScreens/ERPPricingScreens/ChoosePrice';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {
  const Stack = createNativeStackNavigator();

  return ( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name='Welcome' component={WelcomeScreen}/>
          <Stack.Screen name='Home' component={Tabs} options={{ headerShown: false }}/>
          <Stack.Screen name='Get Mobile App' component={WebDev}/>
          <Stack.Screen name='Digital Marketing Plans' component={DigitalMarketing}/>
          <Stack.Screen name='I Want Odoo ERP' component={ErpSolution}/>
          <Stack.Screen name='Rank My Website On Google' component={Seo}/>
          <Stack.Screen name='Social Media Marketing' component={SocialMediaMarketing}/>
          <Stack.Screen name='Content Marketing' component={ContentMarketing}/>
          <Stack.Screen name='Graphic Designing' component={GraphicDesign}/>
          <Stack.Screen name='Hire A Celebrity' component={CelebrityMarketing}/>
          <Stack.Screen name='Advertise On Radio' component={RadioAdvertisement}/>
          <Stack.Screen name='Talk To Us' component={TalktousModal}/>
          <Stack.Screen name='Web Designing Package' component={WebDesigningPackage}/>
          <Stack.Screen name='Basic Package' component={BasicWebPack}/>
          <Stack.Screen name='Professional Package' component={ProfessionalWebPack}/>
          <Stack.Screen name='Enterprise Package' component={EnterpriseWebPack}/>
          <Stack.Screen name='Celebrity Marketing' component={CelebritySlider}/>
          <Stack.Screen name='Digital Marketing Package' component={MainPackages}/>
          <Stack.Screen name='ERP Solution Package' component={ChoosePrice}/>
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