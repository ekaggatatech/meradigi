import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import SearchBar from '../shared/SearchBar';
import HomeServices from '../shared/HomeServices';
import GetInTouchWithUsForm from '../common/footer/GetInTouchWithUsForm';
import MainFooter from '../common/footer/MainFooter';
import Footer from '../common/footer/Footer';
import ServicesStyles from '../config/services.styles';
import { LinearGradient } from 'expo-linear-gradient';
import BookAppointmentCalendarModalScreen from '../modals/BookAppointmentCalendarModalScreen';
import ChatBot from '../ChatBot';
// import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';

const Image1= require("../assets/servicesImg/GetMobileApp.png");
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
const Image16= require('../assets/servicesImg/Hireadeveloper.png');

const services = 
[
        { key:1, name:"Get A Mobile App", id:1, source:Image1 },
        { key:2, name:"I Want A Very Fast Website", id:2, source: Image2 },
        { key:3, name:"Rank My Website On Google", id:3, source: Image3 },
        { key:4, name:"Make Me Popular On Youtube", id:4, source: Image4 },
        { key:5, name:"Make My Videos Popular On Facebook", id:5, source: Image5 },
        { key:6, name:"Make My Videos Popular On Instagram", id:6, source: Image6 },
        { key:7, name:"Advertise On Radio", id:7, source: Image7 },
        { key:8, name:"Hire A Celebrity", id:8, source: Image8 },
        { key:9, name:"Odoo ERP Implementation", id:9, source: Image9 },
        { key:10, name:"Moodle LMS Development", id:10, source: Image10 },
        { key:11, name:"Add Audio/Video Feature In My Website", id:11, source: Image11 },
        { key:12, name:"Make My Product Famous", id:12, source: Image12 },
        { key:13, name:"Digital Marketing", id:13, source: Image13 },
        { key:14, name:"I Want An Annual Maintenance Plan", id:14, source: Image14},
        { key:15, name:"Get A Best Hosting Plan", id:15, source: Image15 },
        { key:16, name:"Hire A Freelancer", id:16, source: Image16 }
];

const HomePage = () => 
{
  // const [modalOpen, setModalOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => 
  {
    setVisible(!visible);
  };
  const [value, setValue] = useState('');
  /* function updateSearch(value) 
  {
    console.log(value);
  } */
  const [modalOpen, setModalOpen] = useState(false);
return (
  <>
    {/* <View style={{ justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
      <ActivityIndicator size={"large"} color={"#ff0000"}></ActivityIndicator>
    </View> */}
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
      {/* <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} /> */}
      <BookAppointmentCalendarModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <View style={ServicesStyles.positioning}>
        <Image source={require("../assets/meradigiresize2.png")} alt="meradigi" title="meradigi" />
       </View> 
      <View>
        <SearchBar 
          value={value}
          setValue={setValue}
          style={{ marginBottom: '0%' }}
        />
      </View>
      <View style={[styles.twoButtons,styles.marginStyling]}>
           {/* <TouchableOpacity style={styles.bookFreeConsultationCallButton}
              title="Free Consultation">
                <Text style={styles.bookFreeConsultationCallButtonText}>
                  Free Consultation
                </Text>
            </TouchableOpacity> */}
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
      <View style={styles.marginStyling}>
        <HomeServices data={services} value={value} />
      </View>
      <View style={styles.marginStyling}>
        <GetInTouchWithUsForm/>
      </View>
      <View style={styles.marginStyling}>
        <MainFooter/>
      </View>
      <View style={styles.marginStyling}>
        <Footer/>
      </View>
      <View style={styles.marginStyling}>
        <View style={{ paddingTop: 10, paddingBottom: 20, paddingLeft: 10, paddingRight: 10 }}>
          <Button title="Let's Chat" onPress={toggleOverlay} />
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <ChatBot />
          </Overlay>
        </View>
      </View>
      {/* <View style={[styles.twoButtons,styles.marginStyling,styles.marginTopStyling]}>
          <TouchableOpacity onPress={()=>setModalOpen(true)} title="Contact Us">
            <View style={styles.contactUsButton}>
              <Text style={styles.contactUsButtonText}>
                Contact Us
              </Text>
            </View>
          </TouchableOpacity>
      </View> */}
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
    paddingVertical: 10, 
    paddingHorizontal: 90,
    backgroundColor: 'transparent',
    //borderColor: '#cb202d',
    borderRadius: 9,
    //borderWidth: 1
  },
  bookFreeConsultationCallButtonText:
  {
    fontSize: 16,
    fontWeight: 600,
    //fontWeight: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ffffff',
    // color: 'black',
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
  }
}
);

export default HomePage;