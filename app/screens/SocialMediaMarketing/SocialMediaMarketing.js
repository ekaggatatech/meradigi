import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import MainFooter from '../../common/footer/MainFooter';
import Footer from '../../common/footer/Footer';

const SocialMediaMarketing = ({ navigation }) => {
    return (
        <>
            <ScrollView nestedScrollEnabled={true} style={styles.container}>
            <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
                <View style={styles.viewOne}>
                    <ImageBackground
                        source={require("../../assets/RefundPolicy/RefundPolicyBGImage.jpg")}
                        alt="RefundPolicy" 
                        title="RefundPolicy" 
                        style={styles.privacyPolicyImg}>
                            <Text style={styles.privacyPolicyText}>
                                Return and Refund Policy
                            </Text>
                    </ImageBackground>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.marginTopOne,styles.marginBottomOne]}>
                        <Text style={styles.newTitleFontThree}>Please note: </Text>
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        We put our customers first and will do everything we can to help you work out any issue. Our customers are never on their own and we pride ourselves in a 5-star support service. We’ll do our best to solve any problems with our products, services or your needs in general.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        We do encourage all customers to contact Meradigi support via Live chat, tech ticket or at support@Meradigi.com, for any assistance, clarification, feedback, issues, challenges, or help.
                    </Text>
                    <Text style={styles.contentOne}>
                        We will work things out and make sure you’re 100% satisfied and happy with our service.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                        <Text style={[styles.newTitleFontThree,styles.marginBottomOne]}>
                            Refunds:
                        </Text>
                        <Text style={[styles.contentOne,styles.marginBottomOne]}>
                            Before a refund is granted, you’d have to allow us to try and help. Contact our support via chat, tech ticket or at support@Meradigi.com and please allow 24-72 hours for our Support Team to get back to you. We do our best to answer your requests a lot faster.
                        </Text>
                        <Text style={[styles.contentOne,styles.marginBottomOne]}>
                            The nature of digital media (software) that can be downloaded instantly makes it non-returnable. There is no “trial” or “grace period” after purchasing any product which means all sales are final. Once you have purchased the software or a service, there is no way to “return” it. As such, refunds can not be provided.
                        </Text>
                        <Text style={[styles.contentOne,styles.marginBottomOne]}>
                            We can process a refund if you haven’t downloaded the product or if the product you downloaded from the website was completely unusable, damaged or non-functioning, or doesn’t do what it promises to.
                        </Text>
                        <Text style={[styles.contentOne,styles.marginBottomOne]}>
                            Refunds will not be granted if you simply decide not to use the purchased products. We stand behind our products and will assist you in solving any problem you have, but we also expect you to adequately understand what you are purchasing and why.
                        </Text>
                        <Text style={[styles.contentOne,styles.marginBottomOne]}>
                            In addition to the above, no refunds are provided for:
                        </Text>
                        <Text style={[styles.contentOne,styles.marginBottomOne]}>
                            Meradigi Subscriptions, as it is a complete set of products at a very convenient price, which you can cancel at any time. We discourage you from purchasing Membership for testing purposes.
                        </Text>
                        <Text style={[styles.contentOne,styles.marginBottomOne]}>
                            Renewals are strictly non-refundable.
                        </Text>
                        <Text style={styles.contentOne}> 
                            Offers and discounts are valid for future orders only and can’t be used to ask for refunds or partial refunds of existing purchases.
                        </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.newTitleFontThree,styles.marginBottomOne]}>
                        To summarize and clarify: No returns/refunds will be offered for digital products except cases in which the product you’ve purchased is:
                    </Text>
                    <Text style={styles.newTitleFontThree}>
                        Completely non-functional
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}> 
                        Product main description was misleading or the product doesn’t perform the promised function.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        You didn’t download the product.
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        We do consider refunds on a case-by-case basis.
                    </Text>
                    <Text style={styles.contentOne}>
                        Based on EU law, you may withdraw the purchase and receive a refund for any digital content (or service) purchased on the site during 14 days, only if you did not download the content and did not install it on the site and only if we did not start working on the requested development project (including but not limited to: SEO Services, Hosting services, Site speed-up service, Web development, Odoo Development.). Once a digital product has been downloaded and/or a purchased service has commenced, customers immediately lose their right of withdrawal.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.newTitleFontTwo}>
                        We also reserve the right to refuse a refund in following situations:
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={styles.bulletList}>
                        {`\u2043 You have changed your mind about an item/subscription.`}
                    </Text>
                    <Text style={styles.bulletList}> 
                        {`\u2043 You bought an item by mistake and the product(s) was sent/already downloaded by you.`}
                    </Text>
                    <Text style={styles.bulletList}> 
                        {`\u2043 The product was bought by your employee or associate through your PayPal account which he/she had legal access to.`}
                    </Text>
                    <Text style={styles.bulletList}> 
                        {`\u2043 You can not install the downloaded product (we’ll help you do that).`}
                    </Text>
                    <Text style={styles.bulletList}> 
                        {`\u2043 The product does not function as you wanted it to.`}
                    </Text>
                    <Text style={styles.bulletList}> 
                        {`\u2043 The product displays a message about the need to enter a license key or activation (but has full functionality).`}
                    </Text>
                    <Text style={styles.bulletList}> 
                        {`\u2043 You broke your website when installing the product.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2043 You did not receive technical support on Meradigi 10 minutes after contacting.`}
                    </Text>
                    <Text style={styles.bulletList}>
                        {`\u2043 You refused to provide our support staff access to your web-site to investigate the product you are having an issue with.`}
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <Text style={[styles.newTitleFontTwo,styles.marginBottomOne]}>
                        Please also note that:
                    </Text>
                    <Text style={[styles.contentOne,styles.marginBottomOne]}>
                        You may cancel your subscription at any time, however, there are no refunds for cancellation.
                    </Text>
                    <Text style={styles.contentOne}>
                        Regardless of the above, we put our customers first and will work to help you with any issue, with our products, services or your needs in general. We do encourage all customers to contact Meradigi support via Live chat, tech ticket or at support@Meradigi.com, for any assistance, clarification, feedback, issues, challenges, or help. We will work things out and make sure you’re 100% satisfied and happy with our service.
                    </Text>
                </View>
                <View style={styles.commonPadding}>
                    <TouchableOpacity style={styles.marginBottomOne} onPress={() => navigation.navigate('Privacy Policy')}>
                        <Image 
                            source={require("../../assets/RefundPolicy/info.png")}
                            alt="PrivacyPolicy" 
                            title="PrivacyPolicy" 
                            resizeMode="stretch"
                            style={styles.privacyPolicyNewImage}>
                        </Image>
                        <Text style={styles.alsoReadText}>
                            Also Read
                        </Text>
                        <Text style={styles.privacyPolicyNewText}>
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>
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
    container:
    {
      width: '100%', 
      height: 'auto', 
      borderRadius: 0,
      paddingTop: 0,
      backgroundColor: '#FFFFFF'
    },
    viewOne:
    {
        backgroundColor: '#272727',
        // opacity: 0.68,
        opacity: 1,
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

export default SocialMediaMarketing;