import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
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
          <View style={styles.line}>
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
              <Text style={styles.textSix}>
                Domain Name Assistance
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Custom Design
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                1GB Web Space
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Fully Responsive Site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Logo Design (3 Samples)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Total 5 pages
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Contact Us Form
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Fully Optimized Site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                CMS Site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Live Chat Service
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Social Media Integration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Weekly Automated Backups
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Basic Security (Login And SSL)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                3 Professional Email's
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                File Manager
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Technical Support
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                SEO Optimized Site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                CDN Integration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Website Auditing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                3 Months Free Maintenance
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                1 Month SEO Free
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
          <View style={styles.line}>
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
              <Text style={styles.textSix}>
                Domain Name Assistance
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Custom Design
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                1GB Web Space
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Fully Responsive Site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Logo Design (5 Samples)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Total 15 pages
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Contact Us Form
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Fully Optimized Site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                CMS Site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Live Chat Service
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Social Media Integration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Weekly Automated Backups
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Standard Security (Login, SSL, Firewall)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                5 Professional Email's
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                File Manager
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Technical support
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                SEO Optimized site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                CDN Integration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Website Auditing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                6 Months Free Maintenance
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                1 Month SEO Free
              </Text>
            </View>
            <View style={styles.choosePlanButtonView}>
              <TouchableOpacity 
                style={styles.choosePlanButton}
                >
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
          <View style={styles.line}>
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
              <Text style={styles.textSix}>
                Domain Name Assistance
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Custom Design
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                5GB Web Space
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Fully Responsive Site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Logo Design (8 Samples)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Total 25 pages
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Contact Us Form
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Fully Optimized Site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                CMS Site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Live Chat Service with App
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Social Media Integration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Weekly Automated Backups
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                High Security (Login, Comodo SSL, Firewall & Malware)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                10 Professional Email's
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                File Manager
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Technical support
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                SEO Optimized site
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                CDN Integration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Website Security Auditing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                6 Months Free Maintenance
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                1 Month SEO Free
              </Text>
            </View>
            <View style={styles.choosePlanButtonView}>
              <TouchableOpacity 
                style={styles.choosePlanButton}
                >
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

const WebDevelopmentPricingPlansScreen = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={() => ({ 
            headerShown: false, 
            tabBarLabelStyle: 
            {
              fontWeight: "600",
              fontSize: 12,
              textAlignVertical: 'center',
              textAlign: 'center',
              letterSpacing: 0.4
            },
            tabBarIconStyle: { display: "none" },
            tabBarActiveTintColor: '#0275d8',
            tabBarInactiveTintColor: '#000000'
            })}>
          <Tab.Screen component={Basic} name='Basic' />
          <Tab.Screen component={Professional} name='Professional' />
          <Tab.Screen component={Enterprise} name='Enterprise' />
        </Tab.Navigator>
      </NavigationContainer>
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
    height: '54%',
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
    marginBottom: 20
  },
  line:
  {
    borderBottomColor: '#999',
    borderBottomWidth: 0.5,
    marginBottom: 20
  },
  textOne:
  {
    color: '#FF0024',
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 0
  },
  textTwo:
  {
    color: '#605E5E',
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 10
  },
  textThree:
  {
    fontSize: 25,
    fontWeight: '500',
    color: '#FF0027',
    textAlign: 'center',
    marginBottom: 10
  },
  textFour:
  {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#999',
    textAlign: 'center',
    marginBottom: 10
  },
  textFive:
  {
    fontSize: 15,
    color: '#585858',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  textSix:
  {
    fontSize: 15,
    color: '#585858',
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 20
  },
  choosePlanButtonView:
  {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20
  },
  choosePlanButton:
  {
    backgroundColor: '#000',
    paddingTop: 15,
    paddingRight: 12,
    paddingBottom: 15,
    paddingLeft: 12,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    borderRadius: 4,
    boxSizing: 'border-box',
    webkitTransition: '.3s',
    oTransition: '.3s',
    transition: '.3s',
    textDecoration: 'none',
    // marginBottom: 17
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
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 0
  },
  profTextOne:
  {
    fontSize: 25,
    fontWeight: '500',
    color: '#007DFF',
    textAlign: 'center',
    marginBottom: 10
  },
  enterpriseText:
  {
    color: '#FF8F00',
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 0
  },
  enterpriseTextOne:
  {
    fontSize: 25,
    fontWeight: '500',
    color: '#FF8F00',
    textAlign: 'center',
    marginBottom: 10
  }
  /* choosePlanButtonHover:
  {
    backgroundColor: '#e22658'
  },
  choosePlanButtonActive:
  {
    backgroundColor: '#e22658'
  } */
}
);

export default WebDevelopmentPricingPlansScreen;