import { View, Text, Image ,ScrollView, Button } from 'react-native'
import React from 'react'
import ServicesStyles from '../config/services.styles'

const ServicesScreen = () => {
  return (
    <ScrollView>
    <View style={ServicesStyles.container}>
    <Text style={ServicesStyles.webText}> -- Web Development</Text>
      <View >
        <Image style={ServicesStyles.webDevImage} source={require("../assets/webdev.jpg")}/>
      </View>
      <View style={ServicesStyles.hedingButton}>
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
    </View>
    <View style={ServicesStyles.container}>
    <Text style={ServicesStyles.webText}> -- Digital Marketing</Text>
        <View >
          <Image style={ServicesStyles.webDevImage} source={require("../assets/digitalMarketing.jpg")}/>
        </View>
        <View style={ServicesStyles.hedingButton}>
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
      </View>
      <View style={ServicesStyles.container}>
      <Text style={ServicesStyles.webText}> -- ERP Solution</Text>

        <View >
          <Image style={ServicesStyles.webDevImage} source={require("../assets/erpsolution.jpg")}/>
        </View>
        <View style={ServicesStyles.hedingButton}>
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
      </View>
  </ScrollView>
  )
}

export default ServicesScreen