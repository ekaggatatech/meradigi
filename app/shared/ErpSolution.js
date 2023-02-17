import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native';
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
    <ScrollView>
    <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
    <View style={ServicesStyles.container}>
      <View style={{ marginBottom: 10 }}>
        <Image style={ServicesStyles.webDevImage} source={require("../assets/OdooERPImplementation/erpsolution.jpg")} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.webText}>Odoo ERP Implementation</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.webText}>Our best-in-class Business solution, {'\n'}To le you to grow business higher!</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.erpWebText}>
          Odoo ERP {'\n'}Implementation
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={ServicesStyles.erpSolutionsText}>
        <Text style={{ fontWeight: 'bold' }}>Odoo Implementation</Text> is the service of implementing the <Text style={{ fontWeight: 'bold' }}>Odoo modules</Text> (formerly known as OpenERP and before that, TinyERP) and <Text style={{ fontWeight: 'bold' }}>Odoo Apps</Text>, which is a suite of open-source enterprise management applications.Targeting companies of all sizes, the application suite includes <Text style={{ fontWeight: 'bold' }}>odoo modules</Text> and <Text style={{ fontWeight: 'bold' }}>Odoo Apps</Text> like <Text style={{ fontWeight: 'bold' }}>Sales-Purchase Management, Accounting, Bills of materials, Warehouses Management </Text>and almost all running operations.
        </Text>
        {/* <Text style={ServicesStyles.erpSolutionsText}>
          <Text style={{ fontWeight: 'bold' }}>Odoo ERP Implementation</Text> is no doubt the best complete open-source ERP implementation software services available in the market today.
          {'\n'}With more than 2 million users already using the services and 3000 Odoo Apps and various different Odoo Modules it has been as rightly being said the fastest growing ERP software.
          {'\n'}Odoo’s amazing 3000 apps serves all your business purposes. We provide seamless customizations, custom development as well as integration to various popular business services with odoo.
        </Text> */}
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
        source={require("../assets/OdooERPImplementation/imageOne.jpg")}
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
        {/* <View style={{ marginBottom: 10 }}>
          <Text style={ServicesStyles.erpContentText}>
            Why Odoo ERP?
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={ServicesStyles.erpSubContentText} numberOfLines={20}>
            Odoo ERP is an incorporated and complete set-up of business the board applications and modules. 
            It can consistently oversee bookkeeping, charging, HR, finance, and client relationship. 
            This large number of modules really assist you with maintaining your business easily too to helpfully convey your administrations more. 
            In light of everything, Odoo has every one of the functionalities, elements, and qualities that an oversaw administrations area needs. 
            Execution of Odoo ERP brings about better efficiency, quality as well as administration consistency. 
            Get a savvy and financial plan well disposed ERP framework to further develop your business execution..
          </Text>
        </View> */}
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
        {/* <View style={ServicesStyles.odooIndustriesContainer}>
          <View style={ServicesStyles.odooIndustriesView}>
            <Text style={ServicesStyles.odooIndustriesText}>
              Odoo ERP {'\n'}in Various Industries
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Digital Marketing & Advertising
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Transportation & Hospitality
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Wholesale Distribution
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Steel & Metal
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Non-Profit Sector
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Education
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Construction
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Plastic Industry
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Manufacturing
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              IT Services
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Apparel and Textiles
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Consumer ERP
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Health Care
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Financial Services
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Public Sector
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Retail Industry
            </Text>
          </View>
          <View style={ServicesStyles.odooIndustriesSubView}>
            <Text style={ServicesStyles.odooIndustriesSubText}>
              Energy
            </Text>
          </View>
        </View> */}
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
  );
}

export default ErpSolution;