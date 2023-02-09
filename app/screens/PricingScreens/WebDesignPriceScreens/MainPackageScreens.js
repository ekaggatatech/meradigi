import * as React from 'react';
// import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DigitalMarketingPricingPlansScreen from '../DigitalMarketingPricingPlansScreen/DigitalMarketingPricingPlansScreen';
import OdooPricingPlansScreen from '../OdooPricingPlansScreen/OdooPricingPlansScreen';
import WebDevelopmentPricingPlansScreen from '../WebDevelopmentPricingPlansScreen/WebDevelopmentPricingPlansScreen';

const Tab = createBottomTabNavigator();

const MobileAppPackage = () => 
{
  return (
    <>
        <Tab.Navigator 
          screenOptions={ 
          () => ({
          headerShown: false,
          tabBarLabelStyle: {
            fontWeight: "600",
            fontSize: 12,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            textAlignVertical: 'center',
            textAlign: 'center',
            letterSpacing: 0.4
          },
          tabBarIconStyle: { display: "none" },
          tabBarActiveTintColor: '#00d4ff',
          tabBarInactiveTintColor: 'black',
          // tabBarLabelPosition: "beside-icon",
        })}
        >
            <Tab.Screen 
              name='DIGITAL MARKETING' 
              component={DigitalMarketingPricingPlansScreen} 
              options={{ 
                tabBarLabel: "DIGITAL MARKETING", 
                tabBarVisible: false, 
                // tabBarButton: () => null 
              }} 
              tabBarOptions={{
                labelStyle: {
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  textAlignVertical: 'center',
                }
              }}
              /> 
            <Tab.Screen name='ODOO' component={OdooPricingPlansScreen}/>
            <Tab.Screen name='WEB DEVELOPMENT' component={WebDevelopmentPricingPlansScreen}/>
        </Tab.Navigator>
      {/* <ImageBackground 
        style={styles.background}
        source={require('../../../assets/blue_background.jpg')}> 
        <Text style={styles.welcomeheading}>Choose A Package</Text>
        <View style={[styles.logocontainer,styles.shadowProp]}>
            <View style={[styles.welcomebox ,styles.buttons]}>
              <View  style={[styles.chooseBtn, styles.padding]}>
                <Text style={styles.chooseBtntext} 
                onPress={() => navigation.navigate('Basic Package')}>BASIC</Text>
              </View>  
              <View  style={[styles.chooseBtn, styles.padding]}>
                <Text style={styles.chooseBtntext} 
                  onPress={() => navigation.navigate('Professional Package')}>PROFESSIONAL</Text>
              </View> 
              <View  style={[styles.chooseBtn, styles.padding]}>
                <Text style={styles.chooseBtntext} 
                 onPress={() => navigation.navigate('Enterprise Package')}>ENTERPRISE</Text>
              </View> 
              <View style={[styles.chooseBtn, styles.padding]}>
                <Text style={styles.chooseBtntext} 
                onPress={() => navigation.navigate('Basic Package')}>CUSTOM</Text>
              </View> 
            </View> 
        </View>
    </ImageBackground> */}
    </>
  );
}

/* const styles = StyleSheet.create({ */
/*
  background:
  {
      flex:1,
      justifyContent:"flex-end",
      alignItems:"center",
  },
  logocontainer:
  {
    width: '90%', 
    height: '70%',
    borderRadius:15,
    borderColor:'black',
    borderWidth:2,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    position:'absolute',
    top:100,
},
welcomebox:
{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center'
},
welcomeheading:
{
  fontSize: 25,
  fontWeight: '800',
  position:'absolute',
  top:130
},
shadowProp: 
{
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
},
welcometext:
{
  textAlign:'center',
  paddingTop:20,
},
buttons:
{
  margin:50
},
padding:
{
  marginBottom:20,
  marginTop:10
},
chooseBtn:
{
  width:135,
  height:50,
  backgroundColor:'black',
  justifyContent:"center",
  alignItems:'center',
},
chooseBtntext:
{
  color:'white',
  fontSize:15,
  fontWeight:'bold'
} */
/* }) */

export default MobileAppPackage;