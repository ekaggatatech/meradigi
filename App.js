import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from '@expo/vector-icons/AntDesign';

import CustomDrawer from './app/components/CustomDrawer';
import MyHeaderRight from './app/screens/MyHeaderRight';
import Tabs from './app/screens/navigations/Tabs';
import Login from './app/screens/LoginRegister/Login';
import Register from './app/screens/LoginRegister/Register';
import AboutUsScreen from './app/screens/AboutUsScreen/AboutUs';
import WebDesigningPackage from './app/screens/PricingScreens/WebDesignPriceScreens/MainPackageScreens';
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
import CelebritySlider from './app/screens/PricingScreens/CelebrityPriceScreens/CelebritySlider';
import ServicesScreen from './app/screens/ServicesScreen';
import PrivacyPolicyScreen from './app/screens/PrivacyPolicyScreen/PrivacyPolicy';
import RefundPolicyScreen from './app/screens/RefundPolicyScreen/RefundPolicy';
import TermsConditionsScreen from './app/screens/TermsConditionsScreen/TermsConditions';
import ContentMarketing from './app/screens/ContentMarketing/ContentMarketing';
import SocialMediaMarketing from './app/screens/SocialMediaMarketing/SocialMediaMarketing';
import GraphicsDesigning from './app/screens/GraphicsDesigning/GraphicsDesigning';

import MainPackages from './app/screens/PricingScreens/DigitalMarketPriceScreens/MainPackages';
import ChoosePrice from './app/screens/PricingScreens/ERPPricingScreens/ChoosePrice';
import TalktousModal from './app/screens/ConsultationForm/TalktousModal';
import BasicWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/BasicWebPack';
import ProfessionalWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/ProfessionalWebPack';
import EnterpriseWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/EnterpriseWebPack';
import DigitalMarketingPricingPlansScreen from './app/screens/PricingScreens/DigitalMarketingPricingPlansScreen/DigitalMarketingPricingPlansScreen';
import OdooPricingPlansScreen from './app/screens/PricingScreens/OdooPricingPlansScreen/OdooPricingPlansScreen';
import WebDevelopmentPricingPlansScreen from './app/screens/PricingScreens/WebDevelopmentPricingPlansScreen/WebDevelopmentPricingPlansScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ContactUsScreen from './app/screens/ContactUsScreen/ContactUs';

// import Icon from '@expo/vector-icons/AntDesign';
// import Ionicons from "react-native-vector-icons/Ionicons";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import FontAwesome5 from "@expo/vector-icons";
// import DrawerNavigation from './app/screens/DrawerNavigation';

/* const HomeStack = createNativeStackNavigator();
const GetAMobileAppStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return ( 
    <>
          <HomeStack.Navigator initialRouteName='HomePage'>
            <HomeStack.Screen name='HomePage' component={Tabs} options={{ headerShown: false }} />
          </HomeStack.Navigator>
    </>
  );
}*/

const RegisterStack = createNativeStackNavigator();
const RegisterStackScreen = () => {
  return ( 
    <>
          <RegisterStack.Navigator initialRouteName='HomePage'>
            <RegisterStack.Screen name='Register' component={Register} options={{ headerShown: false }} />
          </RegisterStack.Navigator>
    </>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return ( 
    <>
      <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName='HomePage'
            drawerContent={ props => <CustomDrawer {...props} /> }
            screenOptions={{ 
              headerShown: true, 
              drawerActiveBackgroundColor: '#cb202d',
              drawerActiveTintColor: '#FFFFFF',
              drawerInactiveBackgroundColor: '#FFFFFF',
              drawerInactiveTintColor: '#cb202d',
              drawerLabelStyle: { marginLeft: -20, fontWeight: 'bold', fontSize: 14, letterSpacing: 0.1 },
              drawerStyle: { backgroundColor: '#FFFFFF', width: 240 },
              headerTintColor: '#cb202d',
              // drawerActiveBackgroundColor: '#FFFFFF',
              // drawerActiveTintColor: '#cb202d',
              // drawerInactiveBackgroundColor: '#FFFFFF',
              // drawerInactiveTintCcb202dolor: '#060606',
              // activeTintColor: '#cb202d',
              // drawerItemstyle:{ borderRadius:0, marginVertical: 0, borderBottomWidth: 1, borderBottomColor:'#cb202d' }
              // drawerActiveTintColor: '#cb202d', drawerInactiveTintColor: '#060606', drawerActiveBackgroundColor: '#cb202d', drawerInActiveBackgroundColor: '#060606'
            }}
          > 
            <Drawer.Screen name='HomePage' component={Tabs} 
              options={{ 
                drawerLabel: 'Home', title: false, drawerIcon: ({color}) => ( <Icon name='home' size={22} color={color} /> ),
                headerRight: ({props}) => {
                  return (
                      <>
                        <MyHeaderRight {...props} />
                      </>
                    );
                  }
              }}
            />
            <Drawer.Screen name='Get A Mobile App' component={MobileApp} options={{ drawerLabel: 'Get A Mobile App', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='I Want A Very Fast Website' component={ServicesScreen} options={{ drawerLabel: 'I Want A Very Fast Website', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Odoo ERP Implementation' component={ErpSolution} options={{ drawerLabel: 'Odoo ERP Implementation', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Rank My Website On Google' component={Seo} options={{ drawerLabel: 'Rank My Website On Google', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Digital Marketing' component={DigitalMarketing} options={{ drawerLabel: 'Digital Marketing', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Make Me Popular On Youtube' component={Youtube} options={{ drawerLabel: 'Make Me Popular On Youtube', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Make My Videos Popular On Facebook' component={Facebook} options={{ drawerLabel: 'Make My Videos Popular On Facebook', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Make My Videos Popular On Instagram' component={Instagram} options={{ drawerLabel: 'Make My Videos Popular On Instagram', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Moodle LMS Development' component={MoodleLMS} options={{ drawerLabel: 'Moodle LMS Development', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Add Audio/Video Feature In My Website' component={AudioVideoOnWebsite} options={{ drawerLabel: 'Add Audio/Video Feature In My Website', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Make My Product Famous' component={ProductFamous} options={{ drawerLabel: 'Make My Product Famous', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='I Want An Annual Maintenance Plan' component={AnnualMaintenance} options={{ drawerLabel: 'I Want An Annual Maintenance Plan', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Get A Best Hosting Plan' component={HostingPlan} options={{ drawerLabel: 'Get A Best Hosting Plan', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Hire A Developer' component={HireDeveloper} options={{ drawerLabel: 'Hire A Developer', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Hire A Celebrity' component={CelebrityMarketing} options={{ drawerLabel: 'Hire A Celebrity', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Advertise On Radio' component={RadioAdvertisement} options={{ drawerLabel: 'Advertise On Radio', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Celebrity Marketing' component={CelebritySlider} options={{ drawerLabel: 'Celebrity Marketing', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Content Generation & Marketing' component={ContentMarketing} options={{ drawerLabel: 'Content Generation & Marketing', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Social Media Ads & Marketing' component={SocialMediaMarketing} options={{ drawerLabel: 'Social Media Ads & Marketing', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Graphics Designing' component={GraphicsDesigning} options={{ drawerLabel: 'Graphics Designing', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Privacy Policy' component={PrivacyPolicyScreen}  options={{ drawerLabel: 'Privacy Policy', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }}/>
            <Drawer.Screen name='Refund Policy' component={RefundPolicyScreen} options={{ drawerLabel: 'Refund Policy', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Terms & Conditions' component={TermsConditionsScreen} options={{ drawerLabel: 'Terms & Conditions', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={22} color={color} /> ) }} /> 
            <Drawer.Screen name='Pricing Plans' component={WebDesigningPackage} options={{ drawerLabel: 'Pricing Plans', title: false, drawerIcon: ({color}) => ( <Icon name='tago' size={22} color={color} /> ) }} />
            <Drawer.Screen name='About Us' component={AboutUsScreen} options={{ drawerLabel: 'About Us', title: false, drawerIcon: ({color}) => ( <Icon name='info' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Log In' component={Login} options={{ drawerLabel: 'Log In', title: false, drawerIcon: ({color}) => ( <Icon name='user' size={22} color={color} /> ) }} />
            <Drawer.Screen name='Register' component={RegisterStackScreen} options={{ drawerLabel: 'Register', title: false, drawerIcon: ({color}) => ( <Icon name='user' size={22} color={color} /> ) }}
              // options={{ drawerLabel:()=>null, title:()=>null, drawerIcon:()=>null }} 
            />
          </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App; 