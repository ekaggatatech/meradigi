import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, TouchableOpacity, Button, Image } from "react-native";
import DigitalMarketingBannerData from '../../../shared/DigitalMarketingBannerData';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Basic()
{
  return (
    <>
        <SafeAreaView style={styles.mainBackground}> 
          <DigitalMarketingBannerData />
          <View style={styles.container}>
          <ScrollView nestedScrollEnabled={true}>
            <View style={styles.newLine}>
              <Text style={styles.textOne}>
                BASIC
              </Text>
              <Text style={styles.textTwo}>
                Package
              </Text>
              <Text style={styles.textThree}>
                ₹7,500 <Text style={styles.textFour}>/ Annual</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Domain Name Assistance
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Custom Design
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  1GB Web Space
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Fully Responsive Site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Logo Design (3 Samples)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Total 5 pages
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Contact Us Form
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Fully Optimized Site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  CMS Site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Live Chat Service
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Social Media Integration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Weekly Automated Backups
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Basic Security (Login And SSL)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  3 Professional Email's
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  File Manager
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Technical Support
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  SEO Optimized Site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  CDN Integration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Website Auditing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  3 Months Free Maintenance
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  1 Month SEO Free
                </Text>
              </Text>
            </View>
            <View style={styles.choosePlanButtonView}>
              <TouchableOpacity style={styles.choosePlanButton}>
                  <Text style={styles.choosePlanButtonText}>
                    CHOOSE PLAN
                  </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          </View>
        </SafeAreaView>
    </>
  );
}

function Professional()
{
  return (
    <>
        <SafeAreaView style={styles.mainBackground}> 
          <DigitalMarketingBannerData />
          <View style={styles.container}>
          <ScrollView nestedScrollEnabled={true}>
            <View style={styles.newLine}>
              <Text style={styles.profText}>
                PROFESSIONAL
              </Text>
              <Text style={styles.textTwo}>
                Package
              </Text>
              <Text style={styles.profTextOne}>
                ₹14,500 <Text style={styles.textFour}>/ Annual</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Domain Name Assistance
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Custom Design
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  1GB Web Space
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Fully Responsive Site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Logo Design (5 Samples)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Total 15 pages
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Contact Us Form
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Fully Optimized Site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  CMS Site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/closeOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Live Chat Service
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Social Media Integration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Weekly Automated Backups
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Standard Security (Login, SSL, Firewall)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  5 Professional Email's
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  File Manager
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Technical support
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  SEO Optimized site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/closeOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  CDN Integration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Website Auditing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  6 Months Free Maintenance
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancelOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  1 Month SEO Free
                </Text>
              </Text>
            </View>
            <View style={styles.choosePlanButtonView}>
              <TouchableOpacity style={styles.choosePlanButton}>
                  <Text style={styles.choosePlanButtonText}>
                    CHOOSE PLAN
                  </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          </View>
        </SafeAreaView>
    </>
  );
}

function Enterprise()
{
  return (
    <>
        <SafeAreaView style={styles.mainBackground}> 
          <DigitalMarketingBannerData />
          <View style={styles.container}>
          <ScrollView nestedScrollEnabled={true}>
            <View style={styles.newLine}>
              <Text style={styles.enterpriseText}>
                ENTERPRISE
              </Text>
              <Text style={styles.textTwo}>
                Package
              </Text>
              <Text style={styles.enterpriseTextOne}>
                ₹24,500 <Text style={styles.textFour}>/ Annual</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Domain Name Assistance
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Custom Design
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  5GB Web Space
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Fully Responsive Site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Logo Design (8 Samples)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Total 25 pages
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Contact Us Form
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Fully Optimized Site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  CMS Site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Live Chat Service with App
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Social Media Integration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Weekly Automated Backups
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  High Security (Login, Comodo SSL, Firewall & Malware)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  10 Professional Email's
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  File Manager
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Technical support
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  SEO Optimized site
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  CDN Integration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Website Security Auditing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  6 Months Free Maintenance
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkFour.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  1 Month SEO Free
                </Text>
              </Text>
            </View>
            <View style={styles.choosePlanButtonView}>
              <TouchableOpacity style={styles.choosePlanButton}>
                <Text style={styles.choosePlanButtonText}>
                  CHOOSE PLAN
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          </View>
        </SafeAreaView>
    </>
  );
}

const WebDevelopmentPricingPlansScreen = ({navigation}) => {
  return (
    <>
      <NavigationContainer independent={true} style={{ backgroundColor: '#FFFFFF', background: '#FFFFFF' }}>
        <Tab.Navigator
          screenOptions={() => ({ 
            headerShown: false, 
            tabBarLabelStyle: 
            {
              fontWeight: "bold",
              fontSize: 12,
              textAlignVertical: 'center',
              textAlign: 'center',
              letterSpacing: 0.4
            },
            tabBarIconStyle: { display: "none" },
            tabBarActiveTintColor: '#FE0629',
            tabBarInactiveTintColor: '#060606',
            tabBarIndicatorStyle: { backgroundColor: '#FE0629' }
            })}>
          <Tab.Screen component={Basic} name='Basic' />
          <Tab.Screen component={Professional} name='Professional' />
          <Tab.Screen component={Enterprise} name='Enterprise' />
        </Tab.Navigator>
      </NavigationContainer>
      <View style={styles.goBackToHomeButtonView}>
        <Button title="Go Back To Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </>
  );
}

const styles = StyleSheet.create(
{
  mainBackground:
  {
    backgroundColor: '#FFFFFF'
  },
  container:
  {
    width: '80%',
    height: '51%',
    boxSizing: 'border-box',
    borderRadius: 0,
    shadowOffset: { width: 10, height: 2 },  
    shadowColor: '#000009',  
    shadowOpacity: 0.2,  
    shadowRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: '#000009',
    backgroundColor: '#FFF',
    elevation: 5,
    marginBottom: 20,
    padding: 0
  },
  newLine:
  {
    borderBottomColor: '#999',
    borderBottomWidth: 0.5,
    paddingTop: 6,
    paddingBottom: 6
  },
  line:
  {
    borderBottomColor: '#999',
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10
  },
  textOne:
  {
    color: '#FF0024',
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textTwo:
  {
    color: '#605E5E',
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center'
  },
  textThree:
  {
    fontSize: 25,
    fontWeight: '500',
    color: '#FF0027',
    textAlign: 'center'
  },
  textFour:
  {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#999',
    textAlign: 'center'
  },
  textFive:
  {
    fontSize: 15,
    color: '#585858',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textSix:
  {
    fontSize: 15,
    color: '#585858',
    fontWeight: 'normal',
    textAlign: 'center'
  },
  choosePlanButtonView:
  {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10
  },
  choosePlanButton:
  {
    backgroundColor: '#000',
    padding: 10,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    borderRadius: 4,
    boxSizing: 'border-box',
    webkitTransition: '.3s',
    oTransition: '.3s',
    transition: '.3s',
    textDecoration: 'none'
  },
  choosePlanButtonText:
  {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 0.4
  },
  profText:
  {
    color: '#007DFF',
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  profTextOne:
  {
    fontSize: 25,
    fontWeight: '500',
    color: '#007DFF',
    textAlign: 'center'
  },
  enterpriseText:
  {
    color: '#FF8F00',
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  enterpriseTextOne:
  {
    fontSize: 25,
    fontWeight: '500',
    color: '#FF8F00',
    textAlign: 'center'
  },
  goBackToHomeButtonView:
  {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: '#FFFFFF',
    background: '#FFFFFF'
  }
}
);

export default WebDevelopmentPricingPlansScreen;