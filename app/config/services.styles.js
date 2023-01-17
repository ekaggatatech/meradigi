import { StyleSheet, Dimensions } from 'react-native';
// const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
      container:
      {
        flex: 1,
        paddingTop: 3
      },
      webDevImage:
      {
        width: 400,
        height: 300,
        resizeMode: 'cover'
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
        marginTop: 10,
        marginBottom: 10
      },
      newMarginStyles:
      {
        marginTop: 0,
        marginBottom: 30
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
        border: '1px solid #009EFF'
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
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 40,
        height: 40,
        alignSelf: 'center'
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
      imageView:
      {
        backgroundColor: '#000000',
        paddingTop: 20,
        paddingBottom: 20
      },
      imagePositioning:
      {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItem: 'center',
        width: '80%',
        maxWidth: '80%',
        height: 500,
        borderRadius: 12,
        elevation: 10,
        shadowColor: '#55A7FF',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        overflow: "hidden"
      },
      contentText:
      {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      subContentText:
      {
        color: '#FFFFFF',
        fontSize: 19,
        textAlign: 'center'
      },
      letsStartButtonView:
      {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItem: 'center',
      },
      letsStartButton:
      {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#0B8CDB',
        color: '#ffffff',
        borderRadius: 9,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25
      },
      letsStartButtonText:
      {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center'
      },
      ourGlobalStatsView:
      {
        backgroundColor: 'transparent'
      },
      ourGlobalStatsLinearGradient:
      {
        backgroundColor: 'transparent',
        padding: 15,
        borderStyle: 'solid',
        borderWidth: 0,
        borderColor: '#00000000',
        borderRadius: 0,
        width: '100%'
      },
      ourGlobalStatsTitle:
      {
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 28
      },
      ourGlobalStatsSubContent:
      {
        color: '#000000',
        fontSize: 19
      },
      getInTouchWithUsContainerView:
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'column',
        textAlignVertical: 'center'
      },
      getInTouchWithUsBgImage:
      {
        flex: 1,
        width: screenWidth,
        height: 'auto'
      },
      getInTouchWithUsTitleText:
      {
        color: '#000000',
        fontSize: 97,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
      },
      getInTouchWithUsForm:
      {
        backgroundColor: 'transparent',
        margin: 0,
        padding: 0,
        borderStyle: 'solid',
        borderwidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 16,
        opacity: 0.928,
        width: '90%',
        height: '100%'
      }
});