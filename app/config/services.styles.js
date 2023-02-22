import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
      container:
      {
        flex: 1,
        backgroundColor: '#FFFFFF',
        background: '#FFFFFF'
      },
      webDevImage:
      {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
      },
      containerOne:
      {
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        marginBottom:20,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      webText:
      {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
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
        marginBottom: 15,
        marginTop: 15
      },
      marginStyles:
      {
        marginTop: 10,
        marginBottom: 10
      },
      newMarginStyles:
      {
        marginTop: 0,
        marginBottom: 0
      },
      chooseBtn:
      {
        width:135,
        height:50,
        backgroundColor:'#00d4ff',
        display: 'flex',
        justifyContent:"center",
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems:'center',
        borderRadius:30,
        
      },
      chooseBtntext:
      {
        color:'white',
        fontSize:15,
        fontWeight:'bold'
      },
      headingButton:
      {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
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
        marginTop: 10,
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
      button: 
      {
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
        marginBottom: 20
      },
      positioning:
      {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
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
      root: 
      {
        flex: 1,
        flexDirection: "column",
      },
      rowContainer: 
      {
        flex: 1, 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      newText: 
      {
        flex: 1
      },
      textInput: 
      {
        flex: 1,
        backgroundColor: 'white', 
        borderColor: 'black',
      },
      card:
      {
        backgroundColor: '#ffffff',
        width: '100%',
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
        alignItems: 'center',
        width: '80%',
        maxWidth: '80%',
        height: 500,
        borderRadius: 12,
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
        alignItems: 'center',
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
      getInTouchWithUsFirstTitle:
      {
        color: '#000000',
        fontSize: 37,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
      },
      getInTouchWithUsTitleText:
      {
        color: '#DB3833',
        fontSize: 30,
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
      },
      newPositioning:
      {
        flexDirection: 'row',
        padding: 0,
        margin: 0
      },
      positioningOfElementsOne:
      {
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 'auto'
      },
      positioningOfElementsTwo:
      {
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
        marginRight: 10,
        marginTop: 0,
        marginBottom: 0,
        padding: 0
      },
      newTitleOne:
      {
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 20
      },
      newUnderLine:
      {
        width: '90%',
        height: 2,
        backgroundColor: '#097AFC',
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20
      },
      erpSolutionsText:
      {
        textAlign: 'justify',
        marginLeft: 20,
        marginRight: 20,
        fontSize: 18,
        marginBottom: 0
      },
      erpSolutionsImageContainer:
      {
        marginBottom: 10, 
        alignItems: 'center',
        display: 'flex', 
        justifyContent: 'center', 
        marginLeft: 20, 
        marginRight: 20,
        resizeMode: 'stretch',
        borderRadius: 15,
        width: '90%',
        height: 460,
        shadowColor: '#000032',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0,
        shadowRadius: 4
      },
      servicesCardMainViewOne:
      {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20
      },
      servicesCard:
      {
        width: '100%',
        padding: 15,
        shadowColor: '#000032',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0488F7',
        borderRadius: 4,
        marginBottom: 10 
      },
      servicesText:
      {
        margin: 0,
        padding: 0,
        color: '#0291FF',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      erpContentText:
      {
        color: '#0488F7',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.30)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10
      },
      erpSubContentText:
      {
        color: '#000',
        fontSize: 18,
        textAlign: 'justify',
        marginLeft: 20,
        marginRight: 20
      },
      mainMarginBottomProp:
      {
        marginBottom: 10
      },
      erpWebText:
      {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      odooIndustriesContainer:
      {
        backgroundColor: '#4766FF',
        padding: 10,
        alignItems: 'center'
      },
      odooIndustriesView:
      {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        marginBottom: 20
      },
      odooIndustriesText:
      {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '500'
      },
      odooIndustriesSubView:
      {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 15,
        shadowColor: '#000032',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0488F7',
        borderRadius: 24,
        marginBottom: 10
      },
      odooIndustriesSubText:
      {
        textAlign: 'center',
        color: '#000000',
        fontSize: 14,
        fontWeight: '700'
      },
      bookFreeConsultationCallButton:
      {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14, 
        paddingHorizontal: 24,
        backgroundColor: 'transparent',
        borderRadius: 9
      },
      bookFreeConsultationCallButtonText:
      {
        fontSize: 16,
        fontWeight: 600,
        fontWeight: 'normal',
        letterSpacing: 0.25,
        color: '#ffffff',
        backgroundColor: 'transparent',
        textAlign: 'center'
      },
      moodleLmsTextOne:
      {
        color: '#4F80FF',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 3.5,
        textAlign: 'center'
      },
      moodleLmsTextTwo:
      {
        color: '#343F5A',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      moodleLmsTextThree:
      {
        color: '#5C6680',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      moodleLmsViewOne:
      {
        marginBottom: 10, 
        flexDirection: 'row', 
        display: 'flex', 
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        borderColor: '#097AFC',
        borderWidth: 2,
        borderRadius: 16,
        width: 'auto',
        height: 80,
        padding: 10
      },
      moodleLmsImageOne:
      {
          alignItems: 'center',
          /* display: 'flex', 
          justifyContent: 'center', 
          marginLeft: 20, 
          marginRight: 20, */
          /* resizeMode: 'stretch', */
          /* borderRadius: 15, */
          width: 60,
          height: 60,
          shadowColor: '#000032',
          shadowOffset: { width: 2, height: 4 },
          shadowOpacity: 0,
          shadowRadius: 4,
          flexDirection: 'row'
      },
      moodleLmsTextFour:
      {
        color: '#343F5A',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: 10
      }
});