import React from 'react';
//import { View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import HomePageScreen from './app/screens/HomePageScreen';
import MobileApp from './app/shared/MobileApp';
import FastWebsite from './app/shared/FastWebsite';
import ErpSolution from './app/shared/ErpSolution';
import Seo from './app/shared/Seo';
import Youtube from './app/shared/Youtube';
import Facebook from './app/shared/Facebook';
import Instagram from './app/shared/Instagram';
import MoodleLMS from './app/shared/MoodleLMS';
import AudioVideoOnWebsite from './app/shared/AudioVideoOnWebsite';
import ProductFamous from './app/shared/ProductFamous';
import DigitalMarketing from './app/shared/DigitalMarketing';
import AnnualMaintenance from './app/shared/AnnualMaintenance';
import HireDeveloper from './app/shared/HireDeveloper';
import HostingPlan from './app/shared/HostingPlan';
import CelebrityMarketing from './app/shared/CelebrityInfluencerMarketing';
import RadioAdvertisement from './app/shared/RadioAdvertisement';
import TalktousModal from './app/screens/ConsultationForm/TalktousModal';
import Tabs from './app/screens/navigations/Tabs';
import WebDesigningPackage from './app/screens/PricingScreens/WebDesignPriceScreens/MainPackageScreens';
import BasicWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/BasicWebPack';
import ProfessionalWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/ProfessionalWebPack';
import EnterpriseWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/EnterpriseWebPack';
import CelebritySlider from './app/screens/PricingScreens/CelebrityPriceScreens/CelebritySlider';
import MainPackages from './app/screens/PricingScreens/DigitalMarketPriceScreens/MainPackages';
import ChoosePrice from './app/screens/PricingScreens/ERPPricingScreens/ChoosePrice';
import Login from './app/screens/LoginRegister/Login'
import Register from './app/screens/LoginRegister/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {
  const Stack = createNativeStackNavigator();

  return ( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name='Welcome' component={WelcomeScreen}/>
          <Stack.Screen name='Home' component={Tabs} options={{ headerShown: false }}/>
          <Stack.Screen name='Get Mobile App' component={MobileApp}/>
          <Stack.Screen name='I Want A Very Fast Website' component={FastWebsite}/>
          <Stack.Screen name='I Want Odoo ERP' component={ErpSolution}/>
          <Stack.Screen name='Rank My Website On Google' component={Seo}/>
          <Stack.Screen name='Digital Marketing Plans' component={DigitalMarketing}/>
          <Stack.Screen name='Make Me Popular On Youtube' component={Youtube}/>
          <Stack.Screen name='Make My Videos Popular On Facebook' component={Facebook}/>
          <Stack.Screen name='Make My Videos Popular On Instagram' component={Instagram}/>
          <Stack.Screen name='I Need Moodle LMS' component={MoodleLMS}/>
          <Stack.Screen name='Add Audio/Video Feature In My Website' component={AudioVideoOnWebsite}/>
          <Stack.Screen name='Make My Product Famous' component={ProductFamous}/>
          <Stack.Screen name='I Want An Annual Maintenance Plan' component={AnnualMaintenance}/>
          <Stack.Screen name='Get A Best Hosting Plan' component={HostingPlan}/>
          <Stack.Screen name='Hire A Developer' component={HireDeveloper}/>
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
          <Stack.Screen name='Log In' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
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