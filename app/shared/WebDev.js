import { View, Text, Image ,ScrollView, Button} from 'react-native'
import React from 'react'
import ServicesStyles from '../config/services.styles'


const WebDev = ({navigation}) => {
  return (
    <ScrollView>
      <View style={ServicesStyles.container}>
        <View >
          <Image style={ServicesStyles.webDevImage} source={require("../assets/webdev.jpg")}/>
        </View>
        <View style={ServicesStyles.hedingButton}>
          <View style={ServicesStyles.line}/>
          <Text style={ServicesStyles.webText}>Web Development</Text>
          <View  style={ServicesStyles.chooseBtn}>
            <Text style={ServicesStyles.chooseBtntext} 
            onPress={() => navigation.navigate('Web Designing Package')}>Choose a Plan</Text>
          </View>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View>
          <View style={ServicesStyles.exploreBtn}>
              <Text style={ServicesStyles.exploreBtntext} 
              >Explore More</Text>
          </View>
      </View>
    </ScrollView>
  )
}

export default WebDev