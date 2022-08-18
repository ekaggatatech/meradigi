import { View, Text , Image, StyleSheet} from 'react-native'
import React from 'react'

class Product extends React.Component{
    render() {
        const {name, serviceImage} = this.props.product
        return (
            //call image and name hear+
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={{uri:serviceImage}}/>
          <Text style={styles.nameText} >{ name }</Text>
        </View>
    )
}
}

const styles = StyleSheet.create({

    imageContainer:{
        width:'31%',
        alignItems:'center',
        borderWidth:0.75,
        borderColor:'#00d4ff',
        marginHorizontal:'1%',
        marginVertical:'2%',
        
        
    },
    imageStyle:{
        width:90, 
        height:90,
        borderRadius:8,
        margin:6
    },
    nameText:{
        fontSize:14,
        fontWeight:'bold',
        textAlign:"center"
    }
})
export default Product