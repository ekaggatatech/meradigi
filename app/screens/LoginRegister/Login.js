import React, { Component, useState, setState, useEffect } from 'react';
import { Alert, Button, TextInput, Text,View, StyleSheet, Image, Parse } from 'react-native';
// import Parse from 'parse/react-native';
import ServicesStyles from '../../config/services.styles';

import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../../context/AuthContext';

// export default class App extends Component {
const Login = () => 
{
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  
  // const {isLoading, login} = useContext(AuthContext);

  const [myUserData, setMyUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

/*   const getUserData = async () => {
    try
    {
      const response = await fetch(
        "https://github.com/poojaEkaggata/glowing-journey/blob/codespace-poojaekaggata-glowing-journey-jjj766qggqghqrv6/userData/users.json"
      );
      const myData = await response.json();
      setMyUserData(myData);
      setIsLoaded(false);
      console.log(myData);
    }
    catch(error)
    {
      console.log(error);
    }
  };

  useEffect(() => { getUserData(); }, []); */

  /* constructor(props) 
  {
    super(props);
    this.state = 
    {
      username: '',
      password: '',
    };
  } */
  /* function onLogin() 
  {
    const { username, password } = this.state;
    // Alert.alert('Credentials', `${username} + ${password}`);
  } */

  /* const doUserLogIn = async function () 
  {
    const usernameValue = username;
    const passwordValue = password;
    return await Parse.User.logIn(usernameValue, passwordValue)
      .then(async (loggedInUser) => {
        // logIn returns the corresponding ParseUser object
        Alert.alert(
          'Success!',
          `User ${loggedInUser.get('username')} has successfully signed in!`,
        );
        // To verify that this is in fact the current user, currentAsync can be used
        const currentUser = await Parse.User.currentAsync();
        console.log(loggedInUser === currentUser);
        return true;
      })
      .catch((error) => {
        // Error can be caused by wrong parameters or lack of Internet connection
        Alert.alert('Error!', error.message);
        return false;
      });
  }; */

  //render() {
    return (
      <>
        {/* <Spinner visible={isLoading} /> */}
        <View style={[ServicesStyles.positioning,styles.newPaddingTopStyling]}>
          <Image source={require("../../assets/meradigiresize2.png")} alt="meradigi" title="meradigi" />
        </View>
        <View style={styles.container}>
          <View style={{ marginBottom: 20 }}>
            <TextInput
              //value={this.state.username}
              value={username}
              // onChangeText={(username) => this.setState({ username })}
              onChangeText={(text) => setUsername(text)}
              placeholder={'Email-ID'}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              //value={this.state.password}
              value={password}
              // onChangeText={(password) => this.setState({ password })}
              onChangeText={(text) => setPassword(text)}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Button
              title={'Login'}
              style={styles.input}
              // onPress={this.onLogin.bind(this)}
              // onPress={() => doUserLogIn()}
              onPress={() => { login(email, password); }}
            />
          </View>
          <View>
            <Text>Not a member yet?</Text>
            <Text
              style={styles.registerText} 
              onPress={() => this.props.navigation.navigate('Register')}>
              Register Now
            </Text>
          </View>
        </View>
      </>
    );
  //}
}

export default Login;

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
