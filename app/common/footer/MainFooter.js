import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainFooter = () => 
{
  const navigation = useNavigation();
  return (
      <>
        <View style={styles.mainFooterContainer}> 
            <View style={styles.subFooterContainer}>
                <View style={styles.positioningOne}>
                    <Image style={styles.companyLogoImageOne} source={require("../../assets/meradigi.png")} alt="meradigi" title="meradigi" />
                </View>
                <View>
                    <Text style={styles.mainFooterContentOne}>
                        Meradigi bring Digital Technology to your doorstep. We offer pre-designed digital products to our customers and also design the products of their choice.
                    </Text>
                </View>
                <View>
                    <Text style={styles.mainFooterContentOne}>
                        We are just a  call away.
                    </Text>
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
                        <Text style={styles.mainFooterContentThree} onPress={()=>navigation.navigate('Services')}>
                            WEB DEVELOPMENT
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainFooterContentThree}>
                            DIGITAL DEVELOPMENT
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainFooterContentThree}>
                            ERP IMPLEMENTATION
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainFooterContentThree}>
                            CONTENT CREATION
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
                        <Text style={styles.mainFooterContentThree}>
                            ABOUT US
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainFooterContentThree}>
                            PRIVACY POLICY
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainFooterContentThree}>
                            REFUND POLICY
                        </Text>
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
                    <View>
                        <Text style={styles.mainFooterContentThree}>
                            BLOG
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainFooterContentThree}>
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
                    <Image style={styles.companyLogoImageTwo} source={require("../../assets/footer/png/play-store-logo-nisi-filters-australia-11.bak.png")} alt="Get It On Google Play" title="Get It On Google Play"></Image>
                </View>
                <View style={styles.positionOfElements}>
                    <Image style={styles.companyLogoImageThree} source={require("../../assets/footer/png/Download_on_the_App_Store_Badge.svg_-1024x304.png.webp")} alt="Get It On Google Play" title="Get It On Google Play"></Image>
                </View>
            </View>
            <View style={styles.subFooterContainer}>
                <View style={styles.positioningOne}>
                   <Text style={styles.mainFooterContentTwo}>
                        Follow Us
                   </Text>
                </View>
                <View style={styles.positioningOne}>
                    <Image style={styles.urlLinkCompanyLogo} source={require("../../assets/footer/png/facebook.png")} alt="Facebook" title="Facebook"></Image>
                    <Image style={styles.urlLinkCompanyLogo} source={require("../../assets/footer/png/twitter.png")} alt="Twitter" title="Twitter"></Image>
                    <Image style={styles.urlLinkCompanyLogo} source={require("../../assets/footer/png/youtube.png")} alt="YouTube" title="YouTube"></Image>
                </View>
                <View>
                    <Text style={styles.mainFooterContentThree}>
                        100% Secure & Encrypted Payments Guaranteed
                    </Text>
                </View>
            </View>
        </View>
      </>
  )
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
        fontSize: 18,
        fontWeight: 'normal'
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
        padding: 10,
        /*borderRadius: 14*/
    },
    ourAddressViewOne:
    {
        marginBottom: 10,
        padding: 10
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
    companyLogoImageOne:
    {
      width: 320,
      height: 80
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
        width: 240,
        height: 80
    },
    companyLogoImageThree:
    {
        width: 240,
        height: 80
    },
    urlLinkCompanyLogo:
    {
        width: 60,
        height: 60
    },
    marginBottomForImage:
    {
        marginBottom: 10
    }
})