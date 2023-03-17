import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RadioAgencyImg from '../assets/RadioAdvertising/radio-agency.jpg';
import RadioAdvert from '../assets/RadioAdvertising/radio-ads-agency.jpg';
import RadioAds from '../assets/RadioAdvertising/Radio-Ads.jpg';
import RadioAdsOne from '../assets/RadioAdvertising/radio-ads1.jpg';
import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';
import MainFooter from '../common/footer/MainFooter';
import Footer from '../common/footer/Footer';
import ServicesStyles from '../config/services.styles';

const RadioAdvertisement = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
      <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <View style={ServicesStyles.positioning}>
        <Image source={RadioAgencyImg} alt="Radio Advertising" title="Radio Advertising" style={styles.socialMediaAdsImage}></Image>
        <Text style={{ color: '#083041', fontSize: 22, fontWeight: 600, textTransform: 'capitalize', textAlign: 'center', marginBottom: 10 }}>
          Radio Advertising
        </Text>
        <Text style={{ color: '#083041', fontSize: 14, fontWeight: 400, textAlign: 'center', marginBottom: 10 }}>
          Boost Your Business With Our Radio Services!
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
          <Text style={styles.radioAdvertContentText}>
            Radio Advertising Agency
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.radioAdvertSubContentText}>
            The Radio Agency has helped companies and brands put the power of radio to work to increase market share and drive revenue. Whether you’re targeting B2B or B2C, locally or nationally, direct response or branding, we can help tell your story and generate results.
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.radioAdvertSubContentText}>
            Radio advertising is a form of advertising where an advertiser buys commercials/spots to promote their products or services. In Radio FM Advertising, an advertiser pays commercial radio stations for airtime and in exchange, the radio station broadcasts the advertiser’s commercial to its listening audience.
          </Text>
        </View>
        <View style={{ marginBottom: 10, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#FFFFFF' }}>
          <Text style={styles.radioAdvertSubContentText}>
            Mera Digi is one of the top Radio Advertising Agency in India that offers the best FM Advertising (Radio Ads) services. Our young and passionate team works with the aim of creating “unforgettable” ads for clients by making great impact and brand image in listeners mind.
          </Text>
        </View>
        <View style={{ marginBottom: 10, borderColor: '#FFFFFF', padding: 10 }}>
          <Image source={RadioAdvert} alt="Radio Advertising" title="Radio Advertising" style={styles.serviceProviderImage}></Image>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.radioAdvertContentText}>
            Why Radio Advertising :-
          </Text>
        </View>
        <View style={{ marginBottom: 10, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#FFFFFF' }}>
          <Text style={styles.radioAdvertSubContentText}>
            • Radio sells with immediacy, intimacy and it sells everywhere.
            {"\n\n"}• Radio stars in the theater of the mind and escapes advertising clutter.
            {"\n\n"}• Radio is the cost effective medium and a targeted way of advertising.
            {"\n\n"}• Radio is an active media and its reach is nice.
          </Text>
        </View>
        <View style={{ marginBottom: 10, borderColor: '#FFFFFF', padding: 10 }}>
          <Image source={RadioAds} alt="Radio Advertising" title="Radio Advertising" style={styles.serviceProviderImage}></Image>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.radioAdvertContentText}>
            Benefits of FM Radio advertising :-
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.radioAdvertSubContentText}>
            Radio ads reach a large no. of potential consumers and give businesses an easy and cost effective way to get brand recognition as well as measurable results.
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.radioAdvertSubContentText}>
            • Demographic Targeting
            {"\n"}• Radio reaches a mass audience
            {"\n"}• Build-in loyal audience
            {"\n"}• Radio is the Anywhere, Anytime Medium
            {"\n"}• Radio Is the Society’s Pulse
            {"\n"}• Radio is Influential
            {"\n"}• Budget – friendly
          </Text>
        </View>
      </View>
      <View style={styles.marginStyling}>
        <ImageBackground source={RadioAdsOne} alt="Radio Advertising" title="Radio Advertising" style={{ opacity: 0.96 }}>
          <View style={{ marginBottom: 10, marginTop: 30 }}>
            <Text style={styles.radioAdvertisingTextOne}>
              Ready To Get Started?
            </Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.radioAdvertisingTextTwo}>
              Call The Radio Agency and we’ll review the process together and how we’ll deliver results for your business. Your customers are listening. Let your voice be heard.
            </Text>
          </View>
          <View style={styles.twoButtons}>
            <TouchableOpacity style={{ marginBottom: 30 }} onPress={()=>setModalOpen(true)}>
              <LinearGradient 
                  colors={['#00B2FF','#f2295b']}
                  start={{x:1,y:0}}
                  end={{x:0,y:0}}
                  style={styles.bookFreeConsultationCallButton}
                  title="Request For SEO Proposal">
                    <Text style={styles.bookFreeConsultationCallButtonText}>
                      Contact Us
                    </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
        <View style={{ backgroundColor: '#f5f5f5', marginBottom: 10 }}>
            <Text style={{ padding: 10, fontSize: 14, fontWeight: 'bold', color: '#000' }}>
              How to get started Radio Advertisement?
            </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#000' }}>Share your requirements:</Text> Approach our efficient planners and executors and share your requirements for a campaign.
            </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#000' }}>Plan the campaign with us:</Text> We will assist you in terms of choosing radio stations, right ad format, audience reach, frequency of ads, ad length, campaign duration and time slots to have a successful campaign on-air.
            </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#000' }}>Receive the best quotes:</Text> We provide lowest assured rates with best services for Radio Stations across India.
            </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#000' }}>Go Live:</Text> See your brand hit on-air within a bare minimum timeframe and achieve a grandstanding response.
            </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#000' }}>Track a campaign:</Text> Receive log reports during the campaign period.
            </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#000' }}>Receive proof of execution:</Text> Receive Broadcast Certificate after the completion of your campaign.
            </Text>
        </View>
        <View style={{ backgroundColor: '#f5f5f5', marginTop: 10, marginBottom: 10 }}>
            <Text style={{ padding: 10, fontSize: 14, fontWeight: 'bold', color: '#000' }}>
              Why Should I Advertise on Radio?
            </Text>
        </View>
        <View>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
              Advertising on Radio is a fantastic way to grow your business, revenue, and brand awareness. Each radio station has a fixed demographic and market segment. By choosing the station, you can lock in your potential customers and increase the frequency of delivering the ad message.
            </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
            Radio advertising requires less cost compared to other types of media platforms. Advertising in radio requires fewer resources while being able to reach a specific target audience.
          </Text>
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
  );
}

export default RadioAdvertisement;

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
          borderRadius: 8,
          objectFit: 'fill'
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
        radioAdvertContentText:
        {
          color: '#FFFFFF',
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'left',
          paddingLeft: 20
        },
        radioAdvertSubContentText:
        {
          color: '#FFFFFF',
          fontSize: 18,
          textAlign: 'left',
          paddingLeft: 20
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
        },
        radioAdvertisingTextOne:
        {
          color: '#F8F8F8',
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center'
        },
        radioAdvertisingTextTwo:
        {
          color: '#FFF',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center'
        }
        /* radioContainer:
        {
          content: "",
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: -1, 
          background: '#000000'
        }*/
  }
);