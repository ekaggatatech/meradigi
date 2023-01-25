import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import ConsultNowModalScreen from '../../modals/ConsultNowModalScreen';
import MainFooter from '../../common/footer/MainFooter';
import Footer from '../../common/footer/Footer';
import ServicesStyles from '../../config/services.styles';
import WhyChooseUs from '../../assets/AboutUs/Why.jpg.webp';

const AboutUs = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <ScrollView nestedScrollEnabled={true}>
            <SafeAreaView>
                <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
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
                    <ImageBackground 
                        source={require("../../assets/AboutUs/ProposalBG.jpg")} 
                        resizeMode="cover" 
                        style={styles.aboutUsProposalBGImage} 
                        alt="ProposalBG" 
                        title="ProposalBG">
                        <View style={styles.aboutUsProposalImageContainer}>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.aboutUsLetsGetStartedText}>
                                    LET’S GET STARTED
                                </Text>
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.aboutUsLetsGetStartedSubText}>
                                    Ready To Make a Real Change? 
                                </Text>
                                <Text style={styles.aboutUsLetsGetStartedSubText}>
                                    Let’s Build this Thing Together!
                                </Text>
                            </View>
                            <View style={styles.aboutUsClickForProposalButtonView}>
                                <TouchableOpacity style={styles.aboutUsClickForProposalButton} onPress={()=>setModalOpen(true)}>
                                    <View style={styles.aboutUsClickForProposalButton}>
                                        <Text style={styles.aboutUsClickForProposalButtonText}>Click for a Proposal!</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View>
                    <MainFooter/>
                </View>
                <View>
                    <Footer/>
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
        /* flex: 1, */
        /* justifyContent: 'center', */
        /*height: '100%'*/
    },
    aboutUsProposalImageContainer:
    {
        paddingTop: 180,
        paddingBottom: 180
    },
    aboutUsLetsGetStartedText: 
    {
        color: '#ffffff',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'transparent'
        /* lineHeight: 84 */
    },
    aboutUsLetsGetStartedSubText:
    {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
    aboutUsClickForProposalButtonView:
    {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
    aboutUsClickForProposalButton:
    {
        color: '#fff',
        borderColor: '#fff',
        backgroundColor: 'transparent',
        textAlign: 'center',
        borderWidth: 1
    },
    aboutUsClickForProposalButtonText:
    {
        color: '#fff',
        borderColor: '#fff',
        backgroundColor: 'transparent',
        textAlign: 'center',
        padding: 12,
        fontSize: 15
    }
})

export default AboutUs;