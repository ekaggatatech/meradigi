import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import digitalMarketing from '../config/digitalMarketing.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const DigitalMarketingCardViewScreen = () => {

const navigation = useNavigation();

const digitalMarketingData = 
[
    {
        index: 1,
        id: 1,
        cardText:"Search Engine Optimization",
        cardImageSource: require("../assets/DigitalMarketing/magnifying-glass.png"),
        cardColors: ['#DBE3E4','#D6FCFF'],
        urlLink: ()=>navigation.navigate('Rank My Website On Google')
    },
    {
        index: 2,
        id: 2,
        cardText:"Content Marketing",
        cardImageSource: require("../assets/DigitalMarketing/content.png"),
        cardColors: ['#CBBB85','#FFD6EC'],
        urlLink: ()=>navigation.navigate('Content Generation & Marketing')
    },
    {
        index: 3,
        id: 3,
        cardText:"Social Media Marketing",
        cardImageSource: require("../assets/DigitalMarketing/smm.png"),
        cardColors: ['#DBE3E4','#D6FCFF'],
        urlLink: ()=>navigation.navigate('Social Media Ads & Marketing')
    },
    {
        index: 4,
        id: 4,
        cardText:"Graphics Designing",
        cardImageSource: require("../assets/DigitalMarketing/graphics.png"),
        cardColors: ['#CBBB85','#FFD6EC'],
        urlLink: ()=>navigation.navigate('Graphics Designing')
    }
];

const digitalMarketingListItems = digitalMarketingData.map((d, index) =>  
<TouchableOpacity style={digitalMarketing.digitalMarketingCardOne} key={d.id} id={d.id} onPress={d.urlLink}>
        <LinearGradient 
        colors={d.cardColors}
        start={{x:0,y:0}}
        end={{x:1,y:0}}
        style={digitalMarketing.digitalMarketingCard}>
            <View style={digitalMarketing.digitalMarketingView}>
                <Image style={digitalMarketing.digitalMarketingCardImage} source={d.cardImageSource}></Image>
                <Text style={digitalMarketing.digitalMarketingCardText}>{d.cardText}</Text>
            </View>
        </LinearGradient>
</TouchableOpacity>
);

return (
<>
    <ScrollView>
    <View style={digitalMarketing.digitalMarketingContainerOne}>
        { digitalMarketingListItems }
    </View>
    </ScrollView>
</>
)
}

export default DigitalMarketingCardViewScreen;