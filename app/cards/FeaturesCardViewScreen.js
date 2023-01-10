import { View, Text, Image ,ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import ServicesStyles from '../config/services.styles';
import { LinearGradient } from 'expo-linear-gradient';

const FeaturesCardViewScreen = () => {
const featuresData = 
[
    {
        index: 1,
        id: 1,
        cardText:"Responsive Design",
        cardImageSource: require("../assets/png/responsive.png"),
        cardColors: ['#FFDDB2','#FEAFC3']
    },
    {
        index: 2,
        id: 2,
        cardText:"Graphics Designing",
        cardImageSource: require("../assets/png/graphic-design.png"),
        cardColors: ['#E6FFB2','#AFF9FE']
    },
    {
        index: 3,
        id: 3,
        cardText:"Website Content Strategy",
        cardImageSource: require("../assets/png/content-strategy.png"),
        cardColors: ['#BBB2FF','#AFF9FE']
    },
    {
        index: 4,
        id: 4,
        cardText:"Support & Maintenance",
        cardImageSource: require("../assets/png/social-care.png"),
        cardColors: ['#FFB2B2','#AFBDFE']
    },
    {
        index: 5,
        id: 5,
        cardText:"User Experience Design",
        cardImageSource: require("../assets/png/user-experience(1).png"),
        cardColors: ['#B2FFD6','#AFB9FE']
    },
    {
        index: 6,
        id: 6,
        cardText:"SEO Optimized",
        cardImageSource: require("../assets/png/seo.png"),
        cardColors: ['#B2FCFF','#F2B02A']
    },
    {
        index: 7,
        id: 7,
        cardText:"Third Party Intergation",
        cardImageSource: require("../assets/png/data-integration.png"),
        cardColors: ['#BAFFB2','#EDFEAF']
    },    
    {
        index: 8,
        id: 8,
        cardText:"Custom Designs",
        cardImageSource: require("../assets/png/customization.png"),
        cardColors: ['#F1B2FF','#085AFF']
    }
];
const featuresListItems = featuresData.map(
(d) =>  
<>
<TouchableOpacity 
style={ServicesStyles.featureOne}
key={d.id} 
index={d.id}>
        <LinearGradient 
        colors={d.cardColors}
        start={{x:0,y:0}}
        end={{x:1,y:0}}
        style={ServicesStyles.featureCard}>
            <View style={ServicesStyles.featureView}>
                <Image style={ServicesStyles.featureCardImage} source={d.cardImageSource}></Image>
                <Text style={ServicesStyles.featutreCardText}>{d.cardText}</Text>
            </View>
        </LinearGradient>
</TouchableOpacity>
</>   
)
return (
<>
    <ScrollView>
    <View style={ServicesStyles.containerOne}>
        { featuresListItems }
    </View>
    </ScrollView>
</>
)
}
export default FeaturesCardViewScreen;