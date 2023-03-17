import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/AntDesign';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MenuScreen from './app/screens/MenuScreen';
import CustomDrawer from './app/components/CustomDrawer';
import MyHeaderRight from './app/screens/MyHeaderRight';
import HomePage from './app/screens/HomePage';
import Login from './app/screens/LoginRegister/Login';
import Register from './app/screens/LoginRegister/Register';
import AboutUsScreen from './app/screens/AboutUsScreen/AboutUs';
import ContactUsScreen from './app/screens/ContactUsScreen/ContactUs';
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
import CelebrityMarketing from './app/shared/CelebrityMarketing';
import RadioAdvertisement from './app/shared/RadioAdvertisement';
import CelebritySlider from './app/screens/PricingScreens/CelebrityPriceScreens/CelebritySlider';
import PrivacyPolicyScreen from './app/screens/PrivacyPolicyScreen/PrivacyPolicy';
import RefundPolicyScreen from './app/screens/RefundPolicyScreen/RefundPolicy';
import TermsConditionsScreen from './app/screens/TermsConditionsScreen/TermsConditions';
import ContentMarketing from './app/screens/ContentMarketing/ContentMarketing';
import SocialMediaMarketing from './app/screens/SocialMediaMarketing/SocialMediaMarketing';
import GraphicsDesigning from './app/screens/GraphicsDesigning/GraphicsDesigning';
import ServicesScreen from './app/screens/ServicesScreen';
import SearchEngineOptimization from './app/screens/SearchEngineOptimization/SearchEngineOptimization';
import GoogleAds from './app/screens/GoogleAds/GoogleAds';
import SocialMediaAds from './app/screens/SocialMediaAds/SocialMediaAds';

/* import Tabs from './app/screens/navigations/Tabs'; */
/* import DigitalMarketingPricingPlansScreen from './app/screens/PricingScreens/DigitalMarketingPricingPlansScreen/DigitalMarketingPricingPlansScreen';
import OdooPricingPlansScreen from './app/screens/PricingScreens/OdooPricingPlansScreen/OdooPricingPlansScreen';
import WebDevelopmentPricingPlansScreen from './app/screens/PricingScreens/WebDevelopmentPricingPlansScreen/WebDevelopmentPricingPlansScreen'; */
/* import WelcomeScreen from './app/screens/WelcomeScreen';
import TalktousModal from './app/screens/ConsultationForm/TalktousModal';
import ChoosePrice from './app/screens/PricingScreens/ERPPricingScreens/ChoosePrice';
import MainPackages from './app/screens/PricingScreens/DigitalMarketPriceScreens/MainPackages';
import BasicWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/BasicWebPack';
import ProfessionalWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/ProfessionalWebPack';
import EnterpriseWebPack from './app/screens/PricingScreens/WebDesignPriceScreens/EnterpriseWebPack'; */
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* const RegisterStack = createNativeStackNavigator();
const RegisterStackScreen = () => {
  return ( 
    <>
          <RegisterStack.Navigator initialRouteName='HomePage'>
            <RegisterStack.Screen name='Register' component={Register} options={{ headerShown: false }} />
          </RegisterStack.Navigator>
    </>
  );
} */

const Drawer = createDrawerNavigator();
const App = () => {
  const [ fontsLoaded ] = useFonts({
    "LemonLove": require("./app/assets/fonts/Lemonlove.otf")
  });
  useEffect(() => {
    async function prepare()
    {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  if(!fontsLoaded)
  {
    return undefined;
  }
  else
  {
    SplashScreen.hideAsync();
  }
  return ( 
    <>
      <NavigationContainer>
          <Drawer.Navigator initialRouteName='HomePage' drawerContent={(props)=><CustomDrawer {...props} />}
            screenOptions={{ 
                              headerShown: true, 
                              drawerActiveBackgroundColor: '#cb202d',
                              drawerActiveTintColor: '#FFFFFF',
                              drawerInactiveBackgroundColor: '#FFFFFF',
                              drawerInactiveTintColor: '#cb202d',
                              drawerLabelStyle: { marginLeft: 0, paddingLeft: 0, fontWeight: 'bold', fontSize: 12, letterSpacing: 0 },
                              drawerStyle: { backgroundColor: '#FFFFFF', width: 240 },
                              headerTintColor: '#cb202d',
                              headerStyle: { elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 1 },
                              marginBottom: 0, 
                              paddingBottom: 0 
                              // {{ fontFamily: "LemonLove", fontSize: 30 }} activeTintColor: '#cb202d', drawerItemstyle:{ borderRadius:0, marginVertical: 0, borderBottomWidth: 1, borderBottomColor:'#cb202d' } drawerActiveTintColor: '#cb202d', drawerInactiveTintColor: '#060606', drawerActiveBackgroundColor: '#cb202d', drawerInActiveBackgroundColor: '#060606'
            }}
          > 
            <Drawer.Screen name='HomePage' component={HomePage} 
              options={{ 
                drawerLabel: 'Home', 
                title: false, 
                drawerIcon: ({color}) => ( <Icon name='home' size={20} color={color} /> ),
                headerRight: ({props}) => {
                  return (
                      <>
                        <MyHeaderRight {...props} />
                      </>
                    );
                  }
              }}
            />
            <Drawer.Screen name='Our Services' component={MenuScreen} options={{ drawerLabel: 'Our Services', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ) }} />
            <Drawer.Screen name='Get A Mobile App' component={MobileApp} options={{ drawerLabel: 'Get A Mobile App', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='I Want A Very Fast Website' component={ServicesScreen} options={{ drawerLabel: 'I Want A Very Fast Website', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Odoo ERP Implementation' component={ErpSolution} options={{ drawerLabel: 'Odoo ERP Implementation', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Rank My Website On Google' component={Seo} options={{ drawerLabel: 'Rank My Website On Google', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Digital Marketing' component={DigitalMarketing} options={{ drawerLabel: 'Digital Marketing', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Make Me Popular On Youtube' component={Youtube} options={{ drawerLabel: 'Make Me Popular On Youtube', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Make My Videos Popular On Facebook' component={Facebook} options={{ drawerLabel: 'Make My Videos Popular On Facebook', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Make My Videos Popular On Instagram' component={Instagram} options={{ drawerLabel: 'Make My Videos Popular On Instagram', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Moodle LMS Development' component={MoodleLMS} options={{ drawerLabel: 'Moodle LMS Development', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Add Audio/Video Feature In My Website' component={AudioVideoOnWebsite} options={{ drawerLabel: 'Add Audio/Video Feature In My Website', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Make My Product Famous' component={ProductFamous} options={{ drawerLabel: 'Make My Product Famous', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='I Want An Annual Maintenance Plan' component={AnnualMaintenance} options={{ drawerLabel: 'I Want An Annual Maintenance Plan', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Get A Best Hosting Plan' component={HostingPlan} options={{ drawerLabel: 'Get A Best Hosting Plan', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Hire A Developer' component={HireDeveloper} options={{ drawerLabel: 'Hire A Developer', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Hire A Celebrity' component={CelebrityMarketing} options={{ drawerLabel: 'Hire A Celebrity', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Advertise On Radio' component={RadioAdvertisement} options={{ drawerLabel: 'Advertise On Radio', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Celebrity Marketing' component={CelebritySlider} options={{ drawerLabel: 'Celebrity Marketing', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Content Generation & Marketing' component={ContentMarketing} options={{ drawerLabel: 'Content Generation & Marketing', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Social Media Ads & Marketing' component={SocialMediaMarketing} options={{ drawerLabel: 'Social Media Ads & Marketing', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Graphics Designing' component={GraphicsDesigning} options={{ drawerLabel: 'Graphics Designing', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Privacy Policy' component={PrivacyPolicyScreen}  options={{ drawerLabel: 'Privacy Policy', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }}/>
            <Drawer.Screen name='Refund Policy' component={RefundPolicyScreen} options={{ drawerLabel: 'Refund Policy', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} />
            <Drawer.Screen name='Terms & Conditions' component={TermsConditionsScreen} options={{ drawerLabel: 'Terms & Conditions', title: false, drawerIcon: ({color}) => ( <Icon name='customerservice' size={20} color={color} /> ), drawerItemStyle: { height: 0, display: 'none' } }} /> 
            <Drawer.Screen name='Pricing Plans' component={WebDesigningPackage} options={{ drawerLabel: 'Pricing Plans', title: false, drawerIcon: ({color}) => ( <Icon name='tago' size={20} color={color} /> ) }} />
            <Drawer.Screen name='About Us' component={AboutUsScreen} options={{ drawerLabel: 'About Us', title: false, drawerIcon: ({color}) => ( <Icon name='info' size={20} color={color} /> ) }} />
            <Drawer.Screen name='Contact Us' component={ContactUsScreen} options={{ drawerLabel: 'Contact Us', title: false, drawerIcon: ({color}) => ( <Icon name='phone' size={20} color={color} /> ) }} />
            <Drawer.Screen name='Log In' component={Login} options={{ drawerLabel: 'Log In', title: false, drawerIcon: ({color}) => ( <Icon name='user' size={20} color={color} /> ) }} />
            <Drawer.Screen name='Register' component={Register} options={{ drawerLabel: 'Register', title: false, drawerIcon: ({color}) => ( <Icon name='user' size={20} color={color} /> ), drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='Search Engine Optimization' component={SearchEngineOptimization} options={{ drawerLabel: 'Search Engine Optimization', title: false, drawerIcon: ({color}) => ( <Icon name='search' size={20} color={color} /> ), drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='Google Ads' component={GoogleAds} options={{ drawerLabel: 'Google Ads', title: false, drawerIcon: ({color}) => ( <Icon name='search' size={20} color={color} /> ), drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='Social Media Ads' component={SocialMediaAds} options={{ drawerLabel: 'Social Media Ads', title: false, drawerIcon: ({color}) => ( <Icon name='search' size={20} color={color} /> ), drawerItemStyle: { height: 0 } }} />
          </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App; 