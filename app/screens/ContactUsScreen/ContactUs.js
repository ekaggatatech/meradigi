import { View, Text, StyleSheet, SafeAreaView, ScrollView, Linking, Image, Button, FlatList } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactUs = () => {
return (
<>
{/* <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
        <View>
            <Text style={styles.selectText}></Text>
        </View>
</ScrollView>   */}
<ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
<SafeAreaView style={{ flex: 1 }}>
<View style={{ flex: 1 }}>
<View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems:"center" }}>
                <Text style={styles.heading}>
                    Contact Us At
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems:"center" }}>
                <Icon.Button
                size={50}
                name="whatsapp"
                color="#25D366"
                backgroundColor="transparent"
                onPress={ () => Linking.openURL('https://api.whatsapp.com/send?phone=91%2095604%2087700') }>
                </Icon.Button>
                <Icon.Button
                size={50}
                name="envelope"
                color="#4285F4"
                backgroundColor="transparent"
                onPress={ () => Linking.openURL('https://mail.ekaggata.com') }>
                </Icon.Button>
                <Icon.Button
                size={50}
                name="phone"
                color="#4285F4"
                backgroundColor="transparent"
                onPress={ () => Linking.openURL('tel:${+91-9988776655}') }>
                </Icon.Button>
            </View>
</View>
</View>
</SafeAreaView>
</ScrollView>
</>
)
}

const styles = StyleSheet.create({
    flatlistDesign:
    {

    },
    selectText:
    {
        margin:10,
        fontSize:20,
        fontWeight:'bold',
        textAlign: 'center'
    },
    confusedText:
    {
        margin:20,
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        textAlign:'center'

    },
    item:
    {
        backgroundColor:'grey',
        margin:5,
        width:50,
        padding:8,
        color:'white'
    },
    grid:
    {
        display:'flex',
        alignItems:'center'
    },
    queImage:
    {
        width:200,
        height:200,
        alignSelf:'center',
    },
    scrollView: 
    {
        
    },
    bookButton:
    {

    },
    container: 
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: 
    {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    iconContainer: 
    {
        marginTop: 16,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    footerTitle: 
    {
        fontSize: 18,
        textAlign: 'center',
        color: 'grey'
    },
    footerText: 
    {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey'
    }
})

export default ContactUs;