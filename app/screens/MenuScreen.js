import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import ServicesStyles from '../config/services.styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuScreen = () => {
  const navigation = useNavigation();
  return (
      <ScrollView>
      <View style={styles.containerBox}>
        {/* <View>
          <Image style={ServicesStyles.webDevImage} source={require("../assets/team.png")}/>
        </View> */}
        <View style={ServicesStyles.positioning}>
          <Image style={ServicesStyles.companyLogoImage} source={require("../assets/meradigi.png")} alt="meradigi" title="meradigi" />
        </View>
        <View style={styles.iconsView}>
          {/* <Icon 
             style={styles.icons} 
             name='wechat' 
             size={30} 
             color='#00d4ff'/> */}
          {/* <Text style={styles.iconText}>Q & A</Text> */}
          <Text style={styles.iconText} onPress={() => navigation.navigate('Home')}>Home</Text>  
        </View>
        <View style={styles.iconsView}>
          {/* <Icon 
             style={styles.icons} 
             name='star' 
             size={30} 
             color='#00d4ff'/> */}
          {/* <Text style={styles.iconText}>Rate App</Text> */}
          <Text style={styles.iconText} onPress={() => navigation.navigate('Services')}>Our Services</Text>
        </View>
        <View style={styles.iconsView}>
         {/*  <Icon 
             style={styles.icons} 
             name='share' 
             size={30} 
             color='#00d4ff'/>
          <Text style={styles.iconText}>Share</Text> */}
            <Text style={styles.iconText}>Pricing</Text>
        </View>
        <View style={styles.iconsView}>
          {/* <Icon 
             style={styles.icons} 
             name='check' 
             size={30} 
             color='#00d4ff'/>
          <Text style={styles.iconText}>Feedback</Text> */}
          <Text style={styles.iconText} onPress={() => navigation.navigate('AboutUs')}>About Us</Text>
        </View>
        <View style={styles.iconsView}>
          <Text style={styles.iconText} onPress={() => navigation.navigate('Login')}>Log In</Text>
        </View>
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({

  iconsView:{
    /*margin: 12,*/
    paddingTop: 18,
    paddingBottom: 18
    /* display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto' */
  },
  icons:{
    paddingLeft:20 
  },
  iconText:{
    fontWeight:'bold',
    fontSize:18,
    /* paddingLeft:20, */
    textAlign: 'center'
  },
  containerBox:
  {
    paddingTop: 10
    /* alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center' */
  }
})

export default MenuScreen