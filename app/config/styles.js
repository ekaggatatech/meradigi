import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

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
    padding: 20,
    backgroundColor: CONTENT_BACKGROUND,
  },
  formGroup: {
    marginBottom: 10,
  },
  label: {
    color: "#7d7e79",
    fontSize: 16,
    lineHeight: 30,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "#ff7675",
  },
  button: {
    /* marginTop: 20,
    backgroundColor: "#409EFF !important",
    padding: 10,
    borderRadius: 15, */
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
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
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});