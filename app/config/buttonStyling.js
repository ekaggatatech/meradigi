import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    twoButtons:
    {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:'center'
    },
    marginStyling:
    {
      matrginBottom: 0,
      marginTop: 0
    },
    marginTopStyling:
    {
      marginTop: 10
    },
    contactUsButton: 
    {
      fontSize: 16,
      fontWeight: 'normal',
      backgroundColor: '#409EFF',
      color: '#ffffff',
      borderRadius: 9,
      textAlign: 'center',
      textAlignVertical: 'center',
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingVertical: 10, 
      paddingHorizontal: 10,
      marginBottom: 20
    },
    contactUsButtonText: 
    {
      color: "#ffffff",
      fontWeight: "normal",
      fontSize: 16,
      textAlign: "center",
      letterSpacing: 0.4
    }
  })