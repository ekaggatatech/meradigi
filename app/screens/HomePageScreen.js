import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import SearchBar from '../shared/SearchBar';
import HomeServices from '../shared/HomeServices';
import GetInTouchWithUsForm from '../common/footer/GetInTouchWithUsForm';
import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';
import MainFooter from '../common/footer/MainFooter';
import Footer from '../common/footer/Footer';
import ServicesStyles from '../config/services.styles';
import { LinearGradient } from 'expo-linear-gradient';

const HomePageScreen = ({navigation}) => 
{
  const [modalOpen, setModalOpen] = useState(false);

  const [value, setValue] = useState();

  function updateSearch(value) 
  {
    console.log(value);
  }

return (
  <>
    <ScrollView style={styles.container}>
    <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <View style={ServicesStyles.positioning}>
        <Image source={require("../assets/meradigiresize2.png")} alt="meradigi" title="meradigi" />
      </View>
      <View>
        <SearchBar 
            value={value}
            updateSearch={updateSearch}
            style={{ marginTop: '2%',marginBottom: '2%' }}
          />
      </View>
      <View style={[styles.twoButtons,styles.marginStyling]}>
           <TouchableOpacity onPress={()=>setModalOpen(true)}>
            <LinearGradient 
              colors={['#0070FF','#29F2EA']}
              start={{x:1,y:0}}
              end={{x:0,y:0}}
              style={styles.bookFreeConsultationCallButton}
              title="Book A Free Consultation Call">
                <Text style={styles.bookFreeConsultationCallButtonText}>Book A Free Consultation Call</Text>
            </LinearGradient>
          </TouchableOpacity>
      </View>
      <View style={[styles.twoButtons,styles.marginStyling,styles.marginTopStyling]}>
          <TouchableOpacity onPress={() => navigation.navigate('Contact Us')} title="Contact Us">
            <View style={styles.contactUsButton}>
              <Text style={styles.contactUsButtonText}>Contact Us</Text>
            </View>
          </TouchableOpacity>
      </View>
      <View style={styles.marginStyling}>
        <HomeServices/>
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
    </ScrollView>
  </>
  )
}

const styles = StyleSheet.create({
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
    justifyContent:'center'
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
    paddingVertical: 14, 
    paddingHorizontal: 24,
    backgroundColor: 'transparent',
    borderRadius: 9
  },
  bookFreeConsultationCallButtonText:
  {
    fontSize: 16,
    fontWeight: 600,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: '#ffffff',
    backgroundColor: 'transparent',
    textAlign: 'center'
    // lineHeight: 21,
    // textShadow: '0 0 10 rgb(0 0 0 / 30%)'
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
  },
  contactUsButtonText: 
  {
    color: "#ffffff",
    fontWeight: "normal",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0.4
  }
})

export default HomePageScreen;