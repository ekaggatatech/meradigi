import { StyleSheet, ScrollView, SafeAreaView, View, Linking } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactUs = () => 
{
return (
<>
    <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems:"center", marginTop: 10 }}>
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
        </SafeAreaView>
    </ScrollView>
</>
);
}

const styles = StyleSheet.create(
{
    container: 
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}
);

export default ContactUs;