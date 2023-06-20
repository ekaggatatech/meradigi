import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Footer = () => 
{
  return (
      <>
        <View style={styles.footerContainer}> 
            <View style={styles.footerSubContainer}>
                <View style={styles.footerMarginBottom}>
                    <Text style={styles.footerContentOne}>
                        © 2022 Meradigi. All right Reserved
                    </Text>
                </View>
                <View>
                    <Text style={styles.footerContentTwo}>
                        <Text style={{ color: '#ffffff' }}>Made with <Text style={{ color: '#ffffff' }}>❤</Text> by</Text> <Text style={{ color: '#e22658' }}>Meradigi</Text>
                    </Text>
                </View>
            </View>
        </View>
      </>
  )
}

export default Footer;

const styles = StyleSheet.create({
    footerContainer:
    {
      backgroundColor: '#000000'
    },
    footerSubContainer:
    {
        padding: 20
    },
    footerMarginBottom:
    {
        marginBottom: 10
    },
    footerContentOne:
    {
        textAlign: 'center',  
        color: '#ffffff',
        fontSize: 19,
        fontWeight: 'bold'
    },
    footerContentTwo:
    {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 19,
        fontWeight: 'bold'
    }
})