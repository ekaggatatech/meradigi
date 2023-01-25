import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, ImageBackground, Dimensions } from 'react-native';
import MainFooter from '../../common/footer/MainFooter';
import Footer from '../../common/footer/Footer';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const PrivacyPolicy = () => {
    return (
        <>
            <ScrollView nestedScrollEnabled={true}>
            <SafeAreaView>
                <View style={styles.viewOne}>
                    <ImageBackground
                        source={require("../../assets/PrivacyPolicy/privacyPolicyBG.jpg")}
                        alt="PrivacyPolicy" 
                        title="PrivacyPolicy" 
                        resizeMode="stretch"
                        style={[styles.privacyPolicyImg,styles.viewOne]}>
                            <Text style={styles.privacyPolicyText}>
                                Privacy Policy
                            </Text>
                    </ImageBackground>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.contentOne,styles.marginBottomOne,styles.marginTopOne]}>
                        At Meradigi, accessible from meradigi.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Meradigi and how we use it.  
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Meradigi. This policy is not applicable to any information collected offline or via channels other than this website. 
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.consentFont}>
                        Consent
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms. For our Terms and Conditions, please visit the Terms & Conditions Generator.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.newTitleFontOne}>
                        Information we collect
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.newTitleFontOne}>
                        How we use your information
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.newTitleFontTwo}>
                        We use the information we collect in various ways, including to:
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={{ fontSize: 18, textAlign: 'left', marginBottom: 10 }}>
                        {`\u2022 Provide, operate, and maintain our website`}
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'left', marginBottom: 10 }}> 
                        {`\u2022 Improve, personalize, and expand our website`}
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'left', marginBottom: 10 }}> 
                        {`\u2022 Understand and analyze how you use our website`}
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'left', marginBottom: 10 }}> 
                        {`\u2022 Develop new products, services, features, and functionality`}
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'left', marginBottom: 10 }}> 
                        {`\u2022 Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes`}
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'left', marginBottom: 10 }}> 
                        {`\u2022 Send you emails`}
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'left', marginBottom: 10 }}> 
                        {`\u2022 Find and prevent fraud`}
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.consentFont}>
                        Log Files
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        Meradigi follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.consentFont}>
                        Cookies and Web Beacons
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        Like any other website, Meradigi uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        For more general information on cookies.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.consentFont}>
                        Advertising Partners Privacy Policies
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        You may consult this list to find the Privacy Policy for each of the advertising partners of Meradigi.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Meradigi, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        Note that Meradigi has no access to or control over these cookies that are used by third-party advertisers.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.consentFont}>
                        Third Party Privacy Policies
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        Meradigi’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.consentFont}>
                        CCPA Privacy Rights (Do Not Sell My Personal Information)
                    </Text>
                </View>
                <View style={styles.commonPadding}> 
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        Under the CCPA, among other rights, California consumers have the right to:
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        Request that a business delete any personal data about the consumer that a business has collected.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.consentFont}>
                        GDPR Data Protection Rights
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}> 
                        The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.consentFont}>
                        Children’s Information
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        Meradigi does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                    </Text>
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
    viewOne:
    {
        backgroundColor: '#272727',
        opacity: 0.68,
        transition: '0.3s', 
        borderRadius: 0.3
        // transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    },
    privacyPolicyImg: 
    {
        width: screenWidth,
        height: screenHeight, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    privacyPolicyText:
    {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 48,
        opacity: 0.98
    },
    commonPadding:
    {
        padding: 10,
        backgroundColor: '#ffffff'
    },
    marginTopOne:
    {
        marginTop: 20
    },
    marginBottomOne:
    {
        marginBottom: 18
    },
    contentOne:
    {
        fontSize: 18,
        textAlign: 'center',
        color: '#000000',
    },
    consentFont:
    {
        fontSize: 32,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    newTitleFontOne:
    {
        fontSize: 32,
        color: '#000000',
        fontWeight: 'normal',
        textAlign: 'center'
    },
    newTitleFontTwo:
    {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'left'
    }
})

export default PrivacyPolicy;