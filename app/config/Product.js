import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import {useNavigation} from "@react-navigation/native";

const Product = (services) => {

const navigation = useNavigation();
// const {name1, serviceImage1} = this.props.product;

return (
      <>
        {/* <View style={styles.imageContainer}> */}
          {/* <View style={styles.viewimages}> */}
            <TouchableOpacity style={styles.newImageStyle} activeOpacity = { .5 } onPress={() => navigation.navigate(services.product.name)}>
              <Image 
                style={styles.imageStyle} 
                source={services.product.source}
                onPress={() => navigation.navigate(services.product.name)} />
            </TouchableOpacity>
            <Text 
                style={styles.nameText} 
                onPress={() => navigation.navigate(services.product.name)}
            >
              {services.product.name}
            </Text>  
          {/* </View> */}
       {/*  </View> */}
      </>
  );
}

const styles = StyleSheet.create({
    imageContainer:
    {
        width:'48%',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:'1%',
        marginVertical:'2%',
        display: 'flex',
        flexDirection: 'row'
    },
    viewimages:
    {
      paddingTop: 0,
      alignItems: "flex-start"
    },
    newImageStyle:
    {
      margin:6,
      alignContent:'center',
      alignSelf:'center'
    },
    imageStyle:
    {
        width: 80, 
        height: 80,
        borderRadius: 8
    },
    nameText:
    {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "center",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})

export default Product