import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:3
      },
      webDevImage:{
        width:400,
        height:300,
        resizeMode:'cover'
      },
      containerOne:
      {
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
      },
      backgroundVideo:
      {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      },
      line:
      {
        width:25,
        height:2,
        backgroundColor:'#00d4ff',
        marginBottom:5,
        marginRight:3,
        marginTop:25

      },
      webText:
      {
        fontSize: 18,
        fontWeight: 'bold',
        /*paddingRight:70,*/
        marginTop:15,
        textAlign: 'center',
        marginBottom: 15
      },
      newWebText:
      {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      featuresWebText:
      {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15
      },
      marginStyles:
      {
        marginBottom: 15
      },
      chooseBtn:
      {
        width:135,
        height:50,
        backgroundColor:'#00d4ff',
        justifyContent:"center",
        alignItems:'center',
        borderRadius:30,
        
      },
      chooseBtntext:
      {
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        
      },
      hedingButton:
      {
        flexDirection:'row',
        paddingTop:20,
        display: 'flex',
        justifyContent: 'center'
      },
      webinfoText:
      {
        textAlign:'justify',
        paddingTop:20,
        marginLeft:10,
        marginRight:10,
        fontSize: 14,
      },
      exploreBtn:
      {
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
      },
      newTitle:
      {
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
      },
      appButtonContainer: 
      {
        backgroundColor: "#009EFF",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 12 
      },
      appButtonText: 
      {
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        fontSize: 19,
        fontWeight: 700,
        fill: '#000000',
        color: '#000000'
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14, 
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#009EFF',
      },
      text: 
      {
        fontSize: 19,
        fontWeight: 700,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#000000'
      },
      viewStyleForLine:
      {
        borderColor: "#009EFF", 
        border: '1px solid #009EFF',
        /* width: "100%",
        alignSelf: 'stretch', */
        /* display: 'block' */
      },
      modalContent:
      {

      },
      positioning:
      {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 15
      },
      companyLogoImage:
      {
        width: 320,
        height: 80
        /* resizeMode:'cover' */
      },
      consultNowButton:
      {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14, 
        paddingHorizontal: 24,
        backgroundColor: 'transparent',
        borderRadius: 20
      },
      consultNowButtonText:
      {
        fontSize: 20,
        fontWeight: 600,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#ffffff'
      },
      root: {
        flex: 1,
        flexDirection: "column",
      },
      rowContainer: {
        flex: 1, 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      newText: {
        flex: 1
      },
      textInput: {
        flex: 1,
        backgroundColor: 'white', 
        borderColor: 'black',
      },
      card:
      {
        backgroundColor: '#ffffff',
        marginBottom: 20,
        width: '80%',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowOffset: {
          width: 12,
          height: 12
        },
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        boxSizing: 'border-box'
      },
      cardImage:
      {
        resizeMode: 'cover',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
      },
      cardText:
      {
        textAlign: 'center',
        color: '#0291FF',
        fontWeight: 'bold',
        fontSize: 19
      },
      featureOne:
      {
        marginBottom: 20
      },
      featureCard:
      {
        backgroundColor: 'transparent',
        padding: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#00000000',
        borderRadius: 7,
        width: 320
      },
      featureView:
      {
        flexDirection: 'row'
      },
      featureCardImage:
      {
        resizeMode: 'cover',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
      },
      featutreCardText:
      {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8,
        padding: 0,
        alignSelf: 'center',
        textAlign: 'center'
      },
      imagePositioning:
      {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItem: 'center',
        width: '90%',
        maxWidth: '90%',
        height: 500,
        borderRadius: 12,
        elevation: 5
        //boxShadow: 0 0 10 5 rgb('85 167 255 / 78%')
      }
});