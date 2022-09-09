import { View, Text,Image, StyleSheet} from 'react-native'
import React from 'react'
import ServicesStyles from '../config/services.styles'
import Icon from 'react-native-vector-icons/FontAwesome'


const MenuScreen = () => {
 
  return (
      <View>
        <View>
          <Image style={ServicesStyles.webDevImage} source={require("../assets/team.png")}/>
        </View>
        <View style={styles.iconsView}>
          <Icon 
             style={styles.icons} 
             name='wechat' 
             size={30} 
             color='#00d4ff'/>
          <Text style={styles.iconText}>Q & A</Text>
        </View>
        <View style={styles.iconsView}>
          <Icon 
             style={styles.icons} 
             name='star' 
             size={30} 
             color='#00d4ff'/>
          <Text style={styles.iconText}>Rate App</Text>
        </View>
        <View style={styles.iconsView}>
          <Icon 
             style={styles.icons} 
             name='share' 
             size={30} 
             color='#00d4ff'/>
          <Text style={styles.iconText}>Share</Text>
        </View>
        <View style={styles.iconsView}>
          <Icon 
             style={styles.icons} 
             name='check' 
             size={30} 
             color='#00d4ff'/>
          <Text style={styles.iconText}>Feedback</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({

  iconsView:{
    display:'inline-block',
    margin:12,
    paddingTop:10
  },
  icons:{
    paddingLeft:20 
  },
  iconText:{
    fontWeight:'bold',
    fontSize:18,
    paddingLeft:20
  },
  
})

export default MenuScreen