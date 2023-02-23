import React from 'react';
import { View, Text, Image } from 'react-native';
import ServicesStyles from '../config/services.styles';

const MobileAppDevelopmentCards = () => 
{
const digitalMarketingData = 
[
    {
        index: 1,
        id: 1,
        cardText: "Android App Development",
        cardImageSource: require("../assets/MobileAppDevelopment/android.png")
    },
    {
        index: 2,
        id: 2,
        cardText: "iOS App Development",
        cardImageSource: require("../assets/MobileAppDevelopment/app-store.png")   
     },
    {
        index: 3,
        id: 3,
        cardText:"Hybrid App Development",
        cardImageSource: require("../assets/MobileAppDevelopment/phone.png")
    },
    {
        index: 4,
        id: 4,
        cardText:"Progressive Web App",
        cardImageSource: require("../assets/MobileAppDevelopment/global.png")
    },
    {
        index: 5,
        id: 5,
        cardText:"E-commerce App Development",
        cardImageSource: require("../assets/MobileAppDevelopment/cart.png")
    },
    {
        index: 6,
        id: 6,
        cardText:"Custom App Development",
        cardImageSource: require("../assets/MobileAppDevelopment/smartphone.png")
    }
];

const digitalMarketingListItems = digitalMarketingData.map((d) =>  
    <View key={d.id} id={d.id} style={ServicesStyles.mobileAppDevelopmentCard}>
        <Image style={ServicesStyles.mobileAppDevelopmentCardImage} source={d.cardImageSource}></Image>
        <Text style={ServicesStyles.mobileAppDevelopmentCardText}>{d.cardText}</Text>
    </View>
);

return (
    <>
    { digitalMarketingListItems }
    </>
);
}

export default MobileAppDevelopmentCards;