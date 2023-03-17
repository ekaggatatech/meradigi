import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BackgroundImage } from '../assets/MobileAppDevelopment/bgImg.png';
import ServicesStyles from '../config/services.styles';
import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';
import MobileAppDevelopmentCards from '../cards/MobileAppDevelopmentCards';
import MobileAppDevelopmentSpecialFeaturesCards from '../cards/MobileAppDevelopmentSpecialFeaturesCards';
import MainFooter from '../common/footer/MainFooter';
import Footer from '../common/footer/Footer';

const MobileApp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [colour, setColour] = useState({ color: '#fa346e' });
  function GetColor()
  {
    setColour({ color: '#000000' });
  };
  return (
  <>
    <ScrollView nestedScrollEnabled={true}>
    <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <View style={ServicesStyles.container}>
        <View style={ServicesStyles.mainMarginBottomProp}>
          <Image 
            style={ServicesStyles.webDevImage} 
            source={require('../assets/mobileApp/app_5.png')}
            alt="MobileAppDevelopment"
            title="MobileAppDevelopment">
          </Image>
        </View>
        <View style={ServicesStyles.mainMarginBottomProp}>
          <Text style={ServicesStyles.erpWebText}>
            Mobile App Development
          </Text>
          <Text style={ServicesStyles.webText}>
            # Amazing Feature For
          </Text>
          <Text style={ServicesStyles.erpWebText}>
            Mobile App for your Business
          </Text>
        </View>
        <View style={ServicesStyles.mainMarginBottomProp}>
          <Text style={ServicesStyles.mobileAppText}>
            At Meradigi, we provide full-cycle mobile app development services,which include planning,developing,integrating,and managing. 
            {"\n"}We offer end-to-end mobile application development solutions across many sectors,whether it be a customer-oriented or enterprise-level application.
            {"\n"}Create an easy-to-use app for tablets,smartphones,or both to accelerate the growth of your company. 
            By creating B2B,B2C,and C2C applications,we assist you in streamlining the difficulties of doing business.
          </Text>
        </View>
        <View style={ServicesStyles.mainMarginBottomProp}>
          <Image
            style={ServicesStyles.mobileAppDevelopmentImageContainer}
            source={require('../assets/MobileAppDevelopment/landing-app-layout-vector.png')}
            alt="MobileAppforyourBusiness"
            title="MobileAppforyourBusiness">
          </Image>
        </View>
        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
          <Text style={ServicesStyles.mobileAppTextOne}>
            Our Mobile
            <Text 
              style={[ServicesStyles.mobileAppTextTwo, colour]} 
              onPress={GetColor}> 
                App
            </Text> 
            Development Services
          </Text>
        </View>
        <MobileAppDevelopmentCards />
        <View style={[ServicesStyles.twoButtons,ServicesStyles.marginStyling]}>
          <TouchableOpacity onPress={()=>setModalOpen(true)} title="Contact Us" style={{ marginBottom: 10 }}>
            <View style={ServicesStyles.contactUsButton}>
              <Text style={ServicesStyles.contactUsButtonText}>
                Contact Us
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={ServicesStyles.mobileAppDevelopmentNewBg}>
          <View style={{ marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={ServicesStyles.mainMarginBottomProp}>
                    <Text style={ServicesStyles.mobileAppDevelopmentTitle}>
                      165+
                    </Text>
                    <Text style={ServicesStyles.mobileAppDevelopmentSubContent}>
                      Support Given
                    </Text>
                  </View>
          </View>
          <View style={{ marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={ServicesStyles.mainMarginBottomProp}>
                    <Text style={ServicesStyles.mobileAppDevelopmentTitle}>
                      254+
                    </Text>
                    <Text style={ServicesStyles.mobileAppDevelopmentSubContent}>
                      Clients Rating
                    </Text>
                  </View>
          </View>
          <View style={{ marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={ServicesStyles.mainMarginBottomProp}>
                    <Text style={ServicesStyles.mobileAppDevelopmentTitle}>
                      2 M+
                    </Text>
                    <Text style={ServicesStyles.mobileAppDevelopmentSubContent}>
                      Money Saved
                    </Text>
                  </View>
          </View>
          <View style={{ marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <View>
                    <Text style={ServicesStyles.mobileAppDevelopmentTitle}>
                      145+
                    </Text>
                    <Text style={ServicesStyles.mobileAppDevelopmentSubContent}>
                      Happy Clients
                    </Text>
                  </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#F7F9FB', paddingTop: 10 }}>
          <View style={ServicesStyles.mainMarginBottomProp}>
            <Text style={ServicesStyles.mobileAppDevelopmentOurSpecialFaturesTitleText}>
              Our Special 
              <Text 
              style={[ServicesStyles.mobileAppTextTwo, colour]} 
              onPress={GetColor}> 
                Features
              </Text>
            </Text>
            <Text style={ServicesStyles.mobileAppDevelopmentOurSpecialFaturesSubTitleText}>
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise.
            </Text>
          </View>
          <MobileAppDevelopmentSpecialFeaturesCards />
          <View 
            style={{ 
              backgroundColor: '#fa346e', 
              paddingTop: 10, 
              paddingBottom: 10, 
              backgroundImage: `url(${BackgroundImage})`,
              backgroundPosition: 'bottom left',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
              <View style={ServicesStyles.mainMarginBottomProp}>
                <Text style={ServicesStyles.mobileAppDevelopmentNewTextOne}>
                  Download Meradigi App!
                </Text>
                <Text style={ServicesStyles.mobileAppDevelopmentNewTextTwo}>
                  Download our App to know more about our services. Download it from above links  
                </Text>
              </View>
              <View>
                <Image 
                  style={[ServicesStyles.mobileAppDevelopmentButtonImages,ServicesStyles.mainMarginBottomProp]}
                  source={require('../assets/MobileAppDevelopment/Google-play.png')}
                  alt="GooglePlayStore"
                  title="GooglePlayStore">
                </Image>
                <Image 
                  style={ServicesStyles.mobileAppDevelopmentButtonImages}
                  source={require('../assets/MobileAppDevelopment/App-store-Button.png')}
                  alt="AppStore"
                  title="AppStore">
                </Image>
              </View>
              <View style={ServicesStyles.mainMarginBottomProp}>
                <Image 
                  style={ServicesStyles.mobileAppDevelopmentDownloadAppImage}
                  source={require('../assets/MobileAppDevelopment/Download_img.png')}
                  alt="DownloadMeradigiApp"
                  title="DownloadMeradigiApp">
                </Image>
              </View>
          </View>
        </View>
      </View>
      <MainFooter/>
      <Footer/>
    </ScrollView>
  </>
  );
}

export default MobileApp;