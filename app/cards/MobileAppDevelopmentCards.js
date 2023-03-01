import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ServicesStyles from '../config/services.styles';

const MobileAppDevelopmentCards = () => {
const mobileAppDevelopmentCardsdata = 
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
        cardText: "Hybrid App Development",
        cardImageSource: require("../assets/MobileAppDevelopment/phone.png")
    },
    {
        index: 4,
        id: 4,
        cardText: "Progressive Web App",
        cardImageSource: require("../assets/MobileAppDevelopment/global.png")
    },
    {
        index: 5,
        id: 5,
        cardText: "E-commerce App Development",
        cardImageSource: require("../assets/MobileAppDevelopment/cart.png")
    },
    {
        index: 6,
        id: 6,
        cardText: "Custom App Development",
        cardImageSource: require("../assets/MobileAppDevelopment/smartphone.png")
    }
];

const mobileAppDevCardsListItems = mobileAppDevelopmentCardsdata.map(
    (d, index) => 
    <TouchableOpacity key={index} id={index}>
        <View style={ServicesStyles.mobileAppDevelopmentCard}>
            <Image style={ServicesStyles.mobileAppDevelopmentCardImage} source={d.cardImageSource}></Image>
            <Text style={ServicesStyles.mobileAppDevelopmentCardText}>{d.cardText}</Text>
        </View>
    </TouchableOpacity>
);

return (
    <>
        { mobileAppDevCardsListItems }
    </>
);
}

export default MobileAppDevelopmentCards;