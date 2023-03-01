import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import ServicesStyles from '../config/services.styles';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => 
{
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={styles.containerBox}>
          <View style={ServicesStyles.positioning}>
            <Image source={require("../assets/meradigiresize2.png")} alt="meradigi" title="meradigi" style={ServicesStyles.mainMarginBottomProp} />
          </View>
          <View>
            <TouchableOpacity style={styles.iconsView} onPress={() => navigation.navigate('HomePage')}>
              <Text style={styles.iconText} onPress={() => navigation.navigate('HomePage')}>HOME</Text>  
            </TouchableOpacity>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Services')}>OUR SERVICES</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Pricing Plans')}>PRICING PLANS</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('About Us')}>ABOUT US</Text>
          </View>
          <View style={styles.iconsView}>
            <Text style={styles.iconText} onPress={() => navigation.navigate('Login')}>LOG IN</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create(
{
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
    textAlign: 'center'
  },
  containerBox:
  {
    paddingTop: 40
  }
}
);

export default MenuScreen;