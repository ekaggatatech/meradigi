import { StyleSheet } from "react-native";

const HEADER_BACKGROUND = "#3498db";
const CONTENT_BACKGROUND = "#f9f9f9";

export const styles = StyleSheet.create({
  topSafeArea: {
    backgroundColor: HEADER_BACKGROUND,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
    backgroundColor: CONTENT_BACKGROUND,
  },
  formGroup: {
    marginBottom: 0,
  },
  label: {
    color: "#7d7e79",
    fontSize: 16,
    lineHeight: 30,
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
    // color: '#000000',
    fontWeight: 'normal',
    fontSize: 16
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "#ff7675",
  },
  button: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'normal',
    backgroundColor: '#409EFF',
    color: '#ffffff',
    borderRadius: 9,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 90,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "normal",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0.4
  },
  dropdown: {
    marginTop: 10,
    height: 36,
    borderColor: '#DEDEDE',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 24,
    color: "#DEDEDE",
    borderRadius: 6,
    width: 330
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  requestApptButton: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: 'normal',
    backgroundColor: '#409EFF',
    color: '#ffffff',
    borderRadius: 9,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 330,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  requestApptButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0.4
  },
  requestApptCancelButton: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: 'normal',
    backgroundColor: '#EEEEEE',
    color: '#333333',
    borderRadius: 9,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 330,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  requestApptCancelButtonText: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0.4
  },
  newBookingAppointmentTextInputBox:
  {
    marginTop: 10,
    height: 50,
    borderColor: '#DEDEDE',
    borderWidth: 2,
    color: "#333333",
    borderRadius: 6,
    width: 330,
    textAlign: 'left', 
    fontSize: 16, 
    color: 'black', 
    paddingLeft: 10,
    backgroundColor: '#DEDEDE',
    fontWeight: 'bold',
    letterSpacing: 0.4
  },
  newBookingAppointmentTextInputBoxOne:
  {
    marginTop: 10,
    height: 50,
    borderColor: '#DEDEDE',
    borderWidth: 2,
    color: "#333333",
    borderRadius: 6,
    width: 330,
    textAlign: 'left', 
    fontSize: 16, 
    color: 'black', 
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 0.4
  }
});