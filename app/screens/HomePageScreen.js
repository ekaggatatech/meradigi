import React, { useState, useEffect } from 'react';
import {
    StyleSheet,    
    View,
    Button
} from 'react-native';
import SearchBar from '../shared/SearchBar'
import HomeServices from '../shared/HomeServices';

const HomePageScreen = ({navigation}) => {

const [value,setValue]=useState()
function updateSearch(value){
  //search logic hear..
  console.log(value)

}

  return (
    <View style={styles.container}>
      <View style={{height:'100%', borderRadius:20}}>  
        <SearchBar 
          value={value}
          updateSearch={updateSearch}
          style={{marginTop: '2%'}}
        />
        {/* <View style={styles.twoButtons}>
          <Button
              style={styles.serviceButton}
              title="Talk To Us"
              onPress={() => navigation.navigate('Talk To Us')}
          />
        </View> */}
        <HomeServices/>
        <View style={styles.twoButtons}>
          <Button
              style={styles.serviceButton}
              title="Contact Us"
              onPress={() => navigation.navigate('Contact Us')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  twoButtons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
    padding:10,
  }
  
})

export default HomePageScreen;