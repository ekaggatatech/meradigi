import React, { Component } from 'react';
import { Alert, Button, TextInput, Text,View, StyleSheet, Image } from 'react-native';
import ServicesStyles from '../../config/services.styles';


export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
  
  render() {
    return (
      <>
      <View style={[ServicesStyles.positioning,styles.newPaddingTopStyling]}>
        <Image source={require("../../assets/meradigiresize2.png")} alt="meradigi" title="meradigi" />
      </View>
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
        <View>
          <Text>Not a member yet?</Text>
          <Text
            style={styles.registerText} 
            onPress={() => this.props.navigation.navigate('Register')}>
            Register Now.</Text>
        </View>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  newPaddingTopStyling:
  {
    paddingTop: 10
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  registerText:{
    color:'red',
    fontSize:18,
    textAlign:'center'
  }
});
