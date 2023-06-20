import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ServicesStyles from '../config/services.styles';
import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';
import GetInTouchWithUsForm from '../common/footer/GetInTouchWithUsForm';
import MainFooter from '../common/footer/MainFooter';
import Footer from '../common/footer/Footer';

const ErpSolution = () => 
{
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <ScrollView nestedScrollEnabled={true}>
    <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
    <View style={ServicesStyles.container}>
      <View style={ServicesStyles.mainMarginBottomProp}>
        <Image style={ServicesStyles.webDevImage} source={require("../assets/OdooERPImplementation/erpsolution.jpg")} />
      </View>
      <View style={ServicesStyles.mainMarginBottomProp}>
        <Text style={ServicesStyles.erpWebText}>Odoo ERP Implementation</Text>
      </View>
      <View style={ServicesStyles.mainMarginBottomProp}>
        <Text style={ServicesStyles.webText}>Our best-in-class Business solution, {'\n'}To le you to grow business higher!</Text>
      </View>
      {/* <View style={ServicesStyles.mainMarginBottomProp}>
        <Text style={ServicesStyles.erpWebText}>
          Odoo ERP {'\n'}Implementation
        </Text>
      </View> */}
      <View style={ServicesStyles.mainMarginBottomProp}>
        <Text style={ServicesStyles.erpSolutionsText}>
          <Text style={{ fontWeight: 'bold' }}>Odoo Implementation</Text> is the service of implementing the <Text style={{ fontWeight: 'bold' }}>Odoo modules</Text> (formerly known as OpenERP and before that, TinyERP) and <Text style={{ fontWeight: 'bold' }}>Odoo Apps</Text>, which is a suite of open-source enterprise management applications.Targeting companies of all sizes, the application suite includes <Text style={{ fontWeight: 'bold' }}>odoo modules</Text> and <Text style={{ fontWeight: 'bold' }}>Odoo Apps</Text> like <Text style={{ fontWeight: 'bold' }}>Sales-Purchase Management, Accounting, Bills of materials, Warehouses Management </Text>and almost all running operations.
        </Text>
      </View>
      <View style={ServicesStyles.newUnderLine} />
      {/* <View style={ServicesStyles.headingButton}>
        <TouchableOpacity>
          <LinearGradient 
            colors={['#0070FF','#29F2EA']}
            start={{x:1,y:0}}
            end={{x:0,y:0}}
            style={ServicesStyles.bookFreeConsultationCallButton}
            title="Free Consultation">
              <Text style={ServicesStyles.bookFreeConsultationCallButtonText}>Free Consultation</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View> */}
      <View style={ServicesStyles.mainMarginBottomProp}>
        <Text style={ServicesStyles.newTitle}>
          Speak to us to see if it's a fit for you
        </Text>
      </View> 
      <View style={ServicesStyles.mobileNumberPosition}>
        <Image source={require("../assets/phoneCall.png")} alt="PhoneCall" title="PhoneCall"></Image>
        <Text style={ServicesStyles.newTitleOne}>
          +91-9988776655
        </Text>
      </View>
      <View>
        <Image
        source={require("../assets/OdooERPImplementation/imageOne.jpg")}
        style={ServicesStyles.erpSolutionsImageContainer}
        alt="OdooERPImplementation"
        title="OdooERPImplementation">
      </Image>
      </View>
      <View style={ServicesStyles.mainMarginBottomProp}>
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
            <View style={ServicesStyles.mainMarginBottomProp}>
              <Text style={ServicesStyles.ourGlobalStatsTitle}>
                Our Global Stats
              </Text>
            </View>
            <View style={{ marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View style={ServicesStyles.mainMarginBottomProp}>
                <Text style={ServicesStyles.ourGlobalStatsTitle}>
                  25+
                </Text>
              </View>
              <View style={ServicesStyles.mainMarginBottomProp}>
                <Text style={ServicesStyles.ourGlobalStatsSubContent}>
                  Projects Completed
                </Text>
              </View>
            </View>
            <View style={{ marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View style={ServicesStyles.mainMarginBottomProp}>
                <Text style={ServicesStyles.ourGlobalStatsTitle}>
                  100+
                </Text>
              </View>
              <View style={ServicesStyles.mainMarginBottomProp}>
                <Text style={ServicesStyles.ourGlobalStatsSubContent}>
                  Happy Clients
                </Text>
              </View>
            </View>
            <View style={{ marginBottom: 0, justifyContent: 'center', alignItems: 'center' }}>
              <View style={ServicesStyles.mainMarginBottomProp}>
                <Text style={ServicesStyles.ourGlobalStatsTitle}>
                  4
                </Text>
              </View>
              <View style={ServicesStyles.mainMarginBottomProp}>
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

export default ErpSolution;