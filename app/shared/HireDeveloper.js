import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import HireDevelopersInfoCard from '../cards/HireDevelopersInfoCard';
import Footer from '../common/footer/Footer';
import MainFooter from '../common/footer/MainFooter';
import ServicesStyles from '../config/services.styles';
import HireDeveloperOurTeam from '../cards/HireDeveloperOurTeam';
import HireDeveloperModalScreen from '../modals/HireDeveloperModalScreen';

const HireDeveloper = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <ScrollView nestedScrollEnabled={true} style={styles.container}>
        <HireDeveloperModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', marginTop: 0, paddingTop: 0 }}>
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'normal', fontSize: 16, letterSpacing: 0.1, color: 'black' }}>
              Find the perfect service for your business
            </Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'normal', fontSize: 16, letterSpacing: 0.1, color: 'black' }}>
              Get access to a wide range of services, from web development and design to digital marketing and customer service, all in one place
            </Text>
          </View>
          {/* <View style={{ marginTop: 0, margin: 10 }}>
            <Button style={{ borderRadius: 6, borderColor: 'black', borderWidth: 1 }}>
              <Text style={{  textAlign: 'center', fontWeight: 'bold', fontSize: 16, letterSpacing: 0.1, color: 'black' }}>
                Get Services  <Image source={require("../assets/HireDeveloper/nextBlack.png")}></Image>
              </Text>
            </Button>
          </View> */}
          {/* <View style={{ marginBottom: 10 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, letterSpacing: 0.1, color: 'black' }}>
              Skills Category
            </Text>
          </View> */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 32, letterSpacing: 0.1, color: '#00000080' }}>
              We are the best freelance platform for finding professionals for your project needs.
            </Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <HireDevelopersInfoCard />
          </View>
          <View style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <Button style={{ borderRadius: 10, fontSize: 10, color: '#fff', backgroundColor: '#FF0053', width: '80%', heigh: 'auto' }} onPress={()=>setModalOpen(true)} title="Hire a Developer">
              <Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>
                Hire a Developer
              </Text>
            </Button>
            {/* <TouchableOpacity onPress={()=>setModalOpen(true)} title="Contact Us" style={{ marginBottom: 10 }}>
            <View style={ServicesStyles.contactUsButton}>
              <Text style={ServicesStyles.contactUsButtonText}>
                Contact Us
              </Text>
            </View>
            </TouchableOpacity> */}
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: '#292929', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
              Why Our Developers Are Best
            </Text>
          </View>
          <View>
              <View style={ServicesStyles.whyOurDeveloperCard}>
                  <View style={{ marginBottom: 5, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                      <Image source={require("../assets/HireDeveloper/money-bag.png")} ></Image>
                  </View>
                  <View style={{ marginBottom: 5 }}>
                      <Text style={ServicesStyles.whyDeveloperCardText}>
                        Affordability
                      </Text>
                  </View>
                  <View>
                      <Text style={{ textAlign: 'center', color: '#716c80', fontSize: 16, fontWeight: 400 }}>
                        We believe that quality development shouldn't have to come at a high cost.
                      </Text>
                  </View>
              </View>
              <View style={ServicesStyles.whyOurDeveloperCard}>
                  <View style={{ marginBottom: 5, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                      <Image source={require("../assets/HireDeveloper/agenda.png")} ></Image>
                  </View>
                  <View style={{ marginBottom: 5 }}>
                      <Text style={ServicesStyles.whyDeveloperCardText}>
                        Accreditation
                      </Text>
                  </View>
                  <View>
                      <Text style={{ textAlign: 'center', color: '#716c80', fontSize: 16, fontWeight: 400 }}>
                        "Our team of developers is highly skilled and accredited, with years of experience in the industry."
                      </Text>
                  </View>
              </View>
              <View style={ServicesStyles.whyOurDeveloperCard}>
                  <View style={{ marginBottom: 5, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                      <Image source={require("../assets/HireDeveloper/graduation-cap.png")} ></Image>
                  </View>
                  <View style={{ marginBottom: 5 }}>
                      <Text style={ServicesStyles.whyDeveloperCardText}>
                        Experties
                      </Text>
                  </View>
                  <View>
                      <Text style={{ textAlign: 'center', color: '#716c80', fontSize: 16, fontWeight: 400 }}>
                        "You get access to the best developers who have proven their expertise through our rigorous vetting process."
                      </Text>
                  </View>
              </View>
              <View style={ServicesStyles.whyOurDeveloperCard}>
                  <View style={{ marginBottom: 5, display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                      <Image source={require("../assets/HireDeveloper/handshake.png")} ></Image>
                  </View>
                  <View style={{ marginBottom: 5 }}>
                      <Text style={ServicesStyles.whyDeveloperCardText}>
                        Track Record
                      </Text>
                  </View>
                  <View>
                      <Text style={{ textAlign: 'center', color: '#716c80', fontSize: 16, fontWeight: 400 }}>
                        "With numerous satisfied clients who have seen significant improvements in their online presence."
                      </Text>
                  </View>
              </View>
            </View>
            <View style={{ marginBottom: 10 }}>
              <View style={{ marginBottom: 5, marginLeft: 10 }}>
                <Text style={{ color: '#58468c', fontSize: 16, fontWeight: 700 }}>
                  Care About Us
                </Text>
              </View>
              <View style={{ marginBottom: 5, marginLeft: 10 }}>
                <Text style={{ color: '#292929', fontSize: 20, fontWeight: 700,
                  // textShadow: '0 0 0 rgba(0,0,0,.3)'
                }}>
                  How We Can Be The Help
                </Text>
              </View>
              <View style={{ marginBottom: 5, marginLeft: 10 }}>
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'normal' }}>
                  We understand that every business is unique, which is why we take the time to get to know you and your brand before we start building. Our goal is to create a website that truly reflects your business and helps you stand out from the competition.
                </Text>
              </View>
              <View style={{ marginBottom: 5, marginLeft: 10 }}>
                <Text style={{ color: '#292929', fontSize: 20, fontWeight: 'bold' }}>
                  Best Security Services
                </Text>
              </View>
              <View style={{ marginBottom: 5, marginLeft: 10 }}> 
                <Text style={{ color: '#616161', fontSize: 16, fontWeight: 'normal' }}>
                  "Experienced developers who stay up to date with the latest web development trends and technologies."
                </Text>
              </View>
              <View style={{ marginBottom: 5, marginLeft: 10 }}>
                <Text style={{ color: '#292929', fontSize: 20, fontWeight: 'bold' }}>
                  Online Services
                </Text>
              </View>
              <View style={{ marginBottom: 10, marginLeft: 10 }}>
                <Text style={{ color: '#616161', fontSize: 16, fontWeight: 'normal' }}>
                  Hire Developers from anywhere in the world. As per your convenient duration.
                </Text>
              </View>
              <View style={{ marginBottom: 5, display: 'flex', justifyContent: 'flex-start', marginLeft: 10, marginRight: 'auto' }}>
                <Button style={{ 
                    //padding: 17px 37px 17px 37px;
                    //font-family: "Roboto",Sans-serif;
                    fontSize: 15,
                    fontWeight: 400,
                    textTransform: 'capitalize',
                    backgroundColor: '#4f5fcd',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 999,
                    width: 'auto',
                    height: 'auto',
                    padding: 5
                  }}>
                  <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 15 }}>
                    Learn More   <Image source={require("../assets/HireDeveloper/next.png")}></Image>
                  </Text>
                </Button>
              </View>
              {/* <View style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                <Image source={require("../assets/HireDeveloper/hireDeveloperImg.png")} alt="WEB DEVELOPER WANTED" title="WEB DEVELOPER WANTED"></Image>
              </View> */}
            </View>
            <View style={{ marginBottom: 10 }}>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ textAlign: 'center', fontSize: 28, color: '#000000', fontWeight: 'bold' }}>
                  OUR TEAM
                </Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <HireDeveloperOurTeam />
              </View>
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
  }
}
);

export default HireDeveloper;