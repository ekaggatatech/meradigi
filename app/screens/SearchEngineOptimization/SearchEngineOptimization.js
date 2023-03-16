import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from "react-native";
import MainFooter from '../../common/footer/MainFooter';
import Footer from '../../common/footer/Footer';
import ServicesStyles from '../../config/services.styles';
import { LinearGradient } from 'expo-linear-gradient';
import seo from '../../assets/seo/SeoServiceProvider.jpg';
import onPageSeo from '../../assets/seo/control.png'
import offPageSeo from '../../assets/seo/browser.png';
import techSeo from '../../assets/seo/setting.png';
import seoNew from '../../assets/seo/SEO.jpg';
import ConsultNowModalScreen from '../../modals/ConsultNowModalScreen';

const SearchEngineOptimization = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
   <>
    <ScrollView style={styles.container}>
      <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
      <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <View style={ServicesStyles.positioning}>
        <Text style={{ color: '#083041', fontSize: 22, fontWeight: 600, textTransform: 'capitalize', textAlign: 'center', marginBottom: 10 }}>
          Search Engine Optimization Services
        </Text>
        <Text style={{ color: '#083041', fontSize: 14, fontWeight: 400, textAlign: 'center', marginBottom: 10 }}>
          Get Your Business To The Top Of The Search Engines!
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
                  Request For SEO Proposal
                </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={[ServicesStyles.imageView,styles.seoImagePadding]}>
        <View style={{ marginBottom: 10, borderColor: '#FFFFFF', borderWidth: 1 }}>
          <Image source={seo} alt="SEO Service Provider" title="SEO Service Provider" style={styles.serviceProviderImage}></Image>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.seoContentText}>
            # 1 SEO Service Provider
          </Text>
        </View>
        <View>
          <Text style={styles.seoSubContentText}>
            Mera Digi is a leading SEO agency.
          </Text>
          <Text style={styles.seoSubContentText}>
            In our search engine optimization services, you get a custom strategy, world-class technology, and an elite SEO team. 
          </Text>
          <Text style={styles.seoSubContentText}>
            We focus on driving revenue for our clients, and we provide all of the services and technology your business needs to grow with SEO.
          </Text>
          <Text style={styles.seoSubContentText}>
            Our campaigns build a website's relevance and trust with search engines. 
          </Text> 
          <Text style={styles.seoSubContentText}>
            Every task performed has a specific purpose that improves your website's ranking.
          </Text>
        </View>
      </View>
      <View style={styles.marginStyling}>
        <Text style={styles.seoServicesTitleText}>
          Search Engine Optimization Services
        </Text>
      </View>
      <View style={styles.marginStyling}>
        <View style={styles.seoServiceContainer}>
          <View style={styles.marginStyling}>
            <Image source={onPageSeo} alt="On-Page SEO" title="On-Page SEO" style={styles.serviceProviderImageOne} />
          </View>
          <View style={styles.marginStyling}>
            <Text style={styles.seoServiceContainerText}>
              On-Page SEO
            </Text>
          </View>
          <View>
            <Text style={styles.seoServicesContentOne}>
              For providing SEO Services, we use the information that we have gathered from our SEO Research and Analysis, we are able to look at your website. In SEO audit, we make use of industry-leading software to identify all the potential issues within the website such as Meta Tags, URL Structure, Internal and External Linking, etc.
            </Text>
          </View>
        </View>
        <View style={styles.seoServiceContainer}>
          <View style={styles.marginStyling}>
            <Image source={offPageSeo} alt="Off-Page SEO" title="Off-Page SEO" style={styles.serviceProviderImageOne} />
          </View>
          <View style={styles.marginStyling}>
            <Text style={styles.seoServiceContainerText}>
              Off-Page SEO
            </Text>
          </View>
          <View>
            <Text style={styles.seoServicesContentOne}>
              SEO Off-page Optimization Service is concerned with do follow links from other websites to your site. These links basically are linked juice from higher domain authority & relevant websites act as an independent 'vote of confidence' which helps search engines trust your website more ultimately improving website position in SERPs.
            </Text>
          </View>
        </View>
        <View style={[styles.seoServiceContainer,styles.seoMarginBottom]}>
          <View style={styles.marginStyling}>
            <Image source={techSeo} alt="Technical SEO" title="Technical SEO" style={styles.serviceProviderImageOne} />
          </View>
          <View style={styles.marginStyling}>
            <Text style={styles.seoServiceContainerText}>
              Technical SEO
            </Text>
          </View>
          <View>
            <Text style={styles.seoServicesContentOne}>
              Technical SEO is a crucial part of any SEO strategy. It refers to all the website and server optimizations that help search engine spiders crawl and index your website more effectively. Technical SEO is the structure of your website. It is a technical SEO that keeps your website together, so you can do on-page and off-page SEO on it.
            </Text>
          </View>
        </View>
      </View>
      <View style={[ServicesStyles.imageView]}>
        <View style={{ marginBottom: 10 }}>
          <Image source={seoNew} alt="Mera Digi SEO Services" title="Mera Digi SEO Services" style={styles.serviceProviderImage}></Image>
        </View>
        <View style={{ marginBottom: 10, paddingLeft: 20 }}>
          <Text style={styles.seoContentText}>
            Mera Digi SEO Services
          </Text>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text style={styles.seoSubContentText}>
            Optimizing for organic search encompasses a range of SEO techniques, and our SEO marketing agency leverages each one to help your business to grow and thrive among your competitors.
          </Text>
          <Text style={styles.seoWhatWeDoText}>
            What we do. 
          </Text>
          <Text style={styles.seoSubContentText}>
            • On-site Optimizations
            {"\n"}• Off-site Analysis
            {"\n"}• Local SEO
            {"\n"}• Keyword Research
            {"\n"}• Competitors Analysis
            {"\n"}• Tags Implementation
            {"\n"}• Content Customization
            {"\n"}• Quality Link Building, and much more!
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

export default SearchEngineOptimization;

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
        color: '#ffffff',
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
        margin: 15,
        width: 'auto',
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
      seoSubContentText:
      {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'left'
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
      seoContentText:
      {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }
    );
