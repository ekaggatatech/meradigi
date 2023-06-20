import React from 'react';
import { StyleSheet, View, Image, Text, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainFooter = () => 
{
  const navigation = useNavigation();

  const facebookUrl = 'https://www.facebook.com/profile.php?id=100083753137340';
  facebookLink = () =>
  {
    Linking.openURL(facebookUrl);
  }

  const twitterUrl = 'https://twitter.com/MeraDigi';
  twitterLink = () =>
  {
    Linking.openURL(twitterUrl);
  }

  const youtubeUrl = 'https://www.youtube.com/channel/UCQBUy8f2v4GJVgQeJ0i7YRA';
  youtubeLink = () => 
  {
    Linking.openURL(youtubeUrl);
  }
  
  const pinterestUrl = 'https://in.pinterest.com/mailmeradigi/';
  pinterestLink = () =>
  {
    Linking.openURL(pinterestUrl);
  }

  const tumblrUrl = 'https://www.tumblr.com/blog/mera-digi';
  tumblrLink = () =>
  {
    Linking.openURL(tumblrUrl);
  }

  const linkedinUrl = 'https://www.linkedin.com/in/mera-digi-771058246/';
  linkedinLink = () =>
  {
    Linking.openURL(linkedinUrl);
  }

  const supportTicketUrl = 'https://www.meradigi.com/ticket';
  supportTicketUrlLink = () => 
  {
    Linking.openURL(supportTicketUrl);
  }

  const itConsultingUrl = 'https://ekaggata.com/';
  itConsultingUrlLink = () =>
  {
    Linking.openURL(itConsultingUrl);
  }

  return (
      <>
        <View style={styles.mainFooterContainer}> 
            <View style={styles.subFooterContainer}>
                <View style={styles.positioningOne}>
                    <Image source={require("../../assets/meradigiresize2.png")} alt="meradigi" title="meradigi" />
                </View>
                <View>
                    <Text style={styles.mainFooterContentOne}>
                        Meradigi bring Digital Technology to your doorstep. 
                        {"\n"}
                        We offer pre-designed digital products to our customers and also design the products of their choice.
                        {"\n"}
                        We are just a call away.
                    </Text>
                </View>
                <View style={[styles.twoButtons,styles.marginStyling]}>
                    <TouchableOpacity style={styles.bookFreeConsultationCallButton} title="Free Consultation">
                        <Text style={styles.bookFreeConsultationCallButtonText}>
                            Free Consultation
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.subFooterContainer}>
                <View style={styles.positioningOne}>
                   <Text style={styles.mainFooterContentTwo}>
                        OUR SERVICES
                   </Text>
                </View>
                <View>
                    <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('I Want A Very Fast Website')}>
                            WEB DEVELOPMENT
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('Digital Marketing')}>
                            DIGITAL MARKETING
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('Odoo ERP Implementation')}>
                            ERP IMPLEMENTATION
                        </Text>
                    </View>
                    {/* <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('Content Generation & Marketing')}>
                            CONTENT CREATION
                        </Text>
                    </View> */}
                    <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('Moodle LMS Development')}>
                            LMS DEVELOPMENT
                        </Text>
                    </View> 
                    <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('Get A Mobile App')}>
                            APP DEVELOPMENT
                        </Text>
                    </View> 
                    <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('Hire A Freelancer')}>
                            HIRE A DEVELOPER
                        </Text>
                    </View> 
                </View>
            </View>
            <View style={styles.subFooterContainer}>
                <View style={styles.positioningOne}>
                   <Text style={styles.mainFooterContentTwo}>
                        COMPANY
                   </Text>
                </View>
                <View>
                    <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('About Us')}>
                            ABOUT US
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('Privacy Policy')}>
                            PRIVACY POLICY
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('Refund Policy')}>
                            REFUND POLICY
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('Terms & Conditions')}>
                            TERMS & CONDITION'S
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>this.supportTicketUrlLink()}>
                            <Text style={styles.mainFooterContentThree}>
                                SUPPORT TICKET
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.subFooterContainer}>
                <View style={styles.positioningOne}>
                   <Text style={styles.mainFooterContentTwo}>
                        RESOURCES
                   </Text>
                </View>
                <View>
                    {/* <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('HomePage')}>
                            BLOG
                        </Text>
                    </View> */}
                    <View>
                        <Text style={styles.mainFooterContentThree} onPress={()=>this.itConsultingUrlLink()}>
                            IT CONSULTING
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.subFooterContainer}>
                <View style={styles.ourAddressContainer}>
                    <View style={styles.ourAddressMainView}></View>
                    <View style={styles.ourAddressViewOne}>
                        <Text style={styles.contentOne}>
                            Our Address
                        </Text>
                    </View>
                    <View style={styles.ourAddressViewOne}>
                        <Text style={styles.contentTwo}>
                            Meradigi Pvt. Ltd. 91 Springboard, ITPL Main Road, 5th floor, Trifecta Adatto, 21, ITPL Main Rd, Garudachar Palya, Mahadevapura, Bengaluru, Karnataka - 560048
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.subFooterContainer}>
                <View style={styles.positioningOne}>
                   <Text style={styles.mainFooterContentTwo}>
                    Download
                   </Text>
                </View>
                <View style={[styles.positionOfElements,styles.marginBottomForImage]}>
                    <Image style={styles.companyLogoImageTwo} source={require("../../assets/footer/icons/png/play-store-logo-nisi-filters-australia-11.bak.png")} alt="Get It On Google Play" title="Get It On Google Play"></Image>
                </View>
                <View style={styles.positionOfElements}>
                    <Image style={styles.companyLogoImageThree} source={require("../../assets/footer/icons/png/Download_on_the_App_Store_Badge.svg_-768x228.png")} alt="Get It On Google Play" title="Get It On Google Play"></Image>
                </View>
            </View>
            <View style={styles.subFooterContainer}>
                <View style={styles.positioningOne}>
                   <Text style={styles.mainFooterContentTwo}>
                        Follow Us
                   </Text>
                </View>
                <View style={styles.positioningTwo}>
                    <TouchableOpacity onPress={()=>this.facebookLink()}>
                        <Image style={styles.urlLinkCompanyLogo} source={require("../../assets/footer/icons/png/facebook.png")} alt="Facebook" title="Facebook"></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.twitterLink()}>
                        <Image style={styles.urlLinkCompanyLogo} source={require("../../assets/footer/icons/png/twitter.png")} alt="Twitter" title="Twitter"></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.youtubeLink()}>
                        <Image style={styles.urlLinkCompanyLogo} source={require("../../assets/footer/icons/png/youtube.png")} alt="YouTube" title="YouTube"></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.positioningTwo}>
                    <TouchableOpacity onPress={()=>this.pinterestLink()}>
                        <Image style={styles.urlLinkCompanyLogo} source={require("../../assets/footer/icons/png/pinterest.png")} alt="Pinterest" title="Pinterest"></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.tumblrLink()}>
                        <Image style={styles.urlLinkCompanyLogo} source={require("../../assets/footer/icons/png/tumblr.png")} alt="Tumblr" title="Tumblr"></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.linkedinLink()}>
                        <Image style={styles.urlLinkCompanyLogo} source={require("../../assets/footer/icons/png/linkedin.png")} alt="Linkedin" title="Linkedin"></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.positioningOne}>
                    <Text style={styles.mainFooterContentThree}>
                        100% Secure & Encrypted Payments Guaranteed
                    </Text>
                </View>
                <View style={[styles.positioningThree,styles.newMarginBottomForImages]}>
                    <Image style={styles.imageDimenmsionsOne} source={require("../../assets/footer/icons/png/AmazonPay.png")} alt="AmzaonPay" title="AmzaonPay"></Image>
                    <Image style={[styles.imageDimenmsionsOne,styles.imageSpacing]} source={require("../../assets/footer/icons/png/ApplePay.png")} alt="ApplePay" title="ApplePay"></Image>
                    <Image style={[styles.imageDimenmsionsOne,styles.imageSpacing]} source={require("../../assets/footer/icons/png/GooglePay.png")} alt="GooglePay" title="GooglePay"></Image>
                    <Image style={[styles.imageDimenmsionsOne,styles.imageSpacing]} source={require("../../assets/footer/icons/png/PayPal.png")} alt="PayPal" title="PayPal"></Image>
                </View>
                <View style={[styles.positioningThree,styles.newMarginBottomForImages]}>
                    <Image style={styles.imageDimenmsionsOne} source={require("../../assets/footer/icons/png/QRCode.png")} alt="QRCode" title="QRCode"></Image>
                    <Image style={[styles.imageDimenmsionsOne,styles.imageSpacing]} source={require("../../assets/footer/icons/png/CreditCard.png")} alt="CreditCard" title="CreditCard"></Image>
                    <Image style={[styles.imageDimenmsionsOne,styles.imageSpacing]} source={require("../../assets/footer/icons/png/Visa.png")} alt="Visa" title="Visa"></Image>
                    <Image style={[styles.imageDimenmsionsOne,styles.imageSpacing]} source={require("../../assets/footer/icons/png/mastercard.png")} alt="MasterCard" title="MasterCard"></Image>
                </View>
            </View>
        </View>
      </>
  );
}

export default MainFooter;

const styles = StyleSheet.create({
    mainFooterContainer:
    {
      backgroundColor: '#DEDEDE'
    },
    subFooterContainer:
    {
        padding: 10
    },
    mainFooterContentOne:
    {
        textAlign: 'center',  
        color: '#040404',
        fontSize: 16,
        fontWeight: 'normal',
        letterSpacing: 0.1
    },
    mainFooterContentTwo:
    {
        color: '#000000',
        fontSize: 33,
        fontWeight: 'bold'
    },
    mainFooterContentThree:
    {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
    ourAddressContainer:
    {
        backgroundColor: '#CFCFCF',
        flexDirection: 'column',
        borderRadius: 14
    },
    ourAddressMainView:
    {
        fontSize: 24,
        backgroundColor: '#545454',
        color: '#ffffff',
        width: 50,
        padding: 10
    },
    ourAddressViewOne:
    {
        marginBottom: 20
    },
    contentOne:
    {
        textAlign: 'center', 
        fontSize: 21, 
        color: '#000000', 
        fontWeight: 'bold'
    },
    contentTwo:
    {
        textAlign: 'center', 
        fontSize: 18, 
        color: '#000000', 
        fontWeight: 'normal' 
    },
    positioningOne:
    {
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 15
    },
    positionOfElements:
    {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    companyLogoImageTwo:
    {
        width: 180,
        height: 60
    },
    companyLogoImageThree:
    {
        width: 180,
        height: 60
    },
    urlLinkCompanyLogo:
    {
        width: 60,
        height: 60,
        marginRight: 15
    },
    marginBottomForImage:
    {
        marginBottom: 20
    },
    positioningTwo:
    {
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 20,
      flexDirection: 'row'
    },
    imageDimenmsionsOne:
    {
        width: 56,
        height: 56
    },
    imageSpacing:
    {
        marginLeft: 20
    },
    positioningThree:
    {
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      flexDirection: 'row'
    },
    newMarginBottomForImages:
    {
        marginBottom: 20
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
      marginTop: 20
    },
    bookFreeConsultationCallButton:
    {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10, 
      paddingHorizontal: 118,
      backgroundColor: 'transparent',
      borderColor: '#cb202d',
      borderRadius: 9,
      borderWidth: 1
    },
    bookFreeConsultationCallButtonText:
    {
      fontSize: 16,
      fontWeight: 600,
      //fontWeight: 'normal',
      fontWeight: 'bold',
      letterSpacing: 0.1,
      //color: '#ffffff',
      color: 'black',
      backgroundColor: 'transparent',
      textAlign: 'center'
    },
})