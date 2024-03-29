import { View, Text, StyleSheet, SafeAreaView, Image,ScrollView, Button, FlatList } from 'react-native'
import React from 'react'
import Product from '../config/Product'


//all images
const Image1= require("../assets/servicesImg/GetMobileApp.png");
const Image2= require('../assets/servicesImg/Iwantveryfastwebsite.png'); 
const Image3= require('../assets/servicesImg/Rankmywebsiteongoogle.png');
const Image4= require('../assets/servicesImg/Popularonyoutube.png');
const Image5= require('../assets/servicesImg/PopularonFacebook.png');
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

//name and  images 
const services =[
        {name:"Get Mobile App", id:"1",source:Image1},
        {name:"I Want A Very Fast Website",id:"2",source: Image2 },
        {name:"Rank My Website On Google", id:"3",source: Image3 },
        {name:"Make Me Popular On Youtube", id:"4", source: Image4},
        {name:"Make My Videos Popular On Facebook", id:"5",source: Image5},
        {name:"Make My Videos Popular On Instagram", id:"6", source: Image6},
        {name:"Advertise On Radio", id:"7",source: Image7 },
        {name:"Hire A Celebrity", id:"8",source: Image8 },
        {name:"I Want Odoo ERP",id:"9", source: Image9 },
        {name:"I Need Moodle LMS",id:"10", source: Image10 },
        {name:"Add Audio/Video Feature In My Website",id:"11", source: Image11 },
        {name:"Make My Product Famous",id:"12", source: Image12 },
        {name:"Digital Marketing Plans",id:"13", source: Image13},
        {name:"I Want An Annual Maintenance Plan",id:"14", source: Image14},
        {name:"Get A Best Hosting Plan",id:"15", source: Image15 },
        {name:"Hire A Developer",id:"16", source: Image16},
       
    ]

//name = new page name have to same then it fetch
//and all new pages define in App.js 
//take reference of web Development page 

const HomeServices = (props) => {
    return (
        <ScrollView style={styles.scrollView} nestedScrollEnabled={true} >
            <View>
                <Text style={styles.selectText} >
                    Select Your Preference
                </Text>
                <View>
                    <SafeAreaView>
                        <FlatList 
                            style={styles.flatlistDesign}
                            data={services}
                            numColumns={2}
                            keyExtractor={(index) => index.id}
                            renderItem={({item}) => (<Product product={item}/>)}/>
                    </SafeAreaView>
                </View>
                <Text style={styles.confusedText}>
                   I'm Confused
                </Text>
                <View>
                  <Image style={styles.queImage} source={require("../assets/queImage.png")}/>
                  <Text style={styles.confusedText} >
                   Book A free 15 min Consultation Call
                </Text>
                <Button
                    style={styles.bookButton}
                    title="Book A Call"
                />
                </View>
            </View>
        </ScrollView>  
  )
}

const styles = StyleSheet.create({

    flatlistDesign:{

    },
    selectText:{
        margin:10,
        fontSize:20,
        fontWeight:'bold',
    },
    confusedText:{
        margin:20,
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        textAlign:'center'

    },
    item:{
        backgroundColor:'grey',
        margin:5,
        width:50,
        padding:8,
        color:'white'
    },
    grid:{
        display:'flex',
        alignItems:'center'
    },
    queImage:{
        width:200,
        height:200,
        alignSelf:'center',
    },
    scrollView: {
        
    },
      
    bookButton:{
        

    }
})

export default HomeServices