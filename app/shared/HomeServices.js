import { View, Text, StyleSheet, SafeAreaView, Image,ScrollView, Button, FlatList } from 'react-native'
import React from 'react'
import Product from '../config/Product'


//all images
const Image1='https://projects.ekaggata.com/digital/wp-content/uploads/2022/07/web-development.png'
const Image2='https://projects.ekaggata.com/digital/wp-content/uploads/2022/07/digital-marketing.png' 
const Image3='https://projects.ekaggata.com/digital/wp-content/uploads/2022/04/erp.png'
const Image4='https://projects.ekaggata.com/digital/wp-content/uploads/2022/07/seo.png'
const Image5='https://projects.ekaggata.com/digital/wp-content/uploads/2022/07/writer.png '
const Image6='https://projects.ekaggata.com/digital/wp-content/uploads/2022/07/writer.png'
const Image7='https://projects.ekaggata.com/digital/wp-content/uploads/2022/07/writer.png'
const Image8='https://projects.ekaggata.com/digital/wp-content/uploads/2022/07/actor.png'
const Image9='https://projects.ekaggata.com/digital/wp-content/uploads/2022/07/radio.png'

//name and  images 
const services =[
        {name:"Web Development", serviceImage:Image1, id:"1"},
        {name:"Digital Marketing", serviceImage:Image2,id:"2"},
        {name:"ERP Solution", serviceImage:Image3,id:"3"},
        {name:"SEO", serviceImage:Image4,id:"5"},
        {name:"Social Media Marketing", serviceImage:Image5,id:"5"},
        {name:"Content Marketing", serviceImage:Image6,id:"6"},
        {name:"Graphic Designing", serviceImage:Image7,id:"7"},
        {name:"Celebrity/Influencer Marketing", serviceImage:Image8,id:"8"},
        {name:"Radio Advertisement", serviceImage:Image9,id:"9"}
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