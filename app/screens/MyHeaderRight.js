import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ServicesStyles from '../config/services.styles';

function MyHeaderRight()
{
  const navigation = useNavigation();

  function openMenu()
  {
    navigation.toggleDrawer();
  };

  function MainContent() 
  {
    return (
      <>
        <View style={ServicesStyles.positioningOfElementsTwo}>
          <TouchableOpacity onPress={openMenu}>
            <Image source={require("../assets/userProfile.png")} alt="UserProfile" title="UserProfile" />
          </TouchableOpacity>
        </View> 
      </>
    );
  }

  return (
    <>
      <MainContent />
    </>
  );

}

export default MyHeaderRight;