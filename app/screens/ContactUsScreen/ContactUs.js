import { ScrollView, SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, Pressable, Modal, Linking } from 'react-native';
import React, { useState } from 'react';
import ServicesStyles from '../../config/services.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from "formik";
import FormField from "./FormField";
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from "../../config/styles";
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const industryTypeData =
[
  {
    key: 1,
    label: 'Agriculture',
    value: 'Agriculture'
  },
  {
    key: 2,
    label: 'Architect',
    value: 'Architect'
  },
  {
    key: 3,
    label: 'Construction',
    value: 'Construction'
  },
  {
    key: 4,
    label: 'Digital Marketing',
    value: 'Digital Marketing'
  },
  {
    key: 5,
    label: 'E-Commerce - Fashion',
    value: 'E-Commerce - Fashion'
  },
  {
    key: 6,
    label: 'E-Commerce - Cosmetics / Beauty Products',
    value: 'E-Commerce - Cosmetics / Beauty Products'
  },
  {
    key: 7,
    label: 'E-Commerce - Electronics',
    value: 'E-Commerce - Electronics'
  },
  {
    key: 8,
    label: 'E-Commerce - Food',
    value: 'E-Commerce - Food'
  },
  {
    key: 9,
    label: 'E-Commerce - Texttiles',
    value: 'E-Commerce - Texttiles'
  },
  {
    key: 10,
    label: 'Education Industry',
    value: 'Education Industry'
  },
  {
    key: 11,
    label: 'Education/Edutech',
    value: 'Education/Edutech'
  },
  {
    key: 12,
    label: 'Entertainment - Media House',
    value: 'Entertainment - Media House'
  },
  {
    key: 13,
    label: 'Entertainment - Music Studio',
    value: 'Entertainment - Music Studio'
  },
  {
    key: 14,
    label: 'Entertainment - Production House',
    value: 'Entertainment - Production House'
  },
  {
    key: 15,
    label: 'Fashion - Designer',
    value: 'Fashion - Designer'
  },
  {
    key: 16,
    label: 'Fashion - Trader',
    value: 'Fashion - Trader'
  },
  {
    key: 17,
    label: 'Food - Manufacturing',
    value: 'Food - Manufacturing'
  },
  {
    key: 18,
    label: 'Food - QSR',
    value: 'Food - QSR'
  },
  {
    key: 19,
    label: 'Food - Restaurant',
    value: 'Food - Restaurant'
  },
  {
    key: 20,
    label: 'Food - Trading',
    value: 'Food - Trading'
  },
  {
    key: 21,
    label: 'Furniture Manufacturer / Trader',
    value: 'Furniture Manufacturer / Trader'
  },
  {
    key: 22,
    label: 'HR and Tools',
    value: 'HR and Tools'
  },
  {
    key: 23,
    label: 'Healthcare',
    value: 'Healthcare'
  },
  {
    key: 24,
    label: 'Hosptality - Events Management',
    value: 'Hosptality - Events Management'
  },
  {
    key: 25,
    label: 'Hospitality - Hospitals',
    value: 'Hospitality - Hospitals'
  },
  {
    key: 26,
    label: 'Hospitality - Hotels',
    value: 'Hospitality - Hotels'
  },
  {
    key: 27,
    label: 'Hospitality - Tours & Travels',
    value: 'Hospitality - Tours & Travels'
  },
  {
    key: 28,
    label: 'Interior Designer',
    value: 'Interior Designer'
  },
  {
    key: 29,
    label: 'Logistics & Freight Forwarding',
    value: 'Logistics & Freight Forwarding'
  },
  {
    key: 30,
    label: 'Manufacturing',
    value: 'Manufacturing'
  },
  {
    key: 31,
    label: 'Medical Devices',
    value: 'Medical Devices'
  },
  {
    key: 32,
    label: 'NGO/NPO',
    value: 'NGO/NPO'
  },
  {
    key: 33,
    label: 'Pharma',
    value: 'Pharma'
  },
  {
    key: 34,
    label: 'Professional Services Insurance',
    value: 'Professional Services Insurance'
  },
  {
    key: 35,
    label: 'Professional Services Mechanical Automation',
    value: 'Professional Services Mechanical Automation'
  },
  {
    key: 36,
    label: 'Professional Services Public Relations',
    value: 'Professional Services Public Relations'
  },
  {
    key: 37,
    label: 'Professional Services R & D',
    value: 'Professional Services R & D'
  },
  {
    key: 38,
    label: 'Services Renewable Energy',
    value: 'Services Renewable Energy'
  },
  {
    key: 39,
    label: 'Professional Services Training',
    value: 'Professional Services Training'
  },
  {
    key: 40,
    label: 'Professional Services - IT',
    value: 'Professional Services - IT'
  },
  {
    key: 41,
    label: 'Professional Services - Photographer',
    value: 'Professional Services - Photographer'
  },
  {
    key: 42,
    label: 'Professional Services - Accounts',
    value: 'Professional Services - Accounts'
  },
  {
    key: 43,
    label: 'Proffessional Services - Digital Marketing Agency',
    value: 'Proffessional Services - Digital Marketing Agency'
  },
  {
    key: 44,
    label: 'Proffessional Services - Legal',
    value: 'Proffessional Services - Legal'
  },
  {
    key: 45,
    label: 'Proffessional Services - Videography',
    value: 'Proffessional Services - Videography'
  },
  {
    key: 46,
    label: 'Real Estate',
    value: 'Real Estate'
  },
  {
    key: 47,
    label: 'Service Provider',
    value: 'Service Provider'
  },
  {
    key: 48,
    label: 'Telecommunication',
    value: 'Telecommunication'
  },
  {
    key: 49,
    label: 'Trader - Electronics',
    value: 'Trader - Electronics'
  },
  {
    key: 50,
    label: 'Trading',
    value: 'Trading'
  },
  {
    key: 51,
    label: 'Other',
    value: 'Other'
  }
];

const servicesYouLookingForData = 
[
  {
    key: 1,
    label: 'Web Development',
    value: 'Web Development'
  },
  {
    key: 2,
    label: 'SEO',
    value: 'SEO'
  },
  {
    key: 3,
    label: 'Digital Marketing',
    value: 'Digital Marketing'
  },
  {
    key: 4,
    label: 'Social Media Marketing',
    value: 'Social Media Marketing'
  },
  {
    key: 5,
    label: 'Paid Ads',
    value: 'Paid Ads'
  },
  {
    key: 6,
    label: 'ERP Implementation',
    value: 'ERP Implementation'
  },
  {
    key: 7,
    label: 'Graphics Designing',
    value: 'Graphics Designing'
  },
  {
    key: 8,
    label: 'Other',
    value: 'Other'
  }
];

const preferedContactMethodData = 
[
  {
    key: 1,
    label: 'Call on my Phone number',
    value: 'Call on my Phone number'
  },
  {
    key: 2,
    label: 'Message/Text on WhatsApp',
    value: 'Message/Text on WhatsApp'
  },
  {
    key: 3,
    label: 'Send me an E-Mail',
    value: 'Send me an E-Mail'
  }
];

const ContactUs = () => 
{
    const [value, setValue] = useState(null);
    function onSubmitHandler(values) 
    {
      console.log(values);
      Alert.alert("Added Successfully!","Form data: " + JSON.stringify(values));
    }
    function isFormValid(isValid,touched) 
    {
      return isValid && Object.keys(touched).length !== 0;
    }
    const navigation = useNavigation();
return (
<>
    <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
                {/* <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems:"center", marginTop: 10 }}>
                        <Icon.Button
                        size={50}
                        name="whatsapp"
                        color="#25D366"
                        backgroundColor="transparent"
                        onPress={ () => Linking.openURL('https://api.whatsapp.com/send?phone=91%2095604%2087700') }>
                        </Icon.Button>
                        <Icon.Button
                        size={50}
                        name="envelope"
                        color="#4285F4"
                        backgroundColor="transparent"
                        onPress={ () => Linking.openURL('https://mail.ekaggata.com') }>
                        </Icon.Button>
                        <Icon.Button
                        size={50}
                        name="phone"
                        color="#4285F4"
                        backgroundColor="transparent"
                        onPress={ () => Linking.openURL('tel:${+91-9988776655}') }>
                        </Icon.Button>
                    </View>
                </View> */}
          <View style={ServicesStyles.getInTouchWithUsContainerView}> 
            <View style={ServicesStyles.getInTouchWithUsForm}>
              <View style={{ marginTop: 10, marginBottom: 10 }}>
                <Text style={ServicesStyles.getInTouchWithUsTitleText}>
                  Get in touch with us!
                </Text>
              </View>
              <View>
                <ScrollView>
                <LinearGradient 
                  colors={['#FFFFFFE6','#FFFFFF']}
                  start={{x:0,y:0}}
                  end={{x:0,y:0}}
                  style={{ borderRadius: 16, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, paddingTop: 0, marginBottom: 0, borderWidth: 1, borderColor: '#DEDEDE' }}>                                    
                  <Formik
                      initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      phoneormobile: "",
                      companyname: "",
                      industrytype: "",
                      servicesyoulookingfor: "",
                      password: "",
                      confirmPassword: "",
                      }}
                      onSubmit={onSubmitHandler}
                      style={{ borderRadius: 16, marginTop: 0, marginBottom: 0 }}
                  >
                      {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                      isValid,
                      }) => (
                      <>
                          <FormField
                          field="firstName"
                          // label="First Name"
                          autoCapitalize="words"
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          placeholder="First Name"
                          />
                          <FormField
                          field="lastName"
                          autoCapitalize="words"
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          placeholder="Last Name"
                          />
                          <FormField
                          field="email"
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          isRequired
                          asterik
                          placeholder="E-Mail ID *"
                          />
                          <FormField
                          field="phoneormobile"
                          secureTextEntry={true}
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          isRequired
                          asterik
                          placeholder="Phone/Mobile Number *"
                          />
                          <FormField
                          field="companyname"
                          secureTextEntry={true}
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          isRequired
                          asterik
                          placeholder="Company Name *"
                          />
                          <Dropdown
                              field="industrytype"
                              secureTextEntry={true}
                              touched={touched}
                              errors={errors}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              isRequired
                              asterik
                              style={styles.dropdown}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={industryTypeData}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder="Industry Type *"
                              searchPlaceholder="Search Industry Type"
                              values={values}
                              onChange={item=>{setValue(item.value);}}
                            />
                           <Dropdown
                              style={styles.dropdown}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={servicesYouLookingForData}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder="Select Services You Looking For ? *"
                              searchPlaceholder="Search Services You Looking For ?"
                              onChange={item=>{setValue(item.value);}}
                            />
                            <Dropdown
                              style={styles.dropdown}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={preferedContactMethodData}
                              search
                              maxHeight={300}
                              labelField="label"
                              label="SelectPreferedContactMethod"
                              valueField="value"
                              placeholder="Select Prefered Contact Method *"
                              searchPlaceholder="Search Prefered Contact Method"
                              value={value}
                              onChange={item=>{setValue(item.value);}}
                            />
                          <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                            <TouchableOpacity onPress={handleSubmit}>
                              <View style={[ styles.button ]}>
                                <Text style={styles.buttonText}>SUBMIT</Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            // onPress={()=>setModalOpen(false)} 
                            onPress={() => navigation.navigate('HomePage')}
                            style={{ marginLeft: 20 }}>
                              <View
                                  style={[ styles.button ]}>
                                <Text style={styles.buttonText}>CANCEL</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                      </>
                      )}
                  </Formik>
                </LinearGradient>
                </ScrollView>
              </View>
            </View>
        </View>
        </SafeAreaView>
    </ScrollView>
</>
);
}

/* const styles = StyleSheet.create(
{
    container: 
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}
); */

export default ContactUs;