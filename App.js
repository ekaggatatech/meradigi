import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import MobileApp from './app/shared/MobileApp';
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
import ServicesScreen from './app/screens/ServicesScreen';
import AboutUsScreen from './app/screens/AboutUsScreen/AboutUs';
import ContactUsScreen from './app/screens/ContactUsScreen/ContactUs';
import PrivacyPolicyScreen from './app/screens/PrivacyPolicyScreen/PrivacyPolicy';
import RefundPolicyScreen from './app/screens/RefundPolicyScreen/RefundPolicy';
import TermsConditionsScreen from './app/screens/TermsConditionsScreen/TermsConditions';
import ContentMarketing from './app/screens/ContentMarketing/ContentMarketing';
import SocialMediaMarketing from './app/screens/SocialMediaMarketing/SocialMediaMarketing';
import GraphicsDesigning from './app/screens/GraphicsDesigning/GraphicsDesigning';
import DigitalMarketingPricingPlansScreen from './app/screens/PricingScreens/DigitalMarketingPricingPlansScreen/DigitalMarketingPricingPlansScreen';
import OdooPricingPlansScreen from './app/screens/PricingScreens/OdooPricingPlansScreen/OdooPricingPlansScreen';
import WebDevelopmentPricingPlansScreen from './app/screens/PricingScreens/WebDevelopmentPricingPlansScreen/WebDevelopmentPricingPlansScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return ( 
    <>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='HomePageScreen'>
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='HomePageScreen' component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name='Get Mobile App' component={MobileApp} />
            <Stack.Screen name='I Want A Very Fast Website' component={ServicesScreen} />
            <Stack.Screen name='I Want Odoo ERP' component={ErpSolution} />
            <Stack.Screen name='Rank My Website On Google' component={Seo} />
            <Stack.Screen name='Digital Marketing' component={DigitalMarketing} />
            <Stack.Screen name='Make Me Popular On Youtube' component={Youtube} />
            <Stack.Screen name='Make My Videos Popular On Facebook' component={Facebook} />
            <Stack.Screen name='Make My Videos Popular On Instagram' component={Instagram} />
            <Stack.Screen name='I Need Moodle LMS' component={MoodleLMS} />
            <Stack.Screen name='Add Audio/Video Feature In My Website' component={AudioVideoOnWebsite} />
            <Stack.Screen name='Make My Product Famous' component={ProductFamous} />
            <Stack.Screen name='I Want An Annual Maintenance Plan' component={AnnualMaintenance} />
            <Stack.Screen name='Get A Best Hosting Plan' component={HostingPlan} />
            <Stack.Screen name='Hire A Developer' component={HireDeveloper} />
            <Stack.Screen name='Hire A Celebrity' component={CelebrityMarketing} />
            <Stack.Screen name='Advertise On Radio' component={RadioAdvertisement} />
            <Stack.Screen name='Talk To Us' component={TalktousModal} />
            <Stack.Screen name='Pricing Plans' component={WebDesigningPackage} />
            <Stack.Screen name='Basic Package' component={BasicWebPack} />
            <Stack.Screen name='Professional Package' component={ProfessionalWebPack} />
            <Stack.Screen name='Enterprise Package' component={EnterpriseWebPack} />
            <Stack.Screen name='Celebrity Marketing' component={CelebritySlider} />
            <Stack.Screen name='Digital Marketing Package' component={MainPackages} />
            <Stack.Screen name='ERP Solution Package' component={ChoosePrice} />
            <Stack.Screen name='Log In' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Services' component={ServicesScreen} />
            <Stack.Screen name='About Us' component={AboutUsScreen} />
            <Stack.Screen name='Contact Us' component={ContactUsScreen} />
            <Stack.Screen name='Privacy Policy' component={PrivacyPolicyScreen} />
            <Stack.Screen name='Refund Policy' component={RefundPolicyScreen} />
            <Stack.Screen name='Terms & Conditions' component={TermsConditionsScreen} />
            <Stack.Screen name='Content Generation & Marketing' component={ContentMarketing} />
            <Stack.Screen name='Social Media Ads & Marketing' component={SocialMediaMarketing} />
            <Stack.Screen name='Graphics Designing' component={GraphicsDesigning} />
            <Stack.Screen name='DIGITAL MARKETING' component={DigitalMarketingPricingPlansScreen} />
            <Stack.Screen name='ODOO' component={OdooPricingPlansScreen} />
            <Stack.Screen name='WEB DEVELOPMENT' component={WebDevelopmentPricingPlansScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;