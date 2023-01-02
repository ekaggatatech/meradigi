import { View, Text , Image, StyleSheet} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"

const Product = (services) => {

const navigation = useNavigation();
//const {name1, serviceImage1} = this.props.product

  return (
        <View style={styles.imageContainer}>
          <View style={styles.viewimages}>
            <Image 
              style={styles.imageStyle} 
              source={services.product.source}/>
            <Text 
              style={styles.nameText} 
              onPress={() => navigation.navigate(services.product.name)}
            >{services.product.name}</Text>  
            
          </View>
        </View>
        
  )
}

const styles = StyleSheet.create({

    imageContainer:{
        width:'48%',
        alignItems:'center',
        justifyContent:'center',
        
        marginHorizontal:'1%',
        marginVertical:'2%',   
         
    },
    viewimages:{
      paddingTop:0,
      alignItems:"flex-start",
    },

    imageStyle:{
        width:90, 
        height:90,
        borderRadius:8,
        margin:6,
        alignContent:'center',
        alignSelf:'center'
    },
    nameText:{
        fontSize:14,
        fontWeight:'bold',
        textAlign:"center",
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        
    }
})

export default Product