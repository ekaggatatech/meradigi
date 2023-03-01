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
                ₹9,500 <Text style={styles.textFour}>/ Month</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Odoo Implementation & Development
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Odoo Configuration & Server Setup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Ngnix configuration with domain redirection
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Periodic database backup on cloud
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  User and Permission Set Up
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Apps like sale, purchase, inventory, manufacturing, POS with out of box functionality
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                  Integrations
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Xero Accouting
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Quickbooks
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Salesforce
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  3pl
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Point of sale
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Promotions
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Credit Sales
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Coupons and Vouchers
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Loyalty
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Linkly Integration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Offline Restoration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Sales
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Sale Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Contact Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Delivery & Shipping
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Inventory
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Warehouse & Location Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Delivery & Shipping
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Transfers
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Other Vertices
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Fleet Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Hotel & Restaurant
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Odoo Rental Management System
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Odoo Manufacturing Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Pharmacy & Hospital
                </Text>
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
            <View style={styles.newLine}>
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
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Configuration, Server Setup +30% Customization
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Ngnix configuration with domain redirection and reverse proxy
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Periodic database backup on cloud
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  User and Permission set up with security groups
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Customization in sales, purchase, Inventory, manufacturing and Point of Sale
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Integrations
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Xero Accouting
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Quickbooks
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Salesforce
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  3pl
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Point of sale
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Promotions
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Credit Sales
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Coupons and vouchers
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Loyalty
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Linkly Integration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Offline Restoration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Sales
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Sale Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Contact Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Delivery & Shipping
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Inventory
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Warehouse & location Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Delivery & Shipping
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Transfers
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Other Vertices
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Fleet management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Hotel & Restaurant
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Odoo Rental Management System
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Odoo Manufacturing Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Pharmacy & Hospital
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
                ₹20,500 <Text style={styles.textFour}>/ Month</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Odoo Implementation & Development
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Existing Out of Box features with complete Customization and Server set up
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Ngnix configuration with domain redirection and reverse proxy
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Periodic databasePeriodic database backup on cloud and automatic restoration backup on cloud
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  User and permission set up with security groups
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Complete Customization in sales , purchase,Inventory , manufacturing and Point of Sale
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Integrations
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Xero Accouting
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Quickbooks
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Salesforce
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  3pl
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Point of sale
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Promotions
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Credit Sales
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Coupons and vouchers
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Loyalty
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Linkly Integration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Offline Restoration
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Sales
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Sale Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Contact Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Delivery & Shipping
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Inventory
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Warehouse & location Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Delivery & Shipping
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Transfers
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Other Vertices
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Fleet Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Hotel & Restaurant
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Odoo Rental Management System
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Odoo Manufacturing Management
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Pharmacy & Hospital
                </Text>
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

const OdooPricingPlansScreen = ({navigation}) => {
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
        <Button title="Go Back To Home" onPress={() => navigation.navigate('HomePage')} />
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

export default OdooPricingPlansScreen;