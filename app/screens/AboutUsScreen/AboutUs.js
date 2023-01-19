import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import ServicesStyles from '../../config/services.styles';
import WhyChooseUs from '../../assets/AboutUs/Why.jpg.webp';
/* import Product from '../config/Product' */

//all images
/* const Image1= require("../assets/servicesImg/GetMobileApp.png");
const Image2= require('../assets/servicesImg/Iwantveryfastwebsite.png'); 
const Image3= require('../assets/servicesImg/Rankmywebsiteongoogle.png');
const Image4= require('../assets/servicesImg/Popularonyoutube.png');
const Image5= require('../assets/servicesImg/Facebook.png');
const Image6= require('../assets/servicesImg/popularonInstagram.png');
const Image7= require('../assets/servicesImg/AdvertiseonRadio.png');
const Image8= require('../assets/servicesImg/Hireacelebrity.png');
const Image9= require('../assets/servicesImg/IwantodooERP.png');
const Image10= require('../assets/servicesImg/IneedMoodleLMS.png');
const Image11= require('../assets/servicesImg/AddAduioVideo.png');
const Image12= require('../assets/servicesImg/makemyproductfamous.png');
const Image13= require('../assets/servicesImg/DigitalMarketing.png');
const Image14= require('../assets/servicesImg/Iwantanannualmaintananceplan.png');
const Image15= require('../assets/servicesImg/Getabesthostingplan.png');
const Image16= require('../assets/servicesImg/Hireadeveloper.png'); */

//name and images 
/* const services =[
        {name:"Get Mobile App", id:"1",source:Image1},
        {name:"I Want A Very Fast Website",id:"2",source: Image2 },
        {name:"Rank My Website On Google", id:"3",source: Image3 },
        {name:"Make Me Popular On Youtube", id:"4", source: Image4},
        {name:"Make My Videos Popular On Facebook", id:"5",source: Image5},
        {name:"Make My Videos Popular On Instagram", id:"6", source: Image6},
        {name:"Advertise On Radio", id:"7",source: Image7 },
        {name:"Hire A Celebrity", id:"8",source: Image8 },
        {name:"I Want Odoo ERP",id:"9", source: Image9 },
        {name:"I Need Moodle LMS",id:"10", source: Image10 },
        {name:"Add Audio/Video Feature In My Website",id:"11", source: Image11 },
        {name:"Make My Product Famous",id:"12", source: Image12 },
        {name:"Digital Marketing Plans",id:"13", source: Image13},
        {name:"I Want An Annual Maintenance Plan",id:"14", source: Image14},
        {name:"Get A Best Hosting Plan",id:"15", source: Image15 },
        {name:"Hire A Developer",id:"16", source: Image16}
    ] */

//name = new page name have to same then it fetch
//and all new pages define in App.js 
//take reference of web Development page 

const AboutUs = () => {
    return (
        <>
            <ScrollView nestedScrollEnabled={true}>
            <SafeAreaView>
                <View style={styles.commonPadding}>
                   <Image source={require("../../assets/AboutUs/AboutUsBG.jpg.webp")} alt="AboutUs" title="AboutUs" style={styles.aboutUsImageOne}></Image>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.selectText}>
                        We deliver revenue-generating digital marketing solutions.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.aboutUsContent}>
                        We develop effective content strategies for corporate brands under our proven and tested power process of “ROADMAP” strategy. We have a proven track record in delivering results based digital marketing campaigns.
                    </Text>
                </View>
                <View style={ServicesStyles.imageView}>
                    <View style={{ marginBottom: 10 }}>
                        <Image source={WhyChooseUs} alt="Why do you want a website ?" title="Why do you want a website ?" style={styles.whyChooseUsImage}></Image>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                    <Text style={ServicesStyles.contentText}>
                        We’re A Leader In Tech-Enabled Digital Marketing Solutions
                    </Text>
                    </View>
                    <View>
                    <Text style={ServicesStyles.subContentText}>
                        Mera Digi is a tech-enabled digital marketing solutions provider, and we create custom strategies for each of our clients based on their needs and goals.
                    </Text>
                    </View>
                    <View>
                    <Text style={ServicesStyles.subContentText}>
                        We plan customized campaigns to meet your organizational requirements and campaign goals.
                    </Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                    <Text style={ServicesStyles.subContentText}>
                        As a full service digital agency, we deliver solutions across Adwords, Social media marketing, Search engine optimization (SEO), Radio Advertisement, Celebrity Marketing, and Content marketing services.
                    </Text>
                    </View>
                </View>
                <View style={styles.fullPotentialMarketingView}>
                    <Text style={styles.fullPotentialMarketingTextTitle}>
                        This is Full-Potential Marketing.
                    </Text>
                </View>
                <View style={{ backgroundColor: '#ffffff' }}>
                    <View>
                        <View style={styles.commonPositionOfElements}>
                            <Image source={require("../../assets/AboutUs/Setting-100x100.png")} alt="Services" title="Services"></Image>
                        </View>
                        <View style={styles.commonPositionOfElements}>
                            <Text style={styles.fullPotentialMarketingTextTitle}>
                                Services
                            </Text>
                        </View>
                        <View style={styles.commonPositionOfElements}>
                            <Text style={styles.aboutUsContent}>
                                Full Funnel Digital Marketing Services to reach your target audience. We identify gaps in your current marketing strategy, then consult you on what you need & how we'll make it happen - all before the contract is signed.
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.commonPositionOfElements}>
                            <Image source={require("../../assets/AboutUs/Link-100x100.png")} alt="Technology" title="Technology"></Image>
                        </View>
                        <View style={styles.commonPositionOfElements}>
                            <Text style={styles.fullPotentialMarketingTextTitle}>
                                Technology
                            </Text>
                        </View>
                        <View style={styles.commonPositionOfElements}>
                            <Text style={styles.aboutUsContent}>
                                Get customized reports for each team member involved, benefit from real-time digital strategy shifts fueled by machine learning, and dominate your space with the power of our proprietary technology platform.
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.commonPositionOfElements}>
                            <Image source={require("../../assets/AboutUs/Control-100x100.png")} alt="Difference" title="Difference"></Image>
                        </View>
                        <View style={styles.commonPositionOfElements}>
                            <Text style={styles.fullPotentialMarketingTextTitle}>
                                Difference
                            </Text>
                        </View>
                        <View style={styles.commonPositionOfElements}>
                            <Text style={styles.aboutUsContent}>
                                We're not just a marketing agency. We're an extension of your team that integrates seamlessly with the other arms of your business, driving profound impact on your bottom line without creating more work.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutUsProposalContainer}>
                    <ImageBackground source={require("../../assets/AboutUs/ProposalBG.jpg")} resizeMode="cover" style={styles.aboutUsProposalBGImage}>
                        <View style={styles.aboutUsProposalImageContainer}>
                            <View>
                                <Text style={styles.aboutUsLetsGetStartedText}>
                                    LET’S GET STARTED
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.aboutUsLetsGetStartedSubText}>
                                    Ready To Make a Real Change? Let’s Build this Thing Together!
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View>
                    <ImageBackground 
                    source={require("../../assets/AboutUs/ProposalBG.jpg")} 
                    style={styles.aboutUsProposalBGImage} 
                    alt="ProposalBG" 
                    title="ProposalBG">
                        {/* <View style={styles.aboutUsProposalImageContainer}>

                        </View> */}
                    </ImageBackground>
                </View>
            </SafeAreaView>
            </ScrollView> 
        </> 
  )
}

const styles = StyleSheet.create({
    selectText:
    {
        fontSize:28,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#000000',
    },
    aboutUsContent:
    {
        fontSize:18,
        fontWeight: 'normal',
        textAlign: 'center',
        color: '#000000',
        marginBottom: 20
    },
    confusedText:
    {
        margin:20,
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center'
    },
    item:
    {
        backgroundColor:'grey',
        margin:5,
        width:50,
        padding:8,
        color:'white'
    },
    aboutUsImageOne:
    {
        width: '100%',
        marginBottom: 20
    },
    whyChooseUsImage:
    {
        margin: 15,
        width: 'auto'
    },
    fullPotentialMarketingView:
    {
        backgroundColor: '#ffffff',
        padding: 40
    },
    fullPotentialMarketingTextTitle:
    {
        color: '#000000',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    commonPositionOfElements:
    {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: '#ffffff'
    },
    commonPadding:
    {
        padding: 10,
        backgroundColor: '#ffffff'
    },
    aboutUsProposalContainer: 
    {
        flex: 1
    },
    aboutUsProposalBGImage:
    {
        flex: 1,
        justifyContent: 'center',
        height: '100%'
    },
    aboutUsProposalImageContainer:
    {

    },
    aboutUsLetsGetStartedText: 
    {
        color: '#ffffff',
        fontSize: 23,
        /* lineHeight: 84, */
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
    aboutUsLetsGetStartedSubText:
    {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        backgroundColor: 'transparent'
    }
})

export default AboutUs;