import { View, Text, Image ,ScrollView, Pressable, Modal } from 'react-native';
import React from 'react';
import ServicesStyles from '../config/services.styles';
import { LinearGradient } from 'expo-linear-gradient';

const ConsultNowModalScreen = ({modalOpen, setModalOpen}) => {
return (
<ScrollView>
    <Modal visible={modalOpen} animationType="slide">
        <View style={ServicesStyles.modalContent}>
          <View style={ServicesStyles.positioning}>
            <Image style={ServicesStyles.companyLogoImage} source={require("../assets/meradigi.png")} alt="MeraDigi" title="MeraDigi" />
          </View>
          {/* <View style={ServicesStyles.positioning}>
            <Pressable style={ServicesStyles.consultNowButton} onPress={()=>setModalOpen(true)}>
              <Text style={ServicesStyles.text}>Consult Now</Text>
            </Pressable>
          </View> */}
          <View style={ServicesStyles.positioning}>
            <LinearGradient 
             colors={['#00BFFF','#f2295b']}
             start={{x:1,y:0}}
             end={{x:0,y:0}}
             style={ServicesStyles.consultNowButton}>
              <Text style={ServicesStyles.consultNowButtonText}>Consult Now</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={ServicesStyles.positioning}> 
         <Pressable style={ServicesStyles.button} onPress={()=>setModalOpen(false)}>
            <Text style={ServicesStyles.text}>Cancel</Text>
          </Pressable>
        </View>
      </Modal>
</ScrollView>
)
}
export default ConsultNowModalScreen;