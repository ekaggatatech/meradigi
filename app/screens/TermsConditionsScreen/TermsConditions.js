import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import MainFooter from '../../common/footer/MainFooter';
import Footer from '../../common/footer/Footer';
import PrivacyPolicy from '../PrivacyPolicyScreen/PrivacyPolicy';

// const screenHeight = Dimensions.get('window').height;
// const screenWidth = Dimensions.get('window').width;

const TermsConditions = ({ navigation }) => {
    return (
        <>
            <ScrollView nestedScrollEnabled={true}>
            <SafeAreaView>
                <View style={styles.viewOne}>
                    <ImageBackground
                        source={require("../../assets/Terms&Conditions/TermsConditionsBgImg.jpg")}
                        alt="Terms & Condition's" 
                        title="Terms & Condition's" 
                        style={styles.privacyPolicyImg}>
                            <Text style={styles.privacyPolicyText}>
                                Terms & Condition's
                            </Text>
                    </ImageBackground>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.marginTopOne,styles.marginBottomOne]}>
                        <Text style={styles.newTitleFontThree}>Project Terms</Text>
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 All estimates and rates are dependent on how well we comprehend your needs and the allotted time frame. Any functional modifications, including small upgrades, could result in extra charges. Please meet with us in person to confirm and explain our understanding.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 You agree to and accept Meradigi Pvt Ltd’s terms and conditions by accepting a quote. Verbal, email, initiating payment, and signing a quote are all acceptable forms of acceptance.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Customers should confirm that we properly grasp their requirements and that we have accounted for all of them in the quotations, proposals, and estimates. Clients are required to give us explicit instructions as well as the flow or other specifics they may need. When such information is lacking, we proceed with our understanding of the needs and provide an appropriate price. If a mismatch occurs later, it can result in extra expenses to make the necessary adjustments. Therefore, it is imperative that you make sure that you have been quoted on the correct criteria and that you have made clear every part of your website development.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 For costing purposes, any complexity relating to certain tasks must be disclosed upfront and included in the proposal. We work in good faith and rely on our clients to be completely honest when receiving quotes. Meradigi shall not be responsible for any disparity brought on by imprecise requirements.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Each duty, including project management and digital strategist/business analyst, has a set number of man-hours allotted to it. Minor adjustments may be made throughout the allotted time. A case-by-case analysis of this will be done.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Meradigi will work hard to finish the project/changes by the deadline. If functionalities are redefined or changed, reasonable delays are accepted.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Any delays on the part of the client could cause the project to go behind schedule and beyond budget.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 There are no additional fees for defects (programming faults) found during or just after development.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Rework on a task that has already been finished will result in extra fees. Following design approval, any changes to the design will result in additional fees.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Additional fees will apply to any adjustments made during development or after the go-live clearance. All extra work that goes beyond the estimates is billed separately. Meradigi will never be held responsible for delays brought on by changes to the project brief.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 We must receive all website/application content and supporting assets from you within the first two weeks of the project’s launch. Any extra delays could cause the project to be delayed and cost more money if they take longer than expected.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Our websites and applications are typically tested on PCs using recent builds of the IE, Firefox, Chrome, and Safari browsers. Please notify us in advance if you need testing to be done on any other browsers.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Web sites that are responsive and multi-device compliant are evaluated on iPhones and iPads. Please let us know in advance if you need testing to be other devices, please let us know in advance if you need testing to be other devices, if you need testing to`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022  Any additional man-hours that might be needed because of any server- or network-related issues are not included in our rates and may be charged separately if your website or application is not hosted on a Meradigi server.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Please be aware that stalling the project for longer than two calendar months will result in additional costs per week at any point in the project. Additionally, it can raise the previously authorised projections. If you need the project placed on hold, do let us know in writing ahead of time. We will need the account to be current based on the work done in order to put the project on hold without incurring additional fees. If such a circumstance occurs, further information can be discussed.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Software codes created by Meradigi (excluding open source software) are protected by copyrights. Once all prior invoices have been paid in full, the codes can be given to the designated client or subsequent owners of that legal organisation for an additional fee, with the stipulation that they are only utilised or modified for re-use in further development. The codes may not be used for copying or reselling purposes under any circumstances.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Meradigi Worldwide’s Meradigi CMS is a proprietary CMS. Unless other arrangements are established before the project begins, Meradigi holds the copyrights to all codes created for any client. Any software that has been specifically created for a client by Meradigi is guaranteed to be used by them only. This licence is given in exchange for payment for hosting. There is no way to move Meradigi CMS to an external host, not even access to the source code.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 A commercial-grade web server or a comparable arrangement will be used to deploy the website or software application on the internet. Depending on the volume of traffic to your website, a basic office network environment may not be able to support the website.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Building a website or application may involve using third-party components like SSL certificates or third-party payment gateways, depending on the functionalities needed. Even while Meradigi Worldwide tries its best to determine the compatibility of each such component, we have no control over any unanticipated limits of third-party components. Our rates do not include the cost of purchasing any third-party components (such as SSL, a payment gateway, Google Adwords, plug-in licences, etc.).`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Any open source software, including Joomla, Open Source carts, and WordPress, is not under the control of Meradigi. The updating of all components and third-party software is the client’s duty. To prevent any inconveniences, we advise you to make regular backups.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Packages are available from Meradigi in coordination with outside suppliers. The services we offer or the terms and conditions here of may ultimately be affected by changes to the third party provider’s regulations and policies.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 The customer must be aware that occasionally there can be unforeseen events that would cause the development process to be delayed, especially when it comes to the integration of third party software. We’ll do everything we can to finish the project as specified in the proposal. The client agrees not to hold us accountable for any legitimate delays as long as they occur within a reasonable time frame and every attempt has been made to keep the project on track.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Unless otherwise stated, any project or proposal does not include costs associated with domain registration, renewal, etc. If required, a quote for which will be submitted separately and approved by the client.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Unless otherwise specified, hosting fees are not included in the prices. If necessary, Meradigi can arrange a suitable hosting solution; a quote will be provided separately and approved by the client. When clients choose to arrange their own hosting, they should contact us first to discuss the best hosting and database options since they must adhere to the specifications of the technology being used for development. Please be aware that in order to test and instal the application, we will need complete access with hosting support. Inaccuracies or delays brought on by the hosting company’s direct or indirect activities are not the responsibility of Meradigi`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Meradigi often uses its own servers or hosted domains to develop and test the websites and applications. The clients or any other third parties are not permitted access to Meradig’s test servers or test websites. Upon full payment of all fees and dues, the website/application may be moved to a designated third-party server.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Despite any other clauses in the contract, in exchange for the customer entering into this agreement with Meradigi, Meradigi will unconditionally grant the customer a licence to reproduce, publish, communicate, use, exploit, vary, or otherwise deal with 1) the graphics, 2) the texts, and 3) the images used in the published website and associated of form and functionality. This licence is given regardless of any other clause in the contract. The intellectual property used in the creation of the website, such as the digital tactics, coding, database structures, scripts, forms, or features, will not be covered by this.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2022 Email is typically used for all interactions and conversations. It is the client’s duty to keep us informed of any relevant email addresses.`}
                    </Text>
                </View>
                <View>

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
  );
}

const styles = StyleSheet.create({
    viewOne:
    {
        // backgroundColor: 'rgb(56, 44, 126)',
        backgroundColor: '#382C7E',
        opacity: 0.49,
        // opacity: 1,
        transition: 0.3, 
        borderRadius: 0.3
        // transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    },
    privacyPolicyImg: 
    {
        // width: screenWidth,
        // height: screenHeight, 
        width: 400,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    privacyPolicyText:
    {
        // color: 'rgb(255, 255, 255)',
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 48,
        opacity: 0.98
        // transition: 'background 0.3s,border 0.3s,border-radius 0.3s,box-shadow 0.3s,transform var(--e-transform-transition-duration,0.4s)'
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
        fontSize: 19,
        textAlign: 'left',
        color: '#000000',
        fontWeight: 'normal'
    },
    consentFont:
    {
        fontSize: 32,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'left'
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
    },
    newTitleFontThree:
    {
        fontSize: 19,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'left' 
    },
    bulletList:
    {
        fontSize: 18, 
        textAlign: 'left', 
        marginBottom: 10 
    },
    privacyPolicyNewImage: 
    {
        // width: 'auto',
        // height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center'
    },
    alsoReadText:
    {
        marginBottom: 3,
        color: '#00B5FF',
        fontSize: 19,
        fontWeight: 'normal',
        textAlign: 'center',
        alignItems: 'center'
    },
    privacyPolicyNewText:
    {
        color: '#e22658',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center'
    }
})

export default TermsConditions;