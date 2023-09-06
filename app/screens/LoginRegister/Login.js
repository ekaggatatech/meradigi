import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import ServicesStyles from '../../config/services.styles';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../database/firestore';

const Login = ({navigation}) =>
{
  const [user_mail_id, setUserMailId] = useState('');
  const [user_password, setUserPassword] = useState('');

  const handleLogin = async () => 
  {
    try 
    {
      const loginCollectionRef = collection(db, 'users');
      const q = query(loginCollectionRef, where('user_mail_id', '==', user_mail_id));
      const querySnapshot = await getDocs(q);

      if(!querySnapshot.empty) 
      {
        const userData = querySnapshot.docs[0].data();
        if(userData.user_password === user_password) 
        {
          Alert.alert('Success.', 'You have signed in successfully.');
          setUserMailId('');
          setUserPassword('');
          navigation.navigate('HomePage');
        } 
        else 
        {
          Alert.alert('Login Error!', 'Invalid Credentials!');
          setUserMailId('');
          setUserPassword('');
          navigation.navigate('Log In');
        }
      } 
      else 
      {
        Alert.alert('Login Failed!', 'Please Fill E-Mail ID & Password Field Properly!');
        setUserMailId('');
        setUserPassword('');
        navigation.navigate('Log In');
      }
    } 
    catch (error) 
    {
      console.error('Error during login:', error);
      setUserMailId('');
      setUserPassword('');
      navigation.navigate('Log In');
    }
  };

    return (
      <>
          <View style={styles.container}>
            <View style={[ServicesStyles.positioning,styles.newPaddingTopStyling]}>
              <Image source={require("../../assets/meradigiresize2.png")} alt="meradigi" title="meradigi" />
            </View>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                value={user_mail_id}
                onChangeText={text => setUserMailId(text)}
                placeholder={'Email-ID'}
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <TextInput
                value={user_password}
                onChangeText={text => setUserPassword(text)}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
              />
              {/* <Button title={'Login'} onPress={handleLogin} style={styles.loginButton} /> */}
              <View style={{
                    marginHorizontal: 5,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop: 10,
                    backgroundColor:"#3497FF",
                    paddingVertical:12,
                    borderRadius:23
                }}>
                    <TouchableOpacity onPress={handleLogin} title="Log In">
                        <Text style={{ color: "white" }}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
              <Text style={{ textAlign: 'center' }}>Not a member yet?</Text>
              <View style={{
                      marginHorizontal: 5,
                      alignItems:"center",
                      justifyContent:"center",
                      marginTop: 20,
                      backgroundColor:"#3497FF",
                      paddingVertical:12,
                      borderRadius:23,
                      paddingHorizontal: 60
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} title="Register">
                            <Text style={{ color: "white" }}>Register</Text>
                        </TouchableOpacity>
              </View>
            </View>
          </View>
      </>
    );
}

const styles = StyleSheet.create({
  newPaddingTopStyling:
  {
    marginBottom: 30
  },
  container: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  input: 
  {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10
  },
  registerText:
  {
    color:'red',
    fontSize:18,
    textAlign:'center'
  }
});

export default Login;
