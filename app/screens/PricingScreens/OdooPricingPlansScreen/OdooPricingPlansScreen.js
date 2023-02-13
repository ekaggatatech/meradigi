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
                ₹9,500 <Text style={styles.textFour}>/ Month</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Odoo Implementation & Development
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Odoo Configuration & Server Setup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Ngnix configuration with domain redirection
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Periodic database backup on cloud
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                User and Permission Set Up
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Apps like sale, purchase, inventory, manufacturing, POS with out of box functionality
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                  Integrations
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Xero Accouting
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Quickbooks
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Salesforce
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                3pl
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Point of sale
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Promotions
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Credit Sales
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Coupons and Vouchers
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Loyalty
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Linkly Integration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Offline Restoration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Sales
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Sale Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Contact Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Delivery & Shipping
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Inventory
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Warehouse & Location Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Delivery & Shipping
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Transfers
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Other Vertices
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Fleet Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Hotel & Restaurant
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Odoo Rental Management System
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Odoo Manufacturing Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Pharmacy & Hospital
              </Text>
            </View>
            <View style={styles.choosePlanButtonView}>
              <TouchableOpacity 
                style={styles.choosePlanButton}>
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
                ₹9,500 <Text style={styles.textFour}>/ Month</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Odoo Implementation & Development
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Configuration, Server Setup +30% Customization
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Ngnix configuration with domain redirection and reverse proxy
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Periodic database backup on cloud
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                User and Permission set up with security groups
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Customization in sales, purchase, Inventory, manufacturing and Point of Sale
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Integrations
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Xero Accouting
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Quickbooks
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Salesforce
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                3pl
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Point of sale
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Promotions
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Credit Sales
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Coupons and vouchers
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Loyalty
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Linkly Integration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Offline Restoration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Sales
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Sale Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Contact Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Delivery & Shipping
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Inventory
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Warehouse & location Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Delivery & Shipping
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Transfers
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Other Vertices
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Fleet management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Hotel & Restaurant
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Odoo Rental Management System
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Odoo Manufacturing Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Pharmacy & Hospital
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
                ₹20,500 <Text style={styles.textFour}>/ Month</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Odoo Implementation & Development
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Existing Out of Box features with complete Customization and Server set up
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Ngnix configuration with domain redirection and reverse proxy
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Periodic databasePeriodic database backup on cloud and automatic restoration backup on cloud
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                User and permission set up with security groups
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Complete Customization in sales , purchase,Inventory , manufacturing and Point of Sale
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Integrations
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Xero Accouting
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Quickbooks
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Salesforce
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                3pl
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Point of sale
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Promotions
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Credit Sales
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Coupons and vouchers
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Loyalty
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Linkly Integration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Offline Restoration
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Sales
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Sale Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Contact Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Delivery & Shipping
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Inventory
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Warehouse & location Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Delivery & Shipping
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Transfers
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Other Vertices
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Fleet Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Hotel & Restaurant
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Odoo Rental Management System
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Odoo Manufacturing Management
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Pharmacy & Hospital
              </Text>
            </View>
            <View style={styles.choosePlanButtonView}>
              <TouchableOpacity 
                style={styles.choosePlanButton}>
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

const OdooPricingPlansScreen = () => {
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

export default OdooPricingPlansScreen;