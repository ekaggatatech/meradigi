import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import pricingStyles from '../../../config/pricing.styles'
import Icon from 'react-native-vector-icons/FontAwesome'

const BasicWebPack = () => {
  return (
    <ImageBackground
      style={pricingStyles.background}
      source={require('../../../assets/backgroun_2.jpg')}>
      <View  style={[pricingStyles.boxcontainer,pricingStyles.shadowProp]}>
        <Text style={pricingStyles.heading}>Basic Package</Text>
        <View style={pricingStyles.line}/>
        <Text style={pricingStyles.price}>&#x20b9; 9500 / Annual</Text>
        <View style={pricingStyles.allicons}>
          <View style={{flexDirection:'row', flexWrap:'wrap', paddingTop:15}}>
            <Icon 
              style={pricingStyles.icons} 
              name='check' 
              size={30} 
              color='red'/>
            <Text style={{fontSize:20, fontWeight:'600'}}>1 Free Domain</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap', paddingTop:15}}>
            <Icon 
              style={pricingStyles.icons} 
              name='check' 
              size={30} 
              color='red'/>
            <Text style={{fontSize:20, fontWeight:'600'}}>Custom Design</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap', paddingTop:15}}>
            <Icon 
              style={pricingStyles.icons} 
              name='check' 
              size={30} 
              color='red'/>
            <Text style={{fontSize:20, fontWeight:'600'}}>1GB Web Space</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap', paddingTop:15}}>
            <Icon 
              style={pricingStyles.icons} 
              name='check' 
              size={30} 
              color='red'/>
            <Text style={{fontSize:20, fontWeight:'600'}}>Fully Responsive Site</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap', paddingTop:15}}>
            <Icon 
              style={pricingStyles.icons} 
              name='check' 
              size={30} 
              color='red'/>
            <Text style={{fontSize:20, fontWeight:'600'}}>Fully Optimized Site</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap', paddingTop:15}}>
            <Icon 
              style={pricingStyles.icons} 
              name='check' 
              size={30} 
              color='red'/>
            <Text style={{fontSize:20, fontWeight:'600'}}>Social Media Integration</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap', paddingTop:15}}>
            <Icon 
              style={pricingStyles.icons} 
              name='check' 
              size={30} 
              color='red'/>
            <Text style={{fontSize:20, fontWeight:'600'}}>Weekly Automated Backups</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap', paddingTop:15}}>
            <Icon 
              style={pricingStyles.icons} 
              name='check' 
              size={30} 
              color='red'/>
            <Text style={{fontSize:20, fontWeight:'600'}}>Basic Security (Login And
               SSL)</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap', paddingTop:15}}>
            <Icon 
              style={pricingStyles.icons} 
              name='check' 
              size={30} 
              color='red'/>
            <Text style={{fontSize:20, fontWeight:'600'}}>3 Professional Email's</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap:'wrap', paddingTop:15}}>
            <Icon 
              style={pricingStyles.icons} 
              name='check' 
              size={30} 
              color='red'/>
            <Text style={{fontSize:20, fontWeight:'600'}}>Technical support</Text>
          </View>
        </View>
        <View style={pricingStyles.bookBtn}>
              <Text style={pricingStyles.bookBtntext} 
              >GET STARTED</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

export default BasicWebPack