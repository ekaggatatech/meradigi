import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AnnualMaintenancePlan from '../assets/AnnualMaintenancePlan/MaintenanceBackgroundImage.jpg';
import RankMyWebsiteOnGoogle from '../assets/AnnualMaintenancePlan/Rank-my-website-on-google.png';
import GetABestHostingPlan from '../assets/AnnualMaintenancePlan/Get-a-best-hosting-plan.png';
import IWantAnAnnualMaintenancePlan from '../assets/AnnualMaintenancePlan/I-want-an-annual-maintanance-plan.png';
import HireADeveloper from '../assets/AnnualMaintenancePlan/Hire-a-developer.png';
import PopularOnYoutube from '../assets/AnnualMaintenancePlan/Popular-on-youtube.png';
import MakeMyVideosPopularOnFacebook from '../assets/AnnualMaintenancePlan/facebook(1).png';
import MakeMyVideosPopularOnInstagram from '../assets/AnnualMaintenancePlan/popular-on-Instagram-e1665317375928.png';
import MakeMePopularOnYoutube from '../assets/AnnualMaintenancePlan/Advertise-on-Radio.png';
import MakeMyProductFamous from '../assets/AnnualMaintenancePlan/make-my-product-famous.png';
import WhyChooseUs from '../assets/AboutUs/Why.jpg.webp';
import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';
import MainFooter from '../common/footer/MainFooter';
import Footer from '../common/footer/Footer';

const AudioVideoOnWebsite = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <ScrollView nestedScrollEnabled={true} style={styles.container}>
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', marginTop: 0, paddingTop: 0 }}>
          <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
          <View style={styles.marginStylingNew}>
            <ImageBackground source={AnnualMaintenancePlan} alt="Radio Advertising" title="Radio Advertising">
              <View style={{ marginBottom: 30, marginTop: 40 }}>
                <Text style={styles.radioAdvertisingTextOne}>
                  We’re A Leader In Tech-Enabled Digital Marketing Solutions
                </Text>
              </View>
              <View style={styles.twoButtons}>
                <TouchableOpacity style={{ marginBottom: 40 }} onPress={()=>setModalOpen(true)}>
                  <LinearGradient 
                      colors={['#7200FF','#00CDFF']}
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
          <View style={styles.marginStylingNew}>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Image source={RankMyWebsiteOnGoogle} alt="Rank My Website On Google" title="Rank My Website On Google" style={{ width: 'auto', height: 300 }}></Image>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginLeft: 10, marginBottom: 0 }}>           
                Rank My Website On Google
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 10, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                We take you to the top of the Google Ranking.
                Top Google rankings are a pinnacle of online business success.
                The first result on Google gets 31.7 percent of all clicks while results on the second page receive just 78 percent of clicks.
                Our strong experts can design a plan for your business to bring you to top of the search page.
                Relax while we work for you and take your business to the greater heights. We will bring massive traffic to your websites.
              </Text>
            </View>
          </View>
          <View style={styles.marginStylingNew}>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Image source={GetABestHostingPlan} alt="Get A Best Hosting Plan" title="Get A Best Hosting Plan" style={{ width: 'auto', height: 340 }}></Image>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 0, marginLeft: 10 }}>           
                Get A Best Hosting Plan
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                We provide free web hosting for our clients. Free hosting plan comes as part of the maintenance.
                Our team of experts provide your products seamless performance. We also handle any kind of hosting issues.
              </Text>
            </View>
          </View>
          <View style={styles.marginStylingNew}>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Image source={IWantAnAnnualMaintenancePlan} alt="I Want An Annual Maintenance Plan" title="I Want An Annual Maintenance Plan" style={{ width: 'auto', height: 280 }}></Image>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 0, marginLeft: 10 }}>           
                I Want An Annual Maintenance Plan
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 10, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                Looking for a maintenance package. We provide annual maintenance for all kind of Digital Products.
              </Text>
            </View>
          </View>
          <View style={styles.marginStylingNew}>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Image source={HireADeveloper} alt="Hire A Developer" title="Hire A Developer" style={{ width: 'auto', height: 340 }}></Image>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 0, marginLeft: 10 }}>           
                Hire A Developer
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 10, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                Hire a qualified and experienced developer for your projects. We provide developers for all technologies.
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0, display: 'flex', justifyContent: 'center', marginLeft: 10, marginRight: 10 }}>
              <View style={{ width: '100%', backgroundColor: '#000', marginBottom: 10, padding: 15, flexDirection: 'row' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'normal', textAlign: 'left', textAlignVertical: 'center', verticalAlign: 'middle', alignItems: 'center' }}>
                    HTML and CSS
                  </Text>
                  <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'normal', textAlign: 'right', textAlignVertical: 'center', verticalAlign: 'middle', alignItems: 'center', marginLeft: 198 }}>
                    100%
                  </Text>
              </View>
              <View style={{ width: '100%', backgroundColor: '#000', marginBottom: 10, padding: 15, flexDirection: 'row' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'normal', textAlign: 'left', textAlignVertical: 'center', verticalAlign: 'middle', alignItems: 'center' }}>
                  JavaScript
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'normal', textAlign: 'right', textAlignVertical: 'center', verticalAlign: 'middle', alignItems: 'center', marginLeft: 230 }}>
                  100%
                </Text>
              </View>
              <View style={{ width: '100%', backgroundColor: '#000', marginBottom: 10, padding: 15, flexDirection: 'row' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'normal', textAlign: 'left', textAlignVertical: 'center', verticalAlign: 'middle', alignItems: 'center' }}>
                  Ajax
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'normal', textAlign: 'right', textAlignVertical: 'center', verticalAlign: 'middle', alignItems: 'center', marginLeft: 275 }}>
                  100%
                </Text>
              </View>
              <View style={{ width: '100%', backgroundColor: '#000', marginBottom: 10, padding: 15, flexDirection: 'row' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'normal', textAlign: 'left', textAlignVertical: 'center', verticalAlign: 'middle', alignItems: 'center' }}>
                  PHP
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'normal', textAlign: 'right', textAlignVertical: 'center', verticalAlign: 'middle', alignItems: 'center', marginLeft: 275 }}>
                  100%
                </Text>
              </View>
              <View style={{ width: '100%', backgroundColor: '#000', padding: 15, flexDirection: 'row' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'normal', textAlign: 'left', textAlignVertical: 'center', verticalAlign: 'middle', alignItems: 'center' }}>
                  WordPress
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'normal', textAlign: 'right', textAlignVertical: 'center', verticalAlign: 'middle', alignItems: 'center', marginLeft: 230 }}>
                  100%
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.marginStylingNew}>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Image source={PopularOnYoutube} alt="Popular On Youtube" title="Popular On Youtube" style={{ width: 'auto', height: 280 }}></Image>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 0, marginLeft: 10 }}>           
                Add Audio/Video Feature In My Website/App
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                Do you want your website/app to become audio and video compatible? 
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }}>
                We can help you!
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 10, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                We provide audio/video integration for all kind of products.
              </Text>
            </View>
          </View>
          <View style={styles.marginStylingNew}>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0, display: 'flex', justifyContent: 'center', marginLeft: 10, marginRight: 10 }}>
              <Image source={MakeMyVideosPopularOnFacebook} alt="Make My Videos Popular On Facebook" title="Make My Videos Popular On Facebook" style={{ width: 'auto', height: 380 }}></Image>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 0, marginLeft: 10 }}>           
                Make My Videos Popular On Facebook
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                We can increase your views significantly by millions on a click.
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }}>
                Become a Facebook star very quickly.
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 10, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                Our Social media management team help you create, publish your content and increasing views. 
              </Text>
            </View>
          </View>
          <View style={styles.marginStylingNew}>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0, display: 'flex', justifyContent: 'center', marginLeft: 10, marginRight: 10 }}>
              <Image source={MakeMyVideosPopularOnInstagram} alt="Make My Videos Popular On Instagram" title="Make My Videos Popular On Instagram" style={{ width: 'auto', height: 280 }}></Image>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 0, marginLeft: 10 }}>           
                Make My Videos Popular On Instagram
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                Everyone wants to become a Reel Star and we help you achieve that.
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                Our team provides dedicated services to increase your Reel views significantly.
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 10, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }}>
                Becoming a Star is a click away !
              </Text>
            </View>
          </View>
          <View style={styles.marginStylingNew}>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0, display: 'flex', justifyContent: 'center', marginLeft: 10, marginRight: 10 }}>
              <Image source={MakeMePopularOnYoutube} alt="Make Me Popular On Youtube" title="Make Me Popular On Youtube" style={{ width: 'auto', height: 280 }}></Image>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 0, marginLeft: 10 }}>           
                Make Me Popular On Youtube
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                Do you struggle to generate views on your Youtube Videos?
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                We have the right solution for you. Our very strong Social media team increases your views by millions.
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 10, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                All you need to do is to connect with us.
              </Text>
            </View>
          </View>
          <View style={styles.marginStylingNew}>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0, display: 'flex', justifyContent: 'center', marginLeft: 10, marginRight: 10 }}>
              <Image source={MakeMyProductFamous} alt="Make My Product Famous" title="Make My Product Famous" style={{ width: 'auto', height: 280 }}></Image>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginBottom: 0, marginLeft: 10 }}>           
                Make My Product Famous
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                Are you struggling to increase your product sales?
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                We support everyone from each segment.
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }}>
                Our customized plans will help you generate Growth like no other. 
              </Text>
            </View>
            <View style={{ marginTop: 0, paddingTop: 0, marginBottom: 10, paddingBottom: 0 }}>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginLeft: 10 }}>
                A strong support team with a customized plan for your every product growth story.
              </Text>
            </View>
          </View>
          <View style={styles.annualMaintenanceImageView}>
            <View style={{ marginBottom: 10, borderColor: '#FFFFFF', paddingLeft: 10, paddingRight: 10 }}>
              <Image source={WhyChooseUs} alt="Why Choose Us?" title="Why Choose Us?" style={styles.serviceProviderImage}></Image>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.radioAdvertContentText}>
                We’re A Leader In Tech-Enabled Digital Marketing Solutions
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.radioAdvertSubContentText}>
                Mera Digi is a tech-enabled digital marketing solutions provider, and we create custom strategies for each of our clients based on their needs and goals.
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.radioAdvertSubContentText}>
                We plan customized campaigns to meet your organizational requirements and campaign goals.
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.radioAdvertSubContentText}>
                As a full service digital agency, we deliver solutions across Adwords, Social media marketing, Search engine optimization (SEO), Radio Advertisement, Celebrity Marketing, and Content marketing services.
              </Text>
            </View>
          </View>
          <View style={styles.marginStylingNew}>
            <MainFooter />
          </View>
          <View style={styles.marginStylingNew}>
            <Footer/>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create
(
{
      container:
      {
        width: '100%', 
        height: 'auto', 
        borderRadius: 0,
        paddingTop: 0,
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
      marginStylingNew:
      {
        matrginBottom: 0,
        marginTop: 0,
        paddingTop: 0
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
        fontWeight: 'bold',
        fontWeight: 'bold',
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
      newServiceProviderImage:
      {
        width: '100%',
        height: 400,
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
        fontSize: 22,
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
      },
      annualMaintenanceImageView:
      {
        backgroundColor: '#000000',
        paddingTop: 20,
        paddingBottom: 20
      }
}
);

export default AudioVideoOnWebsite;