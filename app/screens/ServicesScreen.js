import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ServicesStyles from '../config/services.styles';
import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';
import ServicesCardViewScreen from '../cards/ServicesCardViewScreen';
import FeaturesCardViewScreen from '../cards/FeaturesCardViewScreen';
import Banner from '../assets/banner/pkrnxegurgm-1-819x1024.jpg';
import GetInTouchWithUsForm from '../common/footer/GetInTouchWithUsForm';
import MainFooter from '../common/footer/MainFooter';
import Footer from '../common/footer/Footer';

const ServicesScreen = () => 
{
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <ScrollView nestedScrollEnabled={true}>
      <View style={ServicesStyles.container}>
      <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {/* <View style={ServicesStyles.positioning}>
        <Image source={require("../assets/meradigiresize2.png")} alt="meradigi" title="meradigi" />
      </View> */}
      <View style={ServicesStyles.marginStyles}>
        <Text style={ServicesStyles.webText}>
          Web Development Services
        </Text>
      </View>
      <View style={ServicesStyles.newMarginStyles}>
        <Text style={ServicesStyles.newWebText}>Our best-in-class Business solution,</Text>
        <Text style={ServicesStyles.newWebText}>To le you to grow business higher!</Text>
      </View>
      <View>
        <Image style={ServicesStyles.webDevImage} source={require("../assets/gif/Clip_distance_education_by_Icons8.gif")} />
      </View>
      <View>
        <Text style={ServicesStyles.newTitle}>
          Website For Business
        </Text>
        <Text style={ServicesStyles.webinfoText}>
          More than a portfolio or showcase of your wares and services, a truly focussed business website should be your highest performing sales person. They’re your virtual shopfront, customer support and sales team rolled into one. Done right, a business website builds rapport and trust with potential customers before they even get on the phone—or gets straight to making the sale.
        </Text>
      </View>
      <View style={ServicesStyles.viewStyleForLine}></View>
      <View style={ServicesStyles.headingButton}>
        <Pressable style={ServicesStyles.button} onPress={()=>setModalOpen(true)}>
          <Text style={ServicesStyles.text}>Free Consult</Text>
        </Pressable>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={ServicesStyles.newTitle}>
          Speak to us to see if it's a fit for you
        </Text>
      </View> 
      <View style={{ flexDirection: 'row', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <Image source={require("../assets/phoneCall.png")} alt="PhoneCall" title="PhoneCall"></Image>
        <Text style={ServicesStyles.newTitleOne}>
          +91-9988776655
        </Text>
      </View>
    </View>
    <View style={ServicesStyles.container}>
      <View style={{ marginTop: 20, marginBottom: 10 }}>
        <Text style={ServicesStyles.webText}>Our Web Development Services Include</Text>
      </View>
        <ServicesCardViewScreen />
      <View>
        <Text style={ServicesStyles.featuresWebText}>Check The Features</Text>
      </View>
        <FeaturesCardViewScreen />
    </View>
    <View style={ServicesStyles.imageView}>
        <View style={{ marginBottom: 10 }}>
          <Image source={Banner} alt="Why do you want a website ?" title="Why do you want a website ?" style={ServicesStyles.imagePositioning}></Image>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={ServicesStyles.contentText}>
            Why do you want a website ?
          </Text>
        </View>
        <View>
          <Text style={ServicesStyles.subContentText}>
            Having a website <Text style={{ fontWeight: 'bold' }}>makes you look professional and increases trust.</Text>
          </Text>
        </View>
        <View>
          <Text style={ServicesStyles.subContentText}>
              Most people don’t trust a business without a good website.
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={ServicesStyles.subContentText}>
            A clean, modern page that is regularly updated and pops up in search engines is an instant credibility boost.
          </Text>
        </View>
        <View style={ServicesStyles.letsStartButtonView}>
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

export default ServicesScreen;