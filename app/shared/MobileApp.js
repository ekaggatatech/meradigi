import { View, Text, Image ,ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import ServicesStyles from '../config/services.styles'


const MobileApp = ({navigation}) => {
  return (
    <ScrollView>
      <View style={ServicesStyles.container}>
        <View >
          <Image style={styles.mobileappImage} source={require('../assets/mobileApp/app_5.png')}/>
        </View>
        <View style={ServicesStyles.headingButton}>
          <View style={ServicesStyles.line}/>
          <Text style={ServicesStyles.webText}>Mobile App Development</Text>
        </View>
        <View>
          <Text style={ServicesStyles.webinfoText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a and typesetting industry. 
            </Text>
        </View>
        <View>
          <Image style={styles.mobileappImage} source={require('../assets/mobileApp/app_1.png')}/>
        </View>
        <Text style={ServicesStyles.webinfoText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </Text>
        <View>
          <Image style={styles.mobileappImage} source={require('../assets/mobileApp/app_3.png')}/>
        </View>
        <Text style={ServicesStyles.webinfoText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </Text>
        <View>
          <Text style={styles.baseText}>
            How It's
          <Text style={styles.innerText}> Work?</Text>
          </Text>
        </View>
        <View style={styles.workmode}>
          <Text>1</Text>
        </View>
        <View style={styles.workmode}>
          <Text>2</Text>
        </View>
        <View style={styles.workmode}>
          <Text>3</Text>
        </View>
        <View style={ServicesStyles.exploreBtn}>
            <Text style={ServicesStyles.exploreBtntext} 
            >Choose Plan</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mobileappImage:{
    width:400,
    height:400,
    resizeMode:'cover',
  },
  baseText: {
    fontWeight: 'bold',
    fontSize:25,
    marginLeft:10
  },
  innerText: {
    color: '#00d4ff'
  },
  workmode:{
    margin:30,
    width:350,
    height:80,
    backgroundColor:'#b0c4de',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:8,
  }
})

export default MobileApp