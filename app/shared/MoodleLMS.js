import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native';
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
        <Pressable style={ServicesStyles.button} onPress={()=>setModalOpen(true)}>
          <Text style={ServicesStyles.text}>Free Consult</Text>
        </Pressable>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.newTitle}>
          Speak to us to see if it's a fit for you
        </Text>
      </View> 
      <View style={{ flexDirection: 'row', textAlign: 'center', display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        <Image source={require("../assets/phoneCall.png")} alt="PhoneCall" title="PhoneCall"></Image>
        <Text style={ServicesStyles.newTitleOne}>
          +91-9988776655
        </Text>
      </View>
      <View>
        <Image
        source={require("../assets/MoodleDevelopmentImplementation/moodleDevelopmentImplementation.jpg")}
        style={ServicesStyles.erpSolutionsImageContainer}
        alt="OdooERPImplementation"
        title="OdooERPImplementation">
      </Image>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.erpWebText}>Services We Offer</Text>
      </View>
      <View style={ServicesStyles.servicesCardMainViewOne}>
        <View style={ServicesStyles.servicesCard}>
          <Text style={ServicesStyles.servicesText}>
            CRM
          </Text>
        </View>
        <View style={ServicesStyles.servicesCard}>
          <Text style={ServicesStyles.servicesText}>
            Sales Management
          </Text>
        </View>
        <View style={ServicesStyles.servicesCard}>
          <Text style={ServicesStyles.servicesText}>
            Invoicing
          </Text>
        </View>
        <View style={ServicesStyles.servicesCard}>
          <Text style={ServicesStyles.servicesText}>
            Recruitment Management
          </Text>
        </View>
        <View style={ServicesStyles.servicesCard}>
          <Text style={ServicesStyles.servicesText}>
            Event Marketing
          </Text>
        </View>
        <View style={ServicesStyles.servicesCard}>
          <Text style={ServicesStyles.servicesText}>
            Manufacturing Apps
          </Text>
        </View>
        <View style={ServicesStyles.servicesCard}>
          <Text style={ServicesStyles.servicesText}>
            Warehouse Management
          </Text>
        </View>
        <View style={ServicesStyles.servicesCard}>
          <Text style={ServicesStyles.servicesText}>
            Project Management
          </Text>
        </View>
      </View>
      <View>
        <Image
        source={require("../assets/OdooERPImplementation/odooERPStructure.png")}
        style={ServicesStyles.erpSolutionsImageContainer}
        alt="WhyOdooERP?"
        title="WhyOdooERP?">
        </Image>
      </View>
      <View style={[ServicesStyles.letsStartButtonView,ServicesStyles.mainMarginBottomProp]}>
        <TouchableOpacity 
          style={ServicesStyles.letsStartButton}
          alt="Lets Start" 
          title="Lets Start"
          onPress={()=>setModalOpen(true)}>
            <Text style={ServicesStyles.letsStartButtonText}>
              Lets Start
            </Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={ServicesStyles.ourGlobalStatsView}>
        <LinearGradient 
          colors={['#FFAAF2','#A2D7F4']}
          start={{x:1,y:0}}
          end={{x:0,y:0}}
          style={ServicesStyles.ourGlobalStatsLinearGradient}>
            <View style={{ marginBottom: 10 }}>
              <Text style={ServicesStyles.ourGlobalStatsTitle}>
                Our Global Stats
              </Text>
            </View>
            <View style={{ marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ marginBottom: 10 }}>
                <Text style={ServicesStyles.ourGlobalStatsTitle}>
                  25+
                </Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={ServicesStyles.ourGlobalStatsSubContent}>
                  Projects Completed
                </Text>
              </View>
            </View>
            <View style={{ marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ marginBottom: 10 }}>
                <Text style={ServicesStyles.ourGlobalStatsTitle}>
                  100+
                </Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={ServicesStyles.ourGlobalStatsSubContent}>
                  Happy Clients
                </Text>
              </View>
            </View>
            <View style={{ marginBottom: 0, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ marginBottom: 10 }}>
                <Text style={ServicesStyles.ourGlobalStatsTitle}>
                  4
                </Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={ServicesStyles.ourGlobalStatsSubContent}>
                  Global Clients
                </Text>
              </View>
            </View>
          </LinearGradient>
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