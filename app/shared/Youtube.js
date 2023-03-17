import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import MainFooter from '../common/footer/MainFooter';
import Footer from '../common/footer/Footer';
import ServicesStyles from '../config/services.styles';
import { LinearGradient } from 'expo-linear-gradient';
import SocialMediaAdsImg from '../assets/SocialMediaAds/social-media.jpg';
import smadsimg from '../assets/SocialMediaAds/smads.jpg';
import GoogleAdsBgImg from '../assets/GoogleAds/GoogleAdsBgImg.png';
import facebook from '../assets/SocialMediaAds/facebook.png';
import instagram from '../assets/SocialMediaAds/instagram.jpg';
import linkedin from '../assets/SocialMediaAds/linkedin.png';
import pinterest from '../assets/SocialMediaAds/pinterest.png';
import youtube from '../assets/SocialMediaAds/youtube.png';
import twitter from '../assets/SocialMediaAds/twitter.png';
import SocialMediaAdvantages from '../assets/SocialMediaAds/SocialMediaAdvantages.jpg';
import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';

const Youtube = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
   <>
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
      <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <View style={ServicesStyles.positioning}>
        <Image source={SocialMediaAdsImg} alt="Social Media Ads" title="Social Media Ads" style={styles.socialMediaAdsImage}></Image>
        <Text style={{ color: '#083041', fontSize: 22, fontWeight: 600, textTransform: 'capitalize', textAlign: 'center', marginBottom: 10 }}>
            Social Media Marketing Services
        </Text>
        <Text style={{ color: '#083041', fontSize: 14, fontWeight: 400, textAlign: 'center', marginBottom: 10 }}>
            We CREATE, CONNECT & CONVERSE to help brands make a strong SOCIAL MEDIA presence!
        </Text>
       </View> 
       <View style={[styles.twoButtons,styles.marginStyling]}>
        <TouchableOpacity style={{ marginBottom: 20 }} onPress={()=>setModalOpen(true)}>
          <LinearGradient 
              colors={['#00B2FF','#f2295b']}
              start={{x:1,y:0}}
              end={{x:0,y:0}}
              style={styles.bookFreeConsultationCallButton}
              title="Request For SEO Proposal">
                <Text style={styles.bookFreeConsultationCallButtonText}>
                  Consult Now
                </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={ServicesStyles.imageView}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.googleAdsContentText}>
            We take social media off your daily “TO-DO” list so you can focus on doing what you do best – grow your business.
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.googleAdsSubContentText}>
            Grow Your ROI With Social Media Marketing!
          </Text>
        </View>
        <View style={{ marginBottom: 10, borderColor: '#FFFFFF', borderWidth: 1, padding: 10 }}>
          <Image source={smadsimg} alt="Google Ads" title="Google Ads" style={styles.serviceProviderImage}></Image>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.googleAdsContentText}>
            Result Driven Social Media Approach
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.googleAdsSubContentText}>
            Mera Digi is a leading social media marketing agency that focuses on driving impactful business growth through social media services. Whether you are looking to enhance your brand’s social media presence or drive targeted leads through social media advertising, our social media advertising services can help you hit your goals.
          </Text>
        </View>
      </View>
      <View style={styles.marginStyling}>
        <ImageBackground source={GoogleAdsBgImg} alt="GoogleAds" title="GoogleAds"> 
            <View style={{ paddingTop: 20 }}>
                <Text style={{ color: '#083041', fontSize: 22, fontWeight: 'bold', textTransform: 'capitalize', textAlign: 'center' }}>
                    Our Social Media Services
                </Text>
            </View>
            <View style={styles.seoServiceContainer}>
                <View style={[styles.marginStyling,styles.newSmaProp]}>
                    <Image source={facebook} alt="Facebook" title="Facebook" style={styles.googleAdsImageOne} />
                    <Text style={styles.googleAdsContainerText}>
                        FACEBOOK
                    </Text>
                </View>
            </View>
            <View style={styles.seoServiceContainer}>
                <View style={[styles.marginStyling,styles.newSmaProp]}>
                    <Image source={instagram} alt="Instagram" title="Instagram" style={styles.googleAdsImageOne} />
                    <Text style={styles.googleAdsContainerText}>
                        INSTAGRAM
                    </Text>
                </View>
            </View>
            <View style={styles.seoServiceContainer}>
                <View style={[styles.marginStyling,styles.newSmaProp]}>
                    <Image source={linkedin} alt="LinkedIn" title="LinkedIn" style={styles.googleAdsImageOne} />
                    <Text style={styles.googleAdsContainerText}>
                        LINKEDIN
                    </Text>
                </View>
            </View>
            <View style={styles.seoServiceContainer}>
                <View style={[styles.marginStyling,styles.newSmaProp]}>
                    <Image source={pinterest} alt="Pinterest" title="Pinterest" style={styles.googleAdsImageOne} />
                    <Text style={styles.googleAdsContainerText}>
                        PINTEREST
                    </Text>
                </View>
            </View>
            <View style={styles.seoServiceContainer}>
                <View style={[styles.marginStyling,styles.newSmaProp]}>
                    <Image source={youtube} alt="YouTube" title="YouTube" style={styles.googleAdsImageOne} />
                    <Text style={styles.googleAdsContainerText}>
                        YOUTUBE
                    </Text>
                </View>
            </View>
            <View style={[styles.seoServiceContainer,styles.googleAdsMarginBottom]}>
                <View style={[styles.marginStyling,styles.newSmaProp]}>
                    <Image source={twitter} alt="Twitter" title="Twitter" style={styles.googleAdsImageOne} />
                    <Text style={styles.googleAdsContainerText}>
                        TWITTER
                    </Text>
                </View>
            </View>
        </ImageBackground>
      </View>
      <View style={ServicesStyles.imageView}>
        <View style={{ marginBottom: 10, borderColor: '#FFFFFF', borderWidth: 1, padding: 10 }}>
          <Image source={SocialMediaAdvantages} alt="Social Media Advantages" title="Social Media Advantages" style={styles.serviceProviderImage}></Image>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.googleAdsContentText}>
            What are the advantages of social media marketing?
          </Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.googleAdsSubContentText}>
            To make the most of social media marketing, you must hire one of the best social media marketing companies in India. When done right, social media marketing can have the following advantages:
          </Text>
        </View>
        <View style={{ marginBottom: 20, paddingLeft: 20 }}>
            <Text style={styles.seoSubContentText}>
                • Increased Brand Awareness
                {"\n\n"}• More Inbound Traffic
                {"\n\n"}• Higher Conversion Rates
                {"\n\n"}• Better Customer Satisfaction
                {"\n\n"}• Improved Brand Loyalty
            </Text>
        </View>
        <View style={styles.twoButtons}>
            <TouchableOpacity style={{ marginBottom: 0 }} onPress={()=>setModalOpen(true)}>
                <LinearGradient 
                    colors={['#00B2FF','#f2295b']}
                    start={{x:1,y:0}}
                    end={{x:0,y:0}}
                    style={styles.bookFreeConsultationCallButton}
                    title="Request For SEO Proposal">
                        <Text style={styles.bookFreeConsultationCallButtonText}>
                            Consult Now
                        </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.marginStyling}>
        <MainFooter />
      </View>
      <View style={styles.marginStyling}>
        <Footer/>
      </View>
      </SafeAreaView>
    </ScrollView>
   </>
  )
};

export default Youtube;

const styles = StyleSheet.create(
{
      container:
      {
        width: '100%', 
        height: 'auto', 
        borderRadius: 0,
        paddingTop: 10,
        backgroundColor: '#FFFFFF'
      },
      twoButtons:
      {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center',
        backgroundColor: 'transparent',
        padding: 0
      },
      marginStyling:
      {
        matrginBottom: 10,
        marginTop: 0
      },
      googleAdsBgImg:
      {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      marginTopStyling:
      {
        marginTop: 10
      },
      bookFreeConsultationCallButton:
      {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14, 
        paddingHorizontal: 24,
        backgroundColor: 'transparent',
        borderRadius: 9
      },
      bookFreeConsultationCallButtonText:
      {
        fontSize: 16,
        fontWeight: 600,
        fontWeight: 'normal',
        letterSpacing: 0.25,
        color: '#FFFFFF',
        backgroundColor: 'transparent',
        textAlign: 'center'
      },
      contactUsButton: 
      {
        fontSize: 16,
        fontWeight: 'normal',
        backgroundColor: '#409EFF',
        color: '#ffffff',
        borderRadius: 9,
        textAlign: 'center',
        textAlignVertical: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingVertical: 10, 
        paddingHorizontal: 10,
        marginBottom: 20
      },
      contactUsButtonText: 
      {
        color: "#ffffff",
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "center",
        letterSpacing: 0.4
      },
      serviceProviderImage:
      {
        width: '100%',
        height: 400,
        borderRadius: 8
      },
      seoImagePadding:
      {
        padding: 10,
        marginBottom: 10
      },
      seoServicesTitleText:
      {
        color: '#083041',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'center',
        letterSpacing: 0
      },
      googleAdsContainer:
      {
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 0,
        borderColor: '#E6EAEC'
      },
      googleAdsImageOne:
      {
        objectFit: 'fill',
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: 30,
        marginRight: 60,
        marginBottom: 5,
        width: 60,
        height: 60
      },
      seoServiceContainerText:
      {
        color: '#083041',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'left',
        letterSpacing: 0,
        marginBottom: 10
      },
      seoServicesContentOne:
      {
        color: '#083041',
        fontSize: 18,
        textAlign: 'left'
      },
      seoMarginBottom:
      {
        marginBottom: 10
      },
      googleAdsSubContentText:
      {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center'
      },
      seoWhatWeDoText:
      {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left'
      },
      googleAdsContentText:
      {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      googleAdsContainerText:
      {
        color: '#096991',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0,
        marginBottom: 0,
        verticalAlign: 'middle',
        textAlignVertical: 'center',
        textAlign: 'left'
      },
      googleAdsContentOne:
      {
        color: '#083041',
        fontSize: 20,
        textAlign: 'center'
      },
      seoServiceContainer:
      {
        margin: 20,
        marginBottom: 0,
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#E6EAEC'
      },
      serviceProviderImageOne:
      {
        width: 80,
        height: 80,
        objectFit: 'fill',
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: 0,
        marginRight: 'auto',
        marginBottom: 10
      },
      googleAdsContainerTextWithDifferentColor:
      {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'center',
        letterSpacing: 0,
        marginBottom: 0
      },
      googleAdsMarginBottom:
      {
        marginBottom: 20
      },
      googleAdsContentTwo:
      {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
      },
      googleAdsContactUsButtonOne:
      {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingVertical: 14, 
        paddingHorizontal: 7,
        backgroundColor: '#7AA5FF',
        borderRadius: 9,
        borderColor: '#FFF',
        borderWidth: 1,
        width: 160
      },
      googleAdsContactUsButtonTextOne:
      {
        fontSize: 16,
        fontWeight: 600,
        fontWeight: 'normal',
        letterSpacing: 0.25,
        color: '#0C0101',
        backgroundColor: 'transparent',
        textAlign: 'center'
      },
      containerBorders:
      {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        margin: 6,
        padding: 10
      },
      seoSubContentText:
      {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold'
      },
      googleAdsNewButton:
      {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14, 
        paddingHorizontal: 24,
        backgroundColor: 'transparent',
        borderRadius: 9,
        width: 263,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      googleAdsNewButtonText:
      {
        fontSize: 16,
        fontWeight: 600,
        fontWeight: 'normal',
        letterSpacing: 0.25,
        color: '#FFFFFF',
        backgroundColor: 'transparent',
        textAlign: 'center'
      },
      socialMediaAdsImage:
      {
        width: 400,
        height: 300,
        objectFit: 'contain'
      },
      newSmaProp:
      {
        flexDirection: 'row'
      }
}
);