import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ServicesStyles from '../config/services.styles';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuScreen = () => {
  const navigation = useNavigation();
  return (
      <ScrollView>
      <View style={styles.containerBox}>
        {/* <View>
          <Image style={ServicesStyles.webDevImage} source={require("../assets/team.png")}/>
        </View> */}
        <View style={ServicesStyles.positioning}>
          <Image source={require("../assets/meradigiresize2.png")} alt="meradigi" title="meradigi" style={ServicesStyles.mainMarginBottomProp} />
        </View>
        <View>
          <TouchableOpacity style={styles.iconsView} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Home')}>HOME</Text>  
            {/* <Icon 
             style={styles.icons} 
             name='wechat' 
             size={30} 
             color='#00d4ff'/> */}
            {/* <Text style={styles.iconText}>Q & A</Text> */}
          </TouchableOpacity>
        </View>
        <View style={styles.iconsView}>
          {/* <Icon 
             style={styles.icons} 
             name='star' 
             size={30} 
             color='#00d4ff'/> */}
          {/* <Text style={styles.iconText}>Rate App</Text> */}
          <Text style={styles.iconText} onPress={() => navigation.navigate('Services')}>OUR SERVICES</Text>
        </View>
        <View style={styles.iconsView}>
         {/*  <Icon 
             style={styles.icons} 
             name='share' 
             size={30} 
             color='#00d4ff'/>
          <Text style={styles.iconText}>Share</Text> */}
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>PRICING PLANS</Text>
        </View>
        <View style={styles.iconsView}>
          {/* <Icon 
             style={styles.icons} 
             name='check' 
             size={30} 
             color='#00d4ff'/>
          <Text style={styles.iconText}>Feedback</Text> */}
          <Text style={styles.iconText} onPress={() => navigation.navigate('About Us')}>ABOUT US</Text>
        </View>
        <View style={styles.iconsView}>
          <Text style={styles.iconText} onPress={() => navigation.navigate('Login')}>LOG IN</Text>
        </View>
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({

  iconsView:
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