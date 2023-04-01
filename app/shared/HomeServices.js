import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Product from '../config/Product';
import ConsultNowModalScreen from '../modals/ConsultNowModalScreen';

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

const HomeServices = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
    <>
        <ScrollView nestedScrollEnabled={true}>
                <ConsultNowModalScreen modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <View>
                    <ScrollView nestedScrollEnabled={true}>
                        <View>
                            <Text style={styles.selectText}>
                                Select Your Prefer Service
                            </Text>
                        </View>
                        <View style={styles.productContainer}>
                            {services.map(item=> <View style={styles.newItem} key={item.id}><Product product={item} /></View>)}
                        </View>
                    </ScrollView>
                </View>
        </ScrollView>  
    </>
  );
}

export default HomeServices;

const styles = StyleSheet.create(
{
    selectText:
    {
        marginTop: 10,
        marginBottom: 0,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    confusedText:
    {
        margin:20,
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        textAlign:'center'
    },
    item:
    {
        backgroundColor:'grey',
        margin:5,
        width:50,
        padding:8,
        color:'white'
    },
    grid:
    {
        display:'flex',
        alignItems:'center'
    },
    queImage:
    {
        width:200,
        height:200,
        alignSelf:'center'
    },
    productContainer: 
    {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'  
    },
    newItem: 
    {
       display: 'flex',
       justifyContent: 'center',
       marginLeft: 'auto',
       marginRight: 'auto',
       width: '46%',
       marginBottom: 6,
       alignItems: 'center'
    }
}
)