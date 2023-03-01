import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import digitalMarketing from '../config/digitalMarketing.styles';

const DigitalMarketingDataCard = () => {

const digitalMarketingData = 
[
    {
        index: 1,
        id: 1,
        cardText:"Digital Strategy",
        cardImageSource: require("../assets/DigitalMarketing/digitalStrategy.png")
    },
    {
        index: 2,
        id: 2,
        cardText:"Web Designing",
        cardImageSource: require("../assets/DigitalMarketing/webDesign.png")
    },
    {
        index: 3,
        id: 3,
        cardText:"Content Writing",
        cardImageSource: require("../assets/DigitalMarketing/contentWriting.png")
    },
    {
        index: 4,
        id: 4,
        cardText:"Search Engine Optimization",
        cardImageSource: require("../assets/DigitalMarketing/seo.png")
    },
    {
        index: 5,
        id: 5,
        cardText:"Graphics Designing",
        cardImageSource: require("../assets/DigitalMarketing/graphicsDesigning.png")
    },
    {
        index: 6,
        id: 6,
        cardText:"Social Media Marketing",
        cardImageSource: require("../assets/DigitalMarketing/SocialMediaMarketing.png")
    }
];

const digitalMarketingListItems = digitalMarketingData.map((d) =>  
    <TouchableOpacity style={digitalMarketing.digitalMarketingCardOne} key={d.id} id={d.id}>
        <View style={digitalMarketing.digitalMarketingDataCard}>
            <View style={digitalMarketing.digitalMarketingView}>
                <Image style={digitalMarketing.digitalMarketingCardImage} source={d.cardImageSource}></Image>
                <Text style={digitalMarketing.digitalMarketingDataCardText}>{d.cardText}</Text>
            </View>
        </View>
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
);
}

export default DigitalMarketingDataCard;