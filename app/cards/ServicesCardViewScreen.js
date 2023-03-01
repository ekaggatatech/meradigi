import { View, Text, Image ,ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import ServicesStyles from '../config/services.styles';

const ServicesCardViewScreen = () => {
const data = 
[
    {
        index: 1,
        id: 1,
        cardText: "Blogging Site",
        cardImageSource: require("../assets/includedservices/blog-100x100.png")
    },
    {
        index: 2,
        id: 2,
        cardText: "CMS Development",
        cardImageSource: require("../assets/includedservices/cms-100x100.png")
    },
    {
        index: 3,
        id: 3,
        cardText: "Business/Corporate",
        cardImageSource: require("../assets/includedservices/corporation-100x100.png")
    },
    {
        index: 4,
        id: 4,
        cardText: "E-Commerce Site",
        cardImageSource: require("../assets/includedservices/ecommerce-100x100.png")
    },
    {
        index: 5,
        id: 5,
        cardText: "Landing Page",
        cardImageSource: require("../assets/includedservices/landing-pages-100x100.png")
    },
    {
        index: 6,
        id: 6,
        cardText: "UI/UX Design",
        cardImageSource: require("../assets/includedservices/web-design-100x100.png")
    },
    {
        index: 7,
        id: 7,
        cardText: "E-Learning Portals",
        cardImageSource: require("../assets/includedservices/video-tutorials-100x100.png")
    },    
    {
        index: 8,
        id: 8,
        cardText: "Custom Website",
        cardImageSource: require("../assets/includedservices/sketch-100x100.png")
    }
];
const listItems = data.map(
(d, index) =>  
<TouchableOpacity style={ServicesStyles.card} key={index} id={index}>
<Image style={ServicesStyles.cardImage} source={d.cardImageSource}></Image>
<Text style={ServicesStyles.cardText}>
  {d.cardText}
</Text>
</TouchableOpacity>
)
return (
<>
    <ScrollView>
    <View style={ServicesStyles.containerOne}>
        { listItems }
    </View>
    </ScrollView>
</>
);
}
export default ServicesCardViewScreen;