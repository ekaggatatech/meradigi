import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, ImageBackground, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Play from '../../assets/FreeConsultation/Play.png';
import SoftwareIconOne from '../../assets/FreeConsultation/SoftwareIconOne.png';
import SoftwareIconFour from '../../assets/FreeConsultation/SoftwareIconFour.png';
import SoftwareIconTwo from '../../assets/FreeConsultation/SoftwareIconTwo.png';
import BookAppointmentCalendarModalScreen from '../../modals/BookAppointmentCalendarModalScreen';
import Footer from '../../common/footer/Footer';
import MainFooter from '../../common/footer/MainFooter';

const data = 
[
 { question: "How to start a company ?", answer: "With our comprehensive guide, you'll get all the information you need to make the process as easy and stress-free as possible.", id: 0, source: SoftwareIconOne },
 { question: "How to get a domain name ?", answer: "We understand how frustrating this process can be. That's why we created a step-by-step guide on how to get a domain name.", id:1, source: SoftwareIconFour },
 { question: "How to register a company ?", answer: "Starting a business can be overwhelming, but our team can guide you through the process of registering your company.", id: 2, source: SoftwareIconTwo },
 { question: "How to get email ids ?", answer: "We can also provide guidance on choosing the right email hosting service and configuring your email accounts to work seamlessly with your other business tools.", id: 3, source: SoftwareIconOne },
 { question: "How to build my own App and website ?", answer: "During the consultation, we will listen to your requirements and ask questions to get a better understanding of what you are looking for. We will then analyze your needs and suggest custom design and development that may meet your criteria.", id: 4, source: SoftwareIconOne },
 { question: "Is there any existing product for my need ?", answer: "We understand that finding the right product can be overwhelming and time-consuming. That's why we offer our expertise to help you save time and effort.", id: 5, source: SoftwareIconFour },
 { question: "Which technology is the best for me ?", answer: "Our goal is to provide you with the best possible service and help you find the technology that meets your needs.", id: 6, source: SoftwareIconOne },
 { question: "How to find the best developers for my company ?", answer: "With our platform, you get access to the best freelancers who have proven their expertise through our rigorous vetting process, so you don't have to worry about low-quality work ever again.", id: 7, source: SoftwareIconFour },
 { question: "How to set up company infrastructure ?", answer: "Our experts will advise you on the best practices for setting up your company's IT systems, network, security, and other infrastructure components.", id: 8, source: SoftwareIconTwo },
 { question: "Payroll services", answer: "Managing payroll can be time-consuming and complex. Our team can help you simplify the process by providing payroll services that meet your specific needs.", id: 9, source: SoftwareIconOne },
 { question: "Queries related to legal and Finance", answer: "We will provide guidance on various legal and financial matters, including taxes, contracts, compliance, and more.", id: 10, source: SoftwareIconTwo },
 { question: "HR services", answer: "Your employees are valuable assets to your business, and managing them effectively is essential for success.", id: 11, source: SoftwareIconOne }
];

const FreeConsultation = () => 
{
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState('');
  function handleChange(text)
  {
    setValue(text);
  }
  return (
    <>
      <ScrollView nestedScrollEnabled={true} style={styles.container}>
      <BookAppointmentCalendarModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', marginTop: 0, paddingTop: 0 }}>
          <View style={{ backgroundColor: '#023c5b', marginTop: 0, paddingTop: 0 }}>
            <View style={{ marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
              <Image source={require("../../assets/FreeConsultation/CallToActions.png")} alt="Free Consultation" title="Free Consultation" style={{ width: 200, height: 180 }} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ textAlign: 'left', fontWeight: 'normal', fontSize: 32, letterSpacing: 0.1, color: '#ffffff', paddingLeft: 10 }}>
                Unlock the Full Potential of Your Business with Our Free Consultation Services
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ textAlign: 'left', fontWeight: 'normal', fontSize: 16, letterSpacing: 0.1, color: '#ffffff', paddingLeft: 10 }}>
                Talk to professionals in the field and take advantage of our complimentary consultation services
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 18, letterSpacing: 0.1, color: '#7091a2', paddingLeft: 10 }}>
                Let's Connect
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <View style={[styles.twoButtons,styles.marginStyling]}>
                    <TouchableOpacity onPress={()=>setModalOpen(true)}>
                      <LinearGradient 
                        colors={['#0070FF','#29F2EA']}
                        start={{x:1,y:0}}
                        end={{x:0,y:0}}
                        style={styles.bookFreeConsultationCallButton}
                        title="Book a Free Consultation">
                          <Text style={styles.bookFreeConsultationCallButtonText}>
                            Book a Free Consultation
                          </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
          <View style={styles.searchContainer}>
                <View style={styles.vwSearch}>
                  <Image style={styles.icSearch} source={require('../../assets/ic_search.png')} />
                </View>
                <TextInput
                    value={value}
                    onChangeText={handleChange}
                    placeholder="Search What You Want"
                    clearButtonMode="always"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.textInput}
                />
          </View>
          <View style={{ marginTop: 0, marginBottom: 10 }}>
            <Text style={styles.titleText}>
              During your free consultation, you can expect :
            </Text>
          </View>
          <View style={{ marginTop: 0, marginBottom: 10, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <View style={styles.videoIcon}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/embed/BJq4d1-lHq8?feature=oembed?playlist=BJq4d1-lHq8&mute=0&autoplay=0&loop=no&controls=0&start=0&end=')}>
                <Image source={Play} alt="Play Video" title="Play Video" resizeMode="cover" style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 0, marginBottom: 0 }}>
          {
                            data.length > 0 ? (
                                data.map(
                                (item)=>
                                {
                                    if(value === "")
                                    {
                                        return (
                                              <View key={item.id} style={styles.newContainer}>
                                                <ImageBackground source={item.source} resizeMode="cover" style={styles.image}>
                                                    <View style={{ marginTop: 100, marginBottom: 0 }}>
                                                      <Text style={styles.text}>
                                                        {item.question}
                                                      </Text>
                                                    </View>
                                                    <View>
                                                      <Text style={styles.textOne}>
                                                        {item.answer}
                                                      </Text>
                                                    </View>
                                                  </ImageBackground>
                                              </View>
                                        );
                                    }
                                    if((value !== "") && (item.question.toLowerCase().includes(value.toLowerCase())))
                                    {
                                        return (
                                              <View key={item.id} style={styles.newContainer}>
                                                <ImageBackground source={item.source} resizeMode="cover" style={styles.image}>
                                                    <View style={{ marginTop: 100, marginBottom: 0 }}>
                                                      <Text style={styles.text}>
                                                        {item.question}
                                                      </Text>
                                                    </View>
                                                    <View>
                                                      <Text style={styles.textOne}>
                                                        {item.answer}
                                                      </Text>
                                                    </View>
                                                  </ImageBackground>
                                              </View>
                                        );
                                    }
                                }
                              )
                            )
                            :
                            (
                              <>
                                <View>
                                  <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>No Data Found!</Text>
                                </View>
                              </>   
                            )                              
          }
          </View>
          <MainFooter />
          <Footer />
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create
(
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
  bookFreeConsultationCallButton:
  {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10, 
    paddingHorizontal: 90,
    backgroundColor: 'transparent',
    borderRadius: 9
  },
  bookFreeConsultationCallButtonText:
  {
    fontSize: 16,
    fontWeight: 600,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ffffff',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  searchContainer:
  {
      backgroundColor: 'white',
      width: '96%',
      height: 40,
      flexDirection: 'row',
      borderColor: '#DEDEDE',
      borderWidth: 1,
      borderRadius: 9,
      marginTop: 20,
      marginBottom: 10,
      marginLeft: 8,
      marginRight: 4
  },
  vwSearch: 
  {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icSearch: 
  {
    height: 18, 
    width: 18
  },
  textInput: 
  {
    flex: 1
  },
  newContainer:
  {
    flex: 1,
    shadowOffset: { width: 2, height: 4 },  
    shadowColor: 'rgba(0,0,0,.1)',  
    shadowOpacity: 0.2,  
    shadowRadius: 4,
    borderStyle: 'solid',
    borderWidth: 0,
    borderColor: '#f5f5f5',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0
  },
  image: 
  {
    flex: 1,
    justifyContent: 'center',
    width: 340,
    height: 400,
    shadowOffset: { width: 2, height: 4 },  
    shadowColor: 'rgba(0,0,0,.1)',  
    shadowOpacity: 0.2,  
    shadowRadius: 4,
    borderStyle: 'solid',
    borderWidth: 0,
    borderColor: '#f5f5f5',
    borderRadius: 5
  },
  text: 
  {
    paddingLeft: 10,
    paddingBottom: 10,
    color: '#6a56a6',
    fontSize: 21,
    fontWeight: 400
  },
  textOne:
  {
    paddingLeft: 10,
    color: '#716c80',
    fontSize: 16,
    fontWeight: 400
  },
  titleText:
  {
    textAlign: 'center',
    color: '#6a56a6',
    fontSize: 26,
    fontWeight: 300,
    textTransform: 'capitalize',
    padding: 0,
    margin: 0
  },
  videoIcon:
  {
    padding: 0,
    fontSize: 19,
    width: 65,
    height: 65,
    color: '#5580ff',
    backgroundColor: '#e5ecff',
    display: 'flex', 
    justifyContent: 'center', 
    marginLeft: 'auto', 
    marginRight: 'auto',
    borderRadius: 40
  }
}
);

export default FreeConsultation;