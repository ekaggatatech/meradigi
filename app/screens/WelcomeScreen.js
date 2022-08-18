//rnfe for component shortcut
import React from 'react';
import {Image, ImageBackground, StyleSheet, View, Text, Button} from "react-native";

import colors from '../config/colors';

const WelcomeScreen = ({navigation}) => {
    return (
        <ImageBackground 
          style={styles.background}
          source={require('../assets/blue_background.jpg')}
        >
            <View style={styles.container}>
                <Button
                    style={styles.button}
                    title="Next"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <Text style={styles.welcomeheading}>WEL-COME</Text>
            <View style={[styles.logocontainer,styles.shadowProp]}>
                <View style={styles.welcomebox}>
                    <Image style={styles.logo} source={require("../assets/meradigiresize50.png")}/>
                    <Text style={styles.welcometext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book. 
                    </Text>
                </View> 
            </View>
            <View>
                <Text style={styles.bottomText}>Powered By Ekkagata</Text>
            </View>
            {/*<View>
                <Image style={styles.welcomeImage} source={require('../assets/welcom.png')}/>
            </View>*/}
            
        </ImageBackground>
        
    );
}

//rnss for style shortcut
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    container:{
        padding:15,
        position:'absolute',
        top:50,
        right:10
    },
    button:{
        borderRadius:10,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:20,
        paddingRight:20,
        alignItems:'flex-start',
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignContent:'center'
    },
    buttonText:{
        color:'#fff',
    },
    welcomeheading:{
        fontSize: 25,
        fontWeight: '800',
        position:'absolute',
        top:200,
    },
    logo:{
        
    },
    logocontainer:{
        width: '90%', 
        height: '40%',
        borderRadius:15,
        borderColor:colors.primary,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:260,
    },
    welcomebox:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        
        
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    welcometext:{
        textAlign:'center',
        paddingTop:20,
    },
    welcomeImage:{
        width:200,
        height:200,
    },
    bottomText:{
        paddingBottom:20,
    }
})

export default WelcomeScreen;