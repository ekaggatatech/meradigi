import { View, Text, StyleSheet, SafeAreaView, Image,ScrollView, Button, FlatList } from 'react-native'
import React from 'react'
import Product from '../config/Product'


//all images
const Image1= require("../assets/servicesImg/webDev.jpeg");
const Image2= require('../assets/servicesImg/digitakmarket.jpeg'); 
const Image3= require('../assets/servicesImg/erp.jpeg');
const Image4= require('../assets/servicesImg/seo.jpeg');
const Image5= require('../assets/servicesImg/socialmedia.jpeg');
const Image6= require('../assets/servicesImg/contentWriting.jpeg');
const Image7= require('../assets/servicesImg/graphicdesign.jpeg');
const Image8= require('../assets/servicesImg/celebrityAd.jpeg');
const Image9= require('../assets/servicesImg/radio.jpeg');

//name and  images 
const services =[
        {name:"Web Development", id:"1",source:Image1},
        {name:"Digital Marketing",id:"2",source: Image2 },
        {name:"ERP Solution", id:"3",source: Image3 },
        {name:"SEO", id:"4", source: Image4},
        {name:"Social Media Marketing", id:"5",source: Image5},
        {name:"Content Marketing", id:"6", source: Image6},
        {name:"Graphic Designing", id:"7",source: Image7 },
        {name:"Celebrity/Influencer Marketing", id:"8",source: Image8 },
        {name:"Radio Advertisement",id:"9", source: Image9 }
    ]
    
//name = new page name have to same then it fetch
//and all new pages define in App.js 
//take reference of web Development page 

const HomeServices = (props) => {
    return (
        <ScrollView style={styles.scrollView}>
            <View>
                <Text style={styles.selectText} >
                    Select Your Preference
                </Text>
                <View>
                    <SafeAreaView>
                        <FlatList data={services}
                            numColumns={3}
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