import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    boxcontainer:{
      width: '90%', 
      height: '80%',
      borderRadius:15,
      borderColor:'black',
      borderWidth:2,
      position:'absolute',
      top:100
  },
  welcomebox:{
      justifyContent:'flex-start',
      alignContent:'flex-start', 
  },
  heading:{
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf:'center',
    margin:5
    
  },
  shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 3,
  },
  welcometext:{
    textAlign:'center',
    paddingTop:20,
  },
  
  buttons:{
    margin:50
  },
  line:{
    width:50,
    height:4,
    backgroundColor:'#00d4ff',
    alignSelf:'center'
  },
  price:{
    textAlign:'center',
    fontSize:20,
    color:'red',
    margin:10,
    fontWeight:'bold'
  },
  allicons:{
    alignItems:"center",
  },
  icons:{
    fontSize:22,
    marginRight:8
  },
  bookBtn:{
    margin:30,
    width:150,
    height:50,
    backgroundColor:'black',
    justifyContent:"center",
    alignItems:'center',
    alignSelf:'center',
    borderRadius:15
  },
  
  bookBtntext:{
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  }

});