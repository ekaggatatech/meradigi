import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ServicesStyles from '../config/services.styles';
import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';
import GetInTouchWithUsForm from '../common/footer/GetInTouchWithUsForm';
import MainFooter from '../common/footer/MainFooter';
import Footer from '../common/footer/Footer';

const MoodleLMS = () => 
{
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <ScrollView>
    <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
    <View style={ServicesStyles.container}>
      <View style={{ marginBottom: 10 }}>
        <Image style={ServicesStyles.webDevImage} source={require("../assets/MoodleDevelopmentImplementation/seo.jpg")} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.erpWebText}>Moodle Development & Implementation</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.webText}>Our best-in-class Business solution, {'\n'}To le you to grow business higher!</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.erpWebText}>
          Moodle Development
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.erpSolutionsText}>
          We have a group of professional MOODLE builders having core understanding and significant trip in MOODLE development. As a MOODLE improvement company, we have assembled extremely good options corresponding to the customer’s particulars. MOODLE route customization is our strength, no longer simply the net however we have additionally tailor-made customized plugins or modules as per your enterprise specifications, alongside with the sturdy cell presence. We make certain to grant whole help to the customers with the aid of having fluent conversation at some point of the challenge and through rendering put up guide services.
        </Text>
      </View>
      <View style={ServicesStyles.newUnderLine} />
      <View style={ServicesStyles.headingButton}>
        <TouchableOpacity onPress={()=>setModalOpen(true)}>
          <LinearGradient 
            colors={['#0070FF','#29F2EA']}
            start={{x:1,y:0}}
            end={{x:0,y:0}}
            style={ServicesStyles.bookFreeConsultationCallButton}
            title="Book A Free Consultation Call">
              <Text style={ServicesStyles.bookFreeConsultationCallButtonText}>
                Book A Free Consultation Call
              </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.newTitle}>
          Speak to us to see if it's a fit for you
        </Text>
      </View> 
      <View style={{ flexDirection: 'row', textAlign: 'center', display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
        <Image source={require("../assets/phoneCall.png")} alt="PhoneCall" title="PhoneCall"></Image>
        <Text style={ServicesStyles.newTitleOne}>
          +91-9988776655
        </Text>
      </View>
      <View>
        <Image
          source={require("../assets/MoodleDevelopmentImplementation/moodleDevelopmentImplementation.jpg")}
          style={ServicesStyles.erpSolutionsImageContainer}
          alt="MoodleLMSImplementation&Development"
          title="MoodleLMSImplementation&Development">
        </Image>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.moodleLmsTextOne}>
          WHAT WE DO
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.moodleLmsTextTwo}>
          Our Moodle Development Includes
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.moodleLmsTextThree}>
          The best services we provide for our clients include our integrity to work for them and the dedication we show towards our individual projects.
        </Text>
      </View>
      <View style={ServicesStyles.moodleLmsViewOne}>
        <Image
          source={require("../assets/MoodleDevelopmentImplementation/consultant.png")}
          style={ServicesStyles.moodleLmsImageOne}
          alt="ConsultationServices"
          title="ConsultationServices">
        </Image>
        <Text style={ServicesStyles.moodleLmsTextFour}>
          Consultation Services
        </Text>
      </View>
      <View style={ServicesStyles.moodleLmsViewOne}>
        <Image
          source={require("../assets/MoodleDevelopmentImplementation/online-lesson.png")}
          style={ServicesStyles.moodleLmsImageOne}
          alt="LMSCustomizations"
          title="LMSCustomizations">
        </Image>
        <Text style={ServicesStyles.moodleLmsTextFour}>
          LMS Customizations
        </Text>
      </View>
      <View style={ServicesStyles.moodleLmsViewOne}>
        <Image
          source={require("../assets/MoodleDevelopmentImplementation/file-sharing.png")}
          style={ServicesStyles.moodleLmsImageOne}
          alt="LMSMigration&Integration"
          title="LMSMigration&Integration">
        </Image>
        <Text style={ServicesStyles.moodleLmsTextFour}>
          LMS Migration & {"\n"}Integration
        </Text>
      </View>
      <View style={ServicesStyles.moodleLmsViewOne}>
        <Image
          source={require("../assets/MoodleDevelopmentImplementation/booking.png")}
          style={ServicesStyles.moodleLmsImageOne}
          alt="LMSMobileAppDevelopment"
          title="LMSMobileAppDevelopment">
        </Image>
        <Text style={ServicesStyles.moodleLmsTextFour}>
          LMS Mobile App {"\n"}Development
        </Text>
      </View>
    </View>
    <View>
      <GetInTouchWithUsForm/>
    </View>
    <View>
      <MainFooter/>
    </View>
    <View>
      <Footer/>
    </View>
  </ScrollView>
  </>
  );
}

export default MoodleLMS;