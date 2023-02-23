import React from 'react';
import { View, Text, Image } from 'react-native';
import ServicesStyles from '../config/services.styles';

const MobileAppDevelopmentSpecialFeaturesCards = () => 
{
const digitalMarketingData = 
[
    {
        index: 1,
        id: 1,
        cardText: "Organised Code",
        cardImageSource: require("../assets/MobileAppDevelopment/layer.png")
    },
    {
        index: 2,
        id: 2,
        cardText: "Super Performence",
        cardImageSource: require("../assets/MobileAppDevelopment/flash.png")   
     },
    {
        index: 3,
        id: 3,
        cardText: "100% Response Time",
        cardImageSource: require("../assets/MobileAppDevelopment/chronometer.png")
    },
    {
        index: 4,
        id: 4,
        cardText: "Maintaining Milestones",
        cardImageSource: require("../assets/MobileAppDevelopment/settings.png")
    },
    {
        index: 5,
        id: 5,
        cardText: "Search Optimization",
        cardImageSource: require("../assets/MobileAppDevelopment/magnifying-glass.png")
    },
    {
        index: 6,
        id: 6,
        cardText: "Customer Support",
        cardImageSource: require("../assets/MobileAppDevelopment/message.png")
    }
];

const digitalMarketingListItems = digitalMarketingData.map((d) =>  
    <View key={d.id} id={d.id} style={ServicesStyles.mobileAppDevelopmentFeaturesCard}>
        <View style={ServicesStyles.mobileAppDevelopmentFeaturesCardImageView}>
            <Image style={ServicesStyles.mobileAppDevelopmentFeaturesCardImage} source={d.cardImageSource}></Image>
        </View>
        <Text style={ServicesStyles.mobileAppDevelopmentFeaturesCardText}>{d.cardText}</Text>
    </View>
);

return (
    <>
    { digitalMarketingListItems }
    </>
);
}

export default MobileAppDevelopmentSpecialFeaturesCards;