import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, TouchableOpacity, Image, Button } from "react-native";
import DigitalMarketingBannerData from '../../../shared/DigitalMarketingBannerData';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { StatusBar } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function Basic()
{
  return (
    <>
      {/* <ScrollView nestedScrollEnabled={true} style={styles.mainBackground}> */}
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
                ₹5,999 <Text style={styles.textFour}>/ Month</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Social Media Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Facebook Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Instagram Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Twitter Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  LinkedIn Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Video Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  YouTube Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Instagram Reels
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Facebook Reels
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Other Short Video Platform
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Adwords/PPC
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Google Ads
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Bing Ads
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Facebook Advert
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Youtube Advert
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  E-commerce/Shopping Ads
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                SEO and Lead Generation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  **On-Page SEO
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Website Audit
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Technical Audit
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Keyword Research
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Keyword Target (10)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Content Customization
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                    On-page Optimization 👇
                    {'\n'} - Meta Title and Description
                    {'\n'} - H1-H2 Tag
                    {'\n'} - Internal Link Structure
                    {'\n'} - Image Alt tag
                    {'\n'} - XML sitemap and submission
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Schema Markup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Site speed Optimization
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Google Analytics Setup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Tag Manager Setup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Search Console Setup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  **Off-Page SEO
                  {'\n'} - Social Bookmarking (40)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Backlink Creation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Directory Submission (20)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Classified Ads (15)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Article Submission
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Guest Blog Posting
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Infographics Creation & Posting (3)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Web 2.0 Submission
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Website Submission
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Local Site Directory (10)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Back Link Analysis
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/cancel.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Broken Links fix
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Reports
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
                ₹7,999 <Text style={styles.textFour}>/ Month</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Social Media Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Facebook Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Instagram Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/closeOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Twitter Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  LinkedIn Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Video Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/closeOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  YouTube Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Instagram Reels
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Facebook Reels
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Other Short Video Platform
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Adwords/PPC
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Google Ads
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Bing Ads
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Facebook Advert
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/closeOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Youtube Advert
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/closeOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  E-commerce/Shopping Ads
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                SEO and Lead Generation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  **On-Page SEO
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Website Audit
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Technical Audit
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Keyword Research
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Keyword Target (20)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Content Customization
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  On-page Optimization 👇
                  {'\n'} - Meta Title and Description
                  {'\n'} - H1-H2 Tag
                  {'\n'} - Internal Link Structure
                  {'\n'} - Image Alt tag
                  {'\n'} - XML sitemap and submission
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Schema Markup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Site speed Optimization
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Google Analytics Setup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Tag Manager Setup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Search Console Setup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  **Off-Page SEO
                  {"\n"} - Social Bookmarking (60)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Backlink Creation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Directory Submission (40)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Classified Ads (25)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Article Submission (3)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Guest Blog Posting (5)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Infographics Creation & Posting (7)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                - Web 2.0 Submission (7)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Website Submission (15)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Local Site Directory (25)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Back Link Analysis
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/closeOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Broken Links fix
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkOne.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Reports
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
                ₹9,999 <Text style={styles.textFour}>/ Month</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Social Media Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Facebook Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Instagram Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Twitter Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  LinkedIn Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Video Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  YouTube Marketing
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Instagram Reels
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Facebook Reels
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Other Short Video Platform
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Adwords/PPC
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Google Ads
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Bing Ads
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Facebook Advert
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Youtube Advert
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  E-commerce/Shopping Ads
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                SEO and Lead Generation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  **On-Page SEO
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Website Audit
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Technical Audit
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Keyword Research
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Keyword Target (30)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Content Customization
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  On-page Optimization 👇
                  {'\n'} - Meta Title and Description
                  {'\n'} - H1-H2 Tag
                  {'\n'} - Internal Link Structure
                  {'\n'} - Image Alt tag
                  {'\n'} - XML sitemap and submission
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Schema Markup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Site speed Optimization
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Google Analytics Setup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Tag Manager Setup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Search Console Setup
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  **Off-Page SEO
                  {'\n'} - Social Bookmarking (80)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Backlink Creation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Directory Submission (60)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Classified Ads (35)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Article Submission (5)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Guest Blog Posting (7)
                </Text> 
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Infographics Creation & Posting (11)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                - Web 2.0 Submission (11)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Website Submission (20)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Local Site Directory (30)
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Back Link Analysis
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  - Broken Links fix
                </Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={{ textAlign: 'center' }}>
                <Image source={require("../../../assets/PricingPlans/checkThree.png")} style={{ width: 20, height: 20 }}></Image>
                <Text style={styles.textSix}>
                  Reports
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

const DigitalMarketingPricingPlansScreen = ({navigation}) => {
  return (
    <>
      <NavigationContainer independent={true} style={{ backgroundColor: '#FFFFFF', background: '#FFFFFF' }}>
        <Tab.Navigator /* style={{ paddingTop: StatusBar.currentHeight }} */ 
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
          {/* <Tab.Screen options={{ title: ({ color, focused }) => ( <Ionicons size={25} name={focused ? 'person' : 'person-outline'} color={focused ? 'blue' : '#272727'} /> ) }} component={Profile} name='Profile' /> */}
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
    marginBottom: 10,
    textAlign: 'center'
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

export default DigitalMarketingPricingPlansScreen;