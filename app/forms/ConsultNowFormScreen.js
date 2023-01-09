import { View, Text, Image ,ScrollView, Button, Pressable } from 'react-native';
import React from 'react';
import ServicesStyles from '../config/services.styles';

const ConsultNowFormScreen = () => {
    return (
<View style={ServicesStyles.root}>
  <View style={ServicesStyles.rowContainer}>
    <Text style={ServicesStyles.newText}>User Name</Text>
    <TextInput
      autoCorrect={false}
      onChangeText={this.onUserNameChange}
      value={this.state.userName}
      style={ServicesStyles.textInput}
    />
  </View>
  <View style={ServicesStyles.rowContainer}>
    <Text style={ServicesStyles.text}>Password</Text>
    <TextInput
      autoCorrect={false}
      onChangeText={this.onPasswordChange}
      value={this.state.password}
      style={ServicesStyles.textInput}
      secureTextEntry={true}
    />
  </View>
  <View style={ServicesStyles.rowContainer}>
    <Text style={ServicesStyles.text}>Label 3</Text>
    <TextInput
      style={ServicesStyles.textInput}
    />
  </View>
</View>
    )
}
export default ConsultNowFormScreen;