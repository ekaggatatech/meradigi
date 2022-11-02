import { View, Text, Modal, Button,StyleSheet} from 'react-native'
import React from 'react'


const TalktousModal = ({navigation}) => {
  return (
    <Modal 
      transparent={true}
      visible={true}>
      <View style={styles.modalView}>
        <View style={styles.modal2View}>
          <Text>TalktousModal</Text>
          <Button
              title="Submit"
              onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalView:{
    backgroundColor:"#000000aa",
    flex:1,
    justifyContent:'center',
    alignContent:'center'
  },
  modal2View:{
    backgroundColor:"#ffffff",
    margin:50,
    padding:40,
    borderRadius:10,
    flex:0.5, 
  }
  
})

export default TalktousModal