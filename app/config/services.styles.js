import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:3
      },
      webDevImage:{
        width:400,
        height:300,
        resizeMode:'cover',
        
      },
      line:{
        width:25,
        height:2,
        backgroundColor:'#00d4ff',
        marginBottom:5,
        marginRight:3,
        marginTop:25

      },
      webText:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight:70,
        marginTop:15
      },
      chooseBtn:{
        width:135,
        height:50,
        backgroundColor:'#00d4ff',
        justifyContent:"center",
        alignItems:'center',
        borderRadius:30,
        
      },
      chooseBtntext:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        
      },
      hedingButton:{
        flexDirection:'row',
        paddingTop:20
      },
  
      webinfoText:{
        textAlign:'justify',
        paddingTop:20,
        marginLeft:10,
        marginRight:10,
        fontSize: 14,
      },
      exploreBtn:{
        margin:30,
        width:150,
        height:50,
        backgroundColor:'black',
        justifyContent:"center",
        alignItems:'center',
        alignSelf:'center',
        borderRadius:15

      },
      exploreBtntext:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'white'
      }
    
    });