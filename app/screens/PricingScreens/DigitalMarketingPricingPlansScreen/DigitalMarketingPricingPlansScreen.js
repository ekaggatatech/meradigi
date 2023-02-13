import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
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
            <View style={styles.line}>
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
                <Text style={styles.textSix}>
                  <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Facebook Marketing
                </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Instagram Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Twitter Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>LinkedIn Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Video Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>YouTube Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Instagram Reels
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Facebook Reels
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Other Short Video Platform
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Adwords/PPC
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Google Ads
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Bing Ads
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Facebook Advert
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Youtube Advert
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>E-commerce/Shopping Ads
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>SEO and Lead Generation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>**On-Page SEO
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Website Audit
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Technical Audit
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Keyword Research
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Keyword Target (10)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Content Customization
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>On-page Optimization 👇
                - Meta Title and Description
                - H1-H2 Tag
                - Internal Link Structure
                - Image Alt tag
                - XML sitemap and submission
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Schema Markup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Site speed Optimization
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Google Analytics Setup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Tag Manager Setup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Search Console Setup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>**Off-Page SEO
                - Social Bookmarking (40)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Backlink Creation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Directory Submission (20)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Classified Ads (15)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Article Submission
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Guest Blog Posting
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Infographics Creation & Posting (3)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Web 2.0 Submission
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Website Submission
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Local Site Directory (10)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Back Link Analysis
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>- Broken Links fix
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                <Image source={require("../../../assets/PricingPlans/check.png")} style={{ width: 20, height: 20 }}></Image>Reports
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
        {/* </ScrollView>  */}
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
                ₹7,999 <Text style={styles.textFour}>/ Month</Text>
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Social Media Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Facebook Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Instagram Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Twitter Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                LinkedIn Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Video Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                YouTube Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Instagram Reels
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Facebook Reels
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Other Short Video Platform
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Adwords/PPC
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Google Ads
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Bing Ads
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Facebook Advert
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Youtube Advert
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                E-commerce/Shopping Ads
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                SEO and Lead Generation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                **On-Page SEO
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Website Audit
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Technical Audit
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Keyword Research
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Keyword Target (20)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Content Customization
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                On-page Optimization 👇
                - Meta Title and Description
                - H1-H2 Tag
                - Internal Link Structure
                - Image Alt tag
                - XML sitemap and submission
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Schema Markup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Site speed Optimization
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Google Analytics Setup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Tag Manager Setup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Search Console Setup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                **Off-Page SEO
                - Social Bookmarking (60)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Backlink Creation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Directory Submission (40)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Classified Ads (25)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Article Submission (3)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Guest Blog Posting (5)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Infographics Creation & Posting (7)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
               - Web 2.0 Submission (7)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Website Submission (15)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Local Site Directory (25)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Back Link Analysis
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Broken Links fix
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Reports
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
          <View style={styles.line}>
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
              <Text style={styles.textSix}>
                Facebook Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Instagram Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Twitter Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                LinkedIn Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Video Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                YouTube Marketing
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Instagram Reels
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Facebook Reels
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Other Short Video Platform
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Adwords/PPC
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Google Ads
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Bing Ads
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Facebook Advert
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Youtube Advert
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                E-commerce/Shopping Ads
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                SEO and Lead Generation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                **On-Page SEO
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Website Audit
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Technical Audit
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Keyword Research
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Keyword Target (30)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Content Customization
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                On-page Optimization 👇
                - Meta Title and Description
                - H1-H2 Tag
                - Internal Link Structure
                - Image Alt tag
                - XML sitemap and submission
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Schema Markup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Site speed Optimization
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Google Analytics Setup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Tag Manager Setup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Search Console Setup
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                **Off-Page SEO
                - Social Bookmarking (80)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textFive}>
                Backlink Creation
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Directory Submission (60)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Classified Ads (35)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Article Submission (5)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Guest Blog Posting (7)
              </Text> 
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Infographics Creation & Posting (11)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
               - Web 2.0 Submission (11)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Website Submission (20)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Local Site Directory (30)
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Back Link Analysis
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                - Broken Links fix
              </Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.textSix}>
                Reports
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

const DigitalMarketingPricingPlansScreen = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator /* style={{ paddingTop: StatusBar.currentHeight }} */ 
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
          {/* <Tab.Screen options={{ title: ({ color, focused }) => ( <Ionicons size={25} name={focused ? 'person' : 'person-outline'} color={focused ? 'blue' : '#272727'} /> ) }} component={Profile} name='Profile' /> */}
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
    textAlign: 'center'
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
    marginBottom: 20,
    textAlign: 'center'
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

export default DigitalMarketingPricingPlansScreen;