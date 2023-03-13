import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
// import ServicesStyles from '../config/services.styles';
// import { useNavigation } from '@react-navigation/native';
import SlideItem from './SlideItem';

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

const MenuScreen = () => 
{
   // const navigation = useNavigation();
   const slides = 
   [
       {
           index: 1,
           id: 1,
           img: Image1,
           title: "Get A Mobile App"
       },
       {
           index: 2,
           id: 2,
           img: Image2,
           title: "I Want A Very Fast Website"
       },
       {
           index: 3,
           id: 3,
           img: Image3,
           title: "Rank My Website On Google"
       },
       {
           index: 4,
           id: 4,
           img: Image4,
           title: "Make Me Popular On Youtube"
       },
       {
        index: 5,
        id: 5,
        img: Image5,
        title: "Make My Videos Popular On Facebook"
      },
      {
        index: 6,
        id: 6,
        img: Image6,
        title: "Make My Videos Popular On Instagram"
      },
      {
        index: 7,
        id: 7,
        img: Image7,
        title: "Advertise On Radio"
      },
      {
        index: 8,
        id: 8,
        img: Image8,
        title: "Hire A Celebrity"
      },
      {
        index: 9,
        id: 9,
        img: Image9,
        title: "Odoo ERP Implementation"
      },
      {
        index: 10,
        id: 10,
        img: Image10,
        title: "Moodle LMS Development"
      },
      {
        index: 11,
        id: 11,
        img: Image11,
        title: "Add Audio/Video Feature In My Website"
      },
      {
        index: 12,
        id: 12,
        img: Image12,
        title: "Make My Product Famous"
      },
      {
        index: 13,
        id: 13,
        img: Image13,
        title: "Digital Marketing"
      },
      {
        index: 14,
        id: 14,
        img: Image14,
        title: "I Want An Annual Maintenance Plan"
      },
      {
        index: 15,
        id: 15,
        img: Image15,
        title: "Get A Best Hosting Plan"
      },
      {
        index: 16,
        id: 16,
        img: Image16,
        title: "Hire A Developer"
      }
   ];
  return (
    <>
      {/* <ScrollView nestedScrollEnabled={true}>
        <View style={styles.containerBox}>
          <View style={ServicesStyles.positioning}>
            <Image source={require("../assets/meradigiresize2.png")} alt="meradigi" title="meradigi" style={ServicesStyles.mainMarginBottomProp} />
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Get A Mobile App</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>I Want A Very Fast Website</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Rank My Website On Google</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Make Me Popular On Youtube</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Make My Videos Popular On Facebook</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Make My Videos Popular On Instagram</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Advertise On Radio</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Hire A Celebrity</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Odoo ERP Implementation</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Moodle LMS Development</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Add Audio/Video Feature In My Website</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Make My Product Famous</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Digital Marketing</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>I Want An Annual Maintenance Plan</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Get A Best Hosting Plan</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>Hire A Developer</Text>
          </View>
        </View>
      </ScrollView> */}
      <View>
        <FlatList 
          data={slides}
          //data={Slides} 
          renderItem={({item})=><SlideItem item={item} />}
          // horizontal
          horizontal = {true}
          pagingEnabled
          snapToAlignment='center'
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create(
{
  /* iconsView:
  {
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#FE0629',
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  icons:{
    paddingLeft:20 
  },
  iconText:{
    fontWeight:'bold',
    fontSize:18,
    textAlign: 'center'
  },
  containerBox:
  {
    paddingTop: 0,
    backgroundColor: '#FFFFFF'
  } */
}
);

export default MenuScreen;