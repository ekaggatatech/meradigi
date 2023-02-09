import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import ServicesStyles from '../config/services.styles';
import buttonStyling from '../config/buttonStyling';
import digitalMarketing from '../config/digitalMarketing.styles';
import DigitalMarketingCardViewScreen from '../cards/DigitalMarketingCardViewScreen';
import DigitalMarketingDataCard from '../cards/DigitalMarketingDataCard';
import GetInTouchWithUsForm from '../common/footer/GetInTouchWithUsForm';
import MainFooter from '../common/footer/MainFooter';
import Footer from '../common/footer/Footer';
import { LinearGradient } from 'expo-linear-gradient';

const DigitalMarketing = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={ServicesStyles.container}>
        <View style={{ marginBottom: 20 }}>
          <Image style={ServicesStyles.webDevImage} source={require("../assets/DigitalMarketing/socialmedia.jpg")}/>
        </View>
        <View style={ServicesStyles.hedingButton}>
          <View style={{ marginBottom: 10 }}>
            <Text style={ServicesStyles.webText}>Digital Marketing Solutions</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={ServicesStyles.webText}>
              Our best-in-class Business solution, 
            </Text>
            <Text style={ServicesStyles.webText}>
              To le you to grow business higher!
            </Text>
          </View>
          <View style={{ marginBottom: 0, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', flexDirection: 'row' }}>
            <Image source={require("../assets/DigitalMarketing/BingAds.png")} style={{ width: 90, height: 90 }} />
            <Image source={require("../assets/DigitalMarketing/Instagram.png")} style={{ width: 90, height: 90 }} />
            <Image source={require("../assets/DigitalMarketing/GoogleAds.png")} style={{ width: 90, height: 90 }} />
            <Image source={require("../assets/DigitalMarketing/GoogleAnalytics.png")} style={{ width: 90, height: 90 }} />
          </View>
          <View style={{ marginBottom: 0, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', flexDirection: 'row' }}>
            <Image source={require("../assets/DigitalMarketing/YouTubeAds.png")} style={{ width: 90, height: 90 }} />
            <Image source={require("../assets/DigitalMarketing/LinkedInAds.png")} style={{ width: 90, height: 90 }} />
            <Image source={require("../assets/DigitalMarketing/FacebookAds.png")} style={{ width: 90, height: 90 }} />
          </View>
          <View style={digitalMarketing.areYouReadyToGrowYourBusinessBox}>
            <TouchableOpacity>
              <LinearGradient 
              colors={['#C6DDFF','#74F6FF']}
              start={{x:1,y:0}}
              end={{x:1,y:1}}
              style={digitalMarketing.areYouReadyToGrowYourBusinessBoxCard}>
                  <View style={digitalMarketing.areYouReadyToGrowYourBusinessBoxView}>
                      <Image style={digitalMarketing.areYouReadyToGrowYourBusinessBoxCardImage} source={require("../assets/DigitalMarketing/rocket.png")}></Image>
                      <Text style={digitalMarketing.areYouReadyToGrowYourBusinessBoxText}>ARE YOU READY TO GROW YOUR BUSINESS</Text>
                  </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View>
            <DigitalMarketingCardViewScreen />
          </View>
          <View style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <Text style={digitalMarketing.digitalMarketingOurServicesText}>
              Our Services
            </Text>
          </View>
          <View style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <Text style={digitalMarketing.digitalMarketingOurServicesSubText}>
              Ekaggata Technologies provides digital marketing services across the globe. Our services ensures real growth for our clients. We provide digital marketing services across industries i.e. healthcare, IT and education. We have customized solutions for small businesses as well as for large enterprises.
            </Text>
          </View>
          <View style={{ marginBottom: 0, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <Text style={digitalMarketing.digitalMarketingOurServicesSubText}>
              We offer high quality scalable digital marketing solutions in Website designing, Web development, SEO, Content Writing, Social Media Management, Graphic Designing. Dedicated teams work on specific task to ensure our work brings immense value in our clients growth.
            </Text>
          </View>
          <View style={{ marginBottom: 0, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <Image source={require("../assets/DigitalMarketing/OurServices.jpg")} />
          </View>
          <View>
            <DigitalMarketingDataCard />
          </View>
          <View style={[buttonStyling.twoButtons,buttonStyling.marginStyling,buttonStyling.marginTopStyling]}>
            <TouchableOpacity onPress={() => navigation.navigate('Pricing Plans')} title="Choose Your Plan">
              <View style={buttonStyling.contactUsButton}>
                <Text style={buttonStyling.contactUsButtonText}>Choose Your Plan</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <GetInTouchWithUsForm/>
      </View>
      <View>
        <MainFooter/>
      </View>
      <View>
        <Footer/>
      </View>
    </ScrollView>
  );
}

export default DigitalMarketing;