import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
const{ width, height } = Dimensions.get('screen');

const SlideItem = ({item}) => {
  return (
   <>
    <View style={styles.container}>
        <View style={styles.card}>
            <Image source={item.img} resizeMode="contain" style={styles.image} alt={item.title} title={item.title} />
            <View style={styles.content}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
            </View>
        </View>
    </View>
   </>
  )
};

export default SlideItem;

const styles = StyleSheet.create({
    container:
    {
        width: width,
        height: height,
        alignItems: 'center'
    },
    card:
    {
        backgroundColor: '#FFFFFF'
    },
    image:
    {
        flex: 0.5,
        alignItems: 'center'
    },
    content:
    {
        flex: 0.4,
        alignItems: 'center'
    },
    title:
    {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    }
});
