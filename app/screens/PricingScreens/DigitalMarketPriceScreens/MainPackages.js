import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import colors from '../../../config/colors';

const DigitalPackage = ({navigation}) => {
  return (
      <ImageBackground 
        style={styles.background}  
        source={require('../../../assets/blue_background.jpg')}> 
        <Text style={styles.welcomeheading}>Choose A Package</Text>
        <View style={[styles.logocontainer,styles.shadowProp]}>
            <View style={[styles.welcomebox ,styles.buttons]}>
              <View  style={[styles.chooseBtn, styles.padding]}>
                <Text style={styles.chooseBtntext} 
                onPress={() => navigation.navigate('Basic Package')}>BASIC</Text>
              </View>  

              <View  style={[styles.chooseBtn, styles.padding]}>
                <Text style={styles.chooseBtntext} 
                  onPress={() => navigation.navigate('Professional Package')}>PROFESSIONAL</Text>
              </View> 

              <View  style={[styles.chooseBtn, styles.padding]}>
                <Text style={styles.chooseBtntext} 
                 onPress={() => navigation.navigate('Enterprise Package')}>ENTERPRISE</Text>
              </View> 

              <View style={[styles.chooseBtn, styles.padding]}>
                <Text style={styles.chooseBtntext} 
                onPress={() => navigation.navigate('Basic Package')}>CUSTOM</Text>
              </View> 
            </View> 
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background:{
      flex:1,
      justifyContent:"flex-end",
      alignItems:"center",
  },
  logocontainer:{
    width: '90%', 
    height: '70%',
    borderRadius:15,
    borderColor:'black',
    borderWidth:2,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    position:'absolute',
    top:100,
},
welcomebox:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    
    
},
welcomeheading:{
  fontSize: 25,
  fontWeight: '800',
  position:'absolute',
  top:130,
},
shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
},
welcometext:{
  textAlign:'center',
  paddingTop:20,
},

buttons:{
  margin:50
},
padding:{
  marginBottom:20,
  marginTop:10
},
chooseBtn:{
  width:135,
  height:50,
  backgroundColor:'black',
  justifyContent:"center",
  alignItems:'center',
},
chooseBtntext:{
  color:'white',
  fontSize:15,
  fontWeight:'bold'
},

})

export default DigitalPackage