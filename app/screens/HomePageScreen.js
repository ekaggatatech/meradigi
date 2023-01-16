import React, { useState } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import SearchBar from '../shared/SearchBar';
import HomeServices from '../shared/HomeServices';
import GetInTouchWithUsForm from '../common/footer/GetInTouchWithUsForm';
import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';
import MainFooter from '../common/footer/MainFooter';
import Footer from '../common/footer/Footer';

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
      <View>
        <SearchBar 
            value={value}
            updateSearch={updateSearch}
            style={{ marginTop: '2%',marginBottom: '2%' }}
          />
      </View>
      <View style={[styles.twoButtons,styles.marginStyling]}>
          <Button
            title="Book A Free Consultation Call"
            onPress={()=>setModalOpen(true)}
          />
      </View>
      <View style={[styles.twoButtons,styles.marginStyling,styles.marginTopStyling]}>
          <Button
            title="Contact Us"
            onPress={() => navigation.navigate('Contact Us')}
          />
      {/* <View style={styles.twoButtons}>
          <Button
              title="Talk To Us"
              onPress={() => navigation.navigate('Talk To Us')}
          />
      </View> */}
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
    borderRadius: 0
  },
  twoButtons:
  {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center'
  },
  marginStyling:
  {
    matrginBottom: 0,
    marginTop: 0
  },
  marginTopStyling:
  {
    marginTop: 10
  }
})

export default HomePageScreen;