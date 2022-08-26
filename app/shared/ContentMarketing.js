import { View, Text, Image, Button,ScrollView} from 'react-native'
import React from 'react'
import ServicesStyles from '../config/services.styles'

const ContentMarketing = () => {
  return (
    <ScrollView>
      <View style={ServicesStyles.container}>
        <View >
          <Image style={ServicesStyles.webDevImage} source={require("../assets/contentmarketing.jpg")}/>
        </View>
        <View style={ServicesStyles.hedingButton}>
          <Text style={ServicesStyles.webText}>Content Marketing</Text>
          <Button
                title="Book A Call"
            />
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
        <View style={ServicesStyles.exploreButton}>
          <Button
            title='Explore More'/>
        </View>
      </View>
    </ScrollView>
  )
}

export default ContentMarketing