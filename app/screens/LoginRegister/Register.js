import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'; 
import { db } from '../../../database/firestore';
import emailjs from '@emailjs/browser';

const Register = ({navigation}) =>
{
    const [user_mail_id, setUserMailId] = useState('');
    const [user_name, setUserName] = useState('');
    const [user_password, setUserPassword] = useState('');
    const [user_confirm_password, setUserConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function sendEmail()
    {
        var templateParams = 
        {
            to_name: user_name,
            to_email: user_mail_id,
            from_name: 'mailmeradigi@gmail.com',
            message: 'Thanks for registering Meradigi.',
            cc: 'himanshu.nandan@ekaggata.com'
        };
        emailjs.send('service_26yxech', 'template_00m4779', templateParams, '7hg6ik0-eYjgCqYYz')
        .then(function(response) 
        {
            console.log('Mail sent sucessfully.',response.status,response.text);
        }, 
        function(error) 
        {
            console.log('Failed to send email!',error);
        });
    }

    const handleAppropriateUserRegister = async () => 
    {
        const loginCollectionRef = collection(db, 'users');
        const q = query(loginCollectionRef, where('user_mail_id', '==', user_mail_id));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) 
        {
            Alert.alert('Please use new E-Mail ID!');
            navigation.navigate('Register');
            setUserMailId();
            setUserName();
            setUserPassword();
            setUserConfirmPassword();
        }
        else
        {
            addDoc(collection(db,"users"), 
            {
                user_mail_id: user_mail_id,
                user_name: user_name,
                user_password: user_password,
                user_confirm_password: user_confirm_password
            }).then(()=>
            {
                Alert.alert("Thank You, You have registered successfully.");
                sendEmail();
                navigation.navigate('Log In');
                setUserMailId();
                setUserName();
                setUserPassword();
                setUserConfirmPassword();
            }).catch((error)=>
            {
                console.log(error);
                Alert.alert("Sorry, Facing some technical issues, Please try again or Kindly contact the concern person!");
                setUserMailId();
                setUserName();
                setUserPassword();
                setUserConfirmPassword();
                navigation.navigate('Register');
            });
        }
    };

    function registerUser()
    {
        if((user_mail_id !== "") && (user_name !== "") && (user_password !== "") && (user_confirm_password !== ""))
        {
            if(user_password !== user_confirm_password) 
            {
                setErrorMessage('Passwords do not match. Please try again.');
            }
            else
            {
                setErrorMessage('');
                handleAppropriateUserRegister();
            }
        }
        else
        {
          Alert.alert("Please fill all data!");
          navigation.navigate('Register');
        }
    };
  return (
    <>
            <View style={{ backgroundColor:"#FFF", height:"100%" }}>
                <Image source ={require('../../assets/digitalMarketing.jpg')} style={{ width:"100%", height:"40%" }} />
                <Text style={{ fontSize:20, alignSelf:"center" }}>Register Here</Text>
                <View style={{ flexDirection:"row", alignItems:"center", marginHorizontal:55, borderWidth:2, marginTop: 20, paddingHorizontal: 8, borderColor:"#00716F", borderRadius: 6, paddingVertical:4 }}>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal: 8}}
                        value={user_mail_id}
                        onChangeText={(user_mail_id)=>{setUserMailId(user_mail_id)}}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                    />
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop: 10,
                    paddingHorizontal: 8,
                    borderColor:"#00716F",
                    borderRadius: 6,
                    paddingVertical:4
                }}>
                    <TextInput 
                        placeholder="Username"
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 8 }}
                        value={user_name}
                        onChangeText={(user_name)=>{setUserName(user_name)}}
                    />
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:10,
                    paddingHorizontal: 8,
                    borderColor:"#00716F",
                    borderRadius: 6,
                    paddingVertical:4
                }}>
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal: 8 }}
                        value={user_password}
                        onChangeText={(user_password)=>{setUserPassword(user_password)}}
                    />
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:10,
                    paddingHorizontal: 8,
                    borderColor:"#00716F",
                    borderRadius: 6,
                    paddingVertical:4
                }}>
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal: 8 }}
                        value={user_confirm_password}
                        onChangeText={(user_confirm_password)=>{setUserConfirmPassword(user_confirm_password)}}
                    />
                </View>
                {errorMessage ? <View><Text style={{ color: 'red', marginTop: 10, textAlign: 'center' }}>{errorMessage}</Text></View> : null}
                    <View style={{
                        marginHorizontal:55,
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop: 10,
                        backgroundColor:"#3497FF",
                        paddingVertical:12,
                        borderRadius:23 
                    }}>
                        <TouchableOpacity onPress={registerUser} title="Register">
                            <Text style={{ color: "white" }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginHorizontal:55,
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop: 10,
                        backgroundColor:"#3497FF",
                        paddingVertical:12,
                        borderRadius:23
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Log In')} title='Back to Log In'>
                            <Text style={{ color: "white" }}>Back to Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    </>
  );
}

export default Register;
