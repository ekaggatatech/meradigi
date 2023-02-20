import { View, Text, Image ,ScrollView } from 'react-native'
import React from 'react'
import ServicesStyles from '../config/services.styles'

const FastWebsite = ({navigation}) => {
  return (
    <ScrollView>
      <View style={ServicesStyles.container}>
        <View >
          <Image style={ServicesStyles.webDevImage} source={require("../assets/digitalMarketing.jpg")}/>
        </View>
        <View style={ServicesStyles.headingButton}>
          <View style={ServicesStyles.line}/>
          <Text style={ServicesStyles.webText}>Fast Website</Text>
          <View  style={ServicesStyles.chooseBtn}>
            <Text style={ServicesStyles.chooseBtntext} 
            onPress={() => navigation.navigate('Digital Marketing Package')}>Choose a Plan</Text>
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

export default FastWebsite