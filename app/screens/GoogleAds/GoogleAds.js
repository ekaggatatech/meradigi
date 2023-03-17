import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, ImageBackground } from "react-native";
import MainFooter from '../../common/footer/MainFooter';
import Footer from '../../common/footer/Footer';
import ServicesStyles from '../../config/services.styles';
import { LinearGradient } from 'expo-linear-gradient';
import glads from '../../assets/GoogleAds/GoogleAds.webp';
import target from '../../assets/GoogleAds/target.png';
import diagram from '../../assets/GoogleAds/diagram.png';
import hand from '../../assets/GoogleAds/hand.png';
import googleAdsLogo from '../../assets/GoogleAds/GoogleAdsLogo.png';
import GoogleAdsBgImg from '../../assets/GoogleAds/GoogleAdsBgImg.png';
import ConsultNowModalScreen from '../../modals/ConsultNowModalScreen';

const GoogleAds = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
   <>
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
      <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <View style={ServicesStyles.positioning}>
        <Text style={{ color: '#083041', fontSize: 22, fontWeight: 600, textTransform: 'capitalize', textAlign: 'center', marginBottom: 10 }}>
            Google Ads Management Services
        </Text>
        <Text style={{ color: '#083041', fontSize: 14, fontWeight: 400, textAlign: 'center', marginBottom: 10 }}>
            Meradigi Google Adwords professionals Make Your Google Ads Campaigns Successful!
        </Text>
       </View> 
       <View style={[styles.twoButtons,styles.marginStyling]}>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={()=>setModalOpen(true)}>
          <LinearGradient 
              colors={['#00B2FF','#f2295b']}
              start={{x:1,y:0}}
              end={{x:0,y:0}}
              style={styles.bookFreeConsultationCallButton}
              title="Request For SEO Proposal">
                <Text style={styles.bookFreeConsultationCallButtonText}>
                  Ask For Quote
                </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={[ServicesStyles.imageView,styles.seoImagePadding]}>
        <View style={{ marginBottom: 10, borderColor: '#FFFFFF', borderWidth: 1, padding: 10 }}>
          <Image source={glads} alt="Google Ads" title="Google Ads" style={styles.serviceProviderImage}></Image>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.googleAdsContentText}>
            Why Google Ads
          </Text>
        </View>
        <View>
          <Text style={styles.googleAdsSubContentText}>
            Google Ads is the most powerful advertising platform to drive more leads & increase sales.
          </Text>
        </View>
      </View>
      <View style={styles.marginStyling}>
        <ImageBackground source={GoogleAdsBgImg} alt="GoogleAds" title="GoogleAds">
            <View style={styles.googleAdsContainer}>
                <View style={styles.marginStyling}>
                    <Image source={target} alt="On-Page SEO" title="On-Page SEO" style={styles.googleAdsImageOne} />
                </View>
                <View style={styles.marginStyling}>
                    <Text style={styles.googleAdsContainerText}>
                        Target Potential Customers
                    </Text>
                </View>
                <View>
                    <Text style={styles.googleAdsContentOne}>
                        Get in front of the most involved potential customers when and where they are actively searching keywords correlated to your business.
                    </Text>
                </View>
            </View>
            <View style={styles.googleAdsContainer}>
                <View style={styles.marginStyling}>
                    <Image source={diagram} alt="Off-Page SEO" title="Off-Page SEO" style={styles.googleAdsImageOne} />
                </View>
                <View style={styles.marginStyling}>
                    <Text style={styles.googleAdsContainerText}>
                        Easily Get Fast Results
                    </Text>
                </View>
                <View>
                    <Text style={styles.googleAdsContentOne}>
                        Measure everything about your Google Ads quickly. This involves your advertising costs, profits, Ad clicks, website views, landing page visits.
                    </Text>
                </View>
            </View>
            <View style={[styles.googleAdsContainer,styles.seoMarginBottom]}>
                <View style={styles.marginStyling}>
                    <Image source={hand} alt="Technical SEO" title="Technical SEO" style={styles.googleAdsImageOne} />
                </View>
                <View style={styles.marginStyling}>
                    <Text style={styles.googleAdsContainerText}>
                        Cost Effective & High Returns
                    </Text>
                </View>
                <View>
                    <Text style={styles.googleAdsContentOne}>
                        Google advertising is low cost compared to other kinds of marketing. It is undoubtedly one of the cost effective and high ways with a high ROI.
                    </Text>
                </View>
            </View>
        </ImageBackground>
      </View>
      <View style={styles.marginStyling}>
        <View>
            <Text style={{ color: '#083041', fontSize: 22, fontWeight: 'bold', textTransform: 'capitalize', textAlign: 'center' }}>
                Our Range Of Google Ads Services
            </Text>
        </View>
        <View style={styles.seoServiceContainer}>
          <View style={styles.marginStyling}>
            <Text style={styles.googleAdsContainerTextWithDifferentColor}>
                Search Advertising
            </Text>
          </View>
          <View>
            <Text style={styles.googleAdsContentOne}>
                Search Advertising is an important paid ads tools. It is a method of placing online advertisements on web pages that show results from search engine queries.
            </Text>
          </View>
        </View>
        <View style={styles.seoServiceContainer}>
          <View style={styles.marginStyling}>
            <Text style={styles.googleAdsContainerTextWithDifferentColor}>
                Display Advertising
            </Text>
          </View>
          <View>
            <Text style={styles.googleAdsContentOne}>
                In Display Advertising, you can present your ads to different websites and blogs. It is a great method to reach people who are interested in the services you provide.
            </Text>
          </View>
        </View>
        <View style={styles.seoServiceContainer}>
          <View style={styles.marginStyling}>
            <Text style={styles.googleAdsContainerTextWithDifferentColor}>
                Video Ads
            </Text>
          </View>
          <View>
            <Text style={styles.googleAdsContentOne}>
                Video ads are the most appealing type of advertising asset. Video ads have a very profound branding effect and can create an effective brand recall.
            </Text>
          </View>
        </View>
        <View style={styles.seoServiceContainer}>
          <View style={styles.marginStyling}>
            <Text style={styles.googleAdsContainerTextWithDifferentColor}>
                Shopping Ads
            </Text>
          </View>
          <View>
            <Text style={styles.googleAdsContentOne}>
                Google Shopping Ads for online retail marketing business. If you are an eCommerce retailer, you can display images of your products at the top of Google results using Google Shopping. 
            </Text>
          </View>
        </View>
        <View style={styles.seoServiceContainer}>
          <View style={styles.marginStyling}>
            <Text style={styles.googleAdsContainerTextWithDifferentColor}>
                App Ads
            </Text>
          </View>
          <View>
            <Text style={styles.googleAdsContentOne}>
                Google app advertising lets marketers create ads so people can download an app directly from an ad. App Campaign ads are designed expressly to generate app installs.
            </Text>
          </View>
        </View>
        <View style={[styles.seoServiceContainer,styles.googleAdsMarginBottom]}>
          <View style={styles.marginStyling}>
            <Text style={styles.googleAdsContainerTextWithDifferentColor}>
                Remarketing
            </Text>
          </View>
          <View>
            <Text style={styles.googleAdsContentOne}>
                Remarketing is a smart advertising technique which will allow you to show ads to users who have visited your website earlier. It exhilarates users to return on the website & reminding them with relevant ads.
            </Text>
          </View>
        </View>
      </View>
      <View style={[ServicesStyles.imageView]}>
        <View style={styles.containerBorders}>
            <View style={styles.googleAdsMarginBottom}>
            <Text style={styles.googleAdsContentText}>
                Ready To Take Your Google Ads Campaigns To The Next Level ?
            </Text>
            </View>
            <View style={styles.googleAdsMarginBottom}>
            <Text style={styles.googleAdsContentTwo}>
                Let’s Get Started Your Project ! 
            </Text>
            </View>
            <View style={styles.googleAdsMarginBottom}>
                <TouchableOpacity onPress={()=>setModalOpen(true)}>
                    <View style={styles.googleAdsContactUsButtonOne} title="Contact Us!">
                        <Text style={styles.googleAdsContactUsButtonTextOne}>
                            Contact Us!
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <View>
                <Image source={googleAdsLogo} alt="Google Ads" title="Google Ads" style={styles.serviceProviderImage}></Image>
            </View>
            <View style={{ marginBottom: 10, paddingLeft: 20 }}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', textAlign: 'left', fontSize: 18, letterSpacing: 0.4 }}>
                    Our Approach To Google Ads Management
                </Text>
            </View>
            <View style={{ marginBottom: 10, paddingLeft: 20 }}>
                <Text style={{ color: '#FFF', fontWeight: 'normal', textAlign: 'left', fontSize: 18, letterSpacing: 0.2 }}>
                    Our team understands what it takes to develop a great Google advertising strategy for our clients. We will create targeted campaigns that are cost-effective & profitable.
                </Text>
            </View>
            <View style={{ marginBottom: 20, paddingLeft: 20 }}>
                <Text style={styles.seoSubContentText}>
                    • Research & Discovery
                    {"\n\n"}• Competitive Research
                    {"\n\n"}• Comprehensive Account Analysis
                    {"\n\n"}• Build Strategy & Campaign
                    {"\n\n"}• Optimize, Grow, Repeat
                    {"\n\n"}• Reporting & Analysis
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=>setModalOpen(true)}>
                    <LinearGradient 
                        colors={['#00B2FF','#f2295b']}
                        start={{x:1,y:0}}
                        end={{x:0,y:0}}
                        style={styles.googleAdsNewButton}
                        title="TALK TO OUR CONSULTANT!">
                            <Text style={styles.googleAdsNewButtonText}>
                                TALK TO OUR CONSULTANT!
                            </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
        <View style={{ marginBottom: 10 }}>
            <Text style={{ color: '#0A0A0A', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>
                Frequently Asked Questions
            </Text>
        </View>
        <View style={{ backgroundColor: '#f5f5f5', marginBottom: 10 }}>
            <Text style={{ padding: 10, fontSize: 14, fontWeight: 'bold', color: '#000' }}>
                Where will my Google Ads appear?
            </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
                Google Ad has amazing flexibility, so it gives to know where to place your ads, how much they will cost you, as well as the quality of your advertising.
            </Text>
        </View>
        <View style={{ backgroundColor: '#f5f5f5', marginTop: 10, marginBottom: 10 }}>
            <Text style={{ padding: 10, fontSize: 14, fontWeight: 'bold', color: '#000' }}>
                If I have created a Google Ads campaign, how many leads will I get?
            </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
                There are a plenty of factors to be considered to identify lead counts. Our objective is to create a campaign and optimize it to maximize the return of your input. As a reputable Google Ads service provider, we have had great success of running unique campaigns that meet all performance benchmarks.
            </Text>
        </View>
        <View style={{ backgroundColor: '#f5f5f5', marginTop: 10, marginBottom: 10 }}>
            <Text style={{ padding: 10, fontSize: 14, fontWeight: 'bold', color: '#000' }}>
                Would Google Ads help my business?
            </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
                Absolutely. Today all the businesses, brands, and organizations are utilizing Google Ads to maximize their sales and business. The trick is to know how you can effectively set up and optimize your Google Ad campaigns. We are Google Ads certified professionals and we will assist you to set up and optimize your Ad campaigns to perform effectively.
            </Text>
        </View>
        <View style={{ backgroundColor: '#f5f5f5', marginTop: 10, marginBottom: 10 }}>
            <Text style={{ padding: 10, fontSize: 14, fontWeight: 'bold', color: '#000' }}>
                How do I know if my campaign is successful?
            </Text>
        </View>
        <View>
            <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>
                There are many ways to measure the success of the Google Ads campaign. Some popular measurements we like to utilize cost per conversion, ROI or in some cases how much vulnerability to the business the campaign is building. Although, we measure our advertising campaign’s success by how it is affecting your business, which we work closely with you to determine.
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
   </>
  )
};

export default GoogleAds;

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
        backgroundColor: '#FFFFFF',
        padding: 0
      },
      marginStyling:
      {
        matrginBottom: 10,
        marginTop: 0
      },
      googleAdsBgImg:
      {
        // backgroundImage: url('https://www.meradigi.com/wp-content/uploads/2022/07/14321b05-ellipse-1.png'),
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
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 5
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
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'center',
        letterSpacing: 0,
        marginBottom: 0
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
        marginBottom: 10
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
      }
}
);