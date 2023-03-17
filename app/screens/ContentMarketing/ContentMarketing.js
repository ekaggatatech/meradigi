import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import ContentMarketingImageOne from '../../assets/ContentGeneration&Marketing/social-media-3.jpg';
import ContentMarketingImageTwo from '../../assets/ContentGeneration&Marketing/content-marketing-2-2.jpg';
import ContentMarketingImageThree from '../../assets/ContentGeneration&Marketing/content-marketing-2-1.jpg';
import ConsultNowModalScreen from '../../modals/ConsultNowModalScreen';
import MainFooter from '../../common/footer/MainFooter';
import Footer from '../../common/footer/Footer';
import ServicesStyles from '../../config/services.styles';

const ContentMarketing = () => {
    const [buttonText, setButtonText] = useState('Contact Us');
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <ScrollView nestedScrollEnabled={true} style={styles.container}>
            <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
                <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <View style={ServicesStyles.positioning}>
                    <Image source={ContentMarketingImageOne} alt="Radio Advertising" title="Radio Advertising" style={styles.socialMediaAdsImage}></Image>
                    <Text style={{ color: '#083041', fontSize: 22, fontWeight: 'bold', textTransform: 'capitalize', textAlign: 'center', marginBottom: 10 }}>
                        Content Generation & Marketing
                    </Text>
                    <Text style={{ color: '#083041', fontSize: 13, fontWeight: 'normal', textAlign: 'center', marginBottom: 10 }}>
                        Grab The Attention With Powerful Visuals And Strong Content!
                    </Text>
                    <View style={[styles.twoButtons,styles.marginStyling]}>
                        <TouchableOpacity style={{ marginBottom: 10 }} onPress={()=>setModalOpen(true)}>
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
                <View style={ServicesStyles.imageView}>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={styles.radioAdvertContentText}>
                      We are a Digital Agency dedicated to the generation of strategically optimized and quality content. 
                    </Text>
                  </View>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={styles.radioAdvertSubContentText}>
                      We have developed and perfected a series of techniques and tools that allow us to create clear, precise and concise content and that, above all, is based on keywords (keywords) strategically selected according to the market study we carry out for each of our clients, ensuring that 100% of them are completely satisfied with the results.
                    </Text>
                  </View>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={styles.radioAdvertSubContentText}>
                      Mera Digi invite you to contact our Creativity & Design team, who will be happy to guide you in the creation of your content focusing on the main digital strategies.
                    </Text>
                  </View>
                  <View style={{ marginBottom: 10, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#FFFFFF' }}>
                    <Text style={styles.radioAdvertSubContentText}>
                      Our intention is to work with your brand transparently and to corroborate our work with tangible results, thus protecting your investment and you as a consumer.
                    </Text>
                  </View>
                  <View style={{ marginBottom: 10, borderColor: '#FFFFFF', padding: 10 }}>
                    <Image source={ContentMarketingImageTwo} alt="Content Marketing" title="Content Marketing" style={styles.serviceProviderImage}></Image>
                  </View>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={styles.radioAdvertContentText}>
                      What Is Digital Content Generation?
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.radioAdvertSubContentText}>
                      The generation of digital content, as the name implies, consists of creating content. That includes text, images, video and other graphics. Moreover, your content needs to ‘cut through the noise’ and effectively convey a message in order to convert a website visit into a conversion. Additionally, you need to align your content with your digital strategy. For instance, creating content for Google Ads may be different to creating content to rank organically.
                    </Text>
                  </View>
                </View>
                <View style={{ backgroundColor: '#FFFFFF' }}>
                  <View style={{ marginBottom: 10, borderColor: '#FFFFFF', margin: 10, padding: 10, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 1 }}>
                    <Image source={ContentMarketingImageOne} alt="Content Marketing" title="Content Marketing" style={styles.serviceProviderImage}></Image>
                  </View>
                  <View>
                    <Text style={{ color: '#083041', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
                      What does Digital Content Generation involve?
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#083041', fontSize: 16, fontWeight: 'normal', textAlign: 'center', marginBottom: 10 }}>
                      Steps to create successful Digital Content
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#083041', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginBottom: 10, paddingLeft: 10 }}>
                      When creating any type of digital content, the experts at Mera Digi focus on carefully following the success process implemented by our Marketing and Creativity & Design experts in the following steps:
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#083041', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginBottom: 10, paddingLeft: 10 }}>
                      <Text style={{ fontWeight: 'bold' }}>1. Market study:</Text> In this stage of the process, our creative writers work together with the Marketing area to thoroughly and thoroughly analyse the target audience and competitors of each of our clients.
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#083041', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginBottom: 10, paddingLeft: 10 }}>
                      <Text style={{ fontWeight: 'bold' }}>2. Selection of keywords:</Text> Based on the market research conducted, our experts select strategically certain keywords (keywords) that will help your company to position itself in the first search results when your potential customers require your products and/or services.
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#083041', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginBottom: 10, paddingLeft: 10 }}>
                      <Text style={{ fontWeight: 'bold' }}>3. Generation of ideas:</Text> Every creative idea that our clients transmit to us is important and taken into account, and that is why in this part of the process our experts in digital content generation apply all their techniques and experience acquired over the years to generate and select ideas that really guarantee the results our customers are looking for.
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#083041', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginBottom: 10, paddingLeft: 10 }}>
                      <Text style={{ fontWeight: 'bold' }}>4. Content Creation:</Text> In this stage, our editors are responsible for expressing their ideas in really unique and attractive content for the target audience of each of our clients. It is worth mentioning that this digital content not only includes informative texts but also images, videos, forms, etc. that have been strategically selected to impact its users.
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#083041', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginBottom: 10, paddingLeft: 10 }}>
                      <Text style={{ fontWeight: 'bold' }}>5. Organisation and publication of content :</Text> Finally, our designers and programmers are responsible for strategically organising the digital content according to the requirements of our client and also taking into account fundamental aspects of design to ensure an attractive appearance and navigation experience. nice for the users.
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#083041', fontSize: 16, fontWeight: 'normal', textAlign: 'left', marginBottom: 0, paddingLeft: 10 }}>
                      <Text style={{ fontWeight: 'bold' }}>6. Analysis of results:</Text> After publishing the content, and as part of our process and optimisation strategy, our experts in Marketing and Analysis will be in charge of reviewing the impact of this content periodically to analyse if it is necessary to include or update any keyword or content in general.
                    </Text>
                  </View>
                  <View style={{ marginBottom: 20, borderColor: '#FFFFFF', margin: 10, padding: 20, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, shadowRadius: 1 }}>
                    <Image source={ContentMarketingImageThree} alt="Content Marketing" title="Content Marketing" style={styles.newServiceProviderImage}></Image>
                  </View>
                  <View style={ServicesStyles.imageView}>
                    <View>
                      <Text style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>
                        Tell us about your Project
                      </Text>
                    </View>
                    <View style={{ margin: 20, borderWidth: 1, borderColor: '#FFFFFF', padding: 10 }}>
                      <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'normal', textAlign: 'center' }}>
                        Talk to us and find everything you need to improve your brand image, grow your business and achieve results using digital techniques and strategies that we will design especially for you!
                      </Text>
                    </View>
                    <View style={[styles.twoButtons,styles.marginStyling]}>
                        <TouchableOpacity onPress={()=>{setModalOpen(true),setButtonText('Get A Quote')}}>
                          <View style={{ color: '#fff', backgroundColor: '#A62929', width: 160, padding: 10 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignItems: 'center', verticalAlign: 'middle', textAlignVertical: 'center' }}>
                              <Ionicons name="mail" color={'#FFF'} size={18} /> {buttonText}
                            </Text>
                          </View>
                        </TouchableOpacity>
                    </View>
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
  );
}

const styles = StyleSheet.create(
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
}
);

export default ContentMarketing;