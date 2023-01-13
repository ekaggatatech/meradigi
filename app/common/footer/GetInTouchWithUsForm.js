import React, { useRef } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from "formik";
import FormField from "./FormField";
import { validationSchema } from "./validation";
import { styles } from "../../config/styles";
import ServicesStyles from '../../config/services.styles';
// import { Form, FormItem } from 'react-native-form-component';

const GetInTouchWithUsForm = () => 
{
  /* const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef(); */

  function onSubmitHandler(values) 
  {
    console.log(values);
    Alert.alert(
      "Added Successfully!",
      "Form data: " + JSON.stringify(values)
    );
  }

  function isFormValid(isValid, touched) 
  {
    return isValid && Object.keys(touched).length !== 0;
  }

  return (
      <>
        <View style={ServicesStyles.getInTouchWithUsContainerView}> 
          <ImageBackground 
          source={require('../../assets/banner/people-holding-icons-digital-brands.jpg')}
          resizeMode="stretch" 
          style={ServicesStyles.getInTouchWithUsBgImage}>
            <View>
              <Text style={ServicesStyles.getInTouchWithUsTitleText}>
                Get in touch with us.
              </Text>
            </View>
            <View style={ServicesStyles.getInTouchWithUsForm}>
              <LinearGradient 
                colors={['#FFFFFFE6','#FFFFFF']}
                start={{x:0,y:0}}
                end={{x:0,y:0}}
                style={{ borderRadius: 16, padding: 20 }}>
                  {/* <Form>
                    <FormItem
                      label="First Name"
                      // isRequired
                      // value={email}
                      // onChangeText={(email) => setEmail(email)}
                      // asterik
                      ref={firstNameInput}
                      style={{ display: 'flex', flexDirection: 'row' }}
                    />
                    <FormItem
                      label="Last Name"
                      ref={lastNameInput}
                    />
                    <FormItem
                      label="Email"
                      isRequired
                      // value={email}
                      // onChangeText={(email) => setEmail(email)}
                      asterik
                      ref={emailInput}
                    />
                    <FormItem
                      label="Phone/Mobile"
                      isRequired
                      // value={email}
                      // onChangeText={(email) => setEmail(email)}
                      asterik
                      ref={emailInput}
                    />
                    <FormItem
                      label="Company Name"
                      isRequired
                      // value={email}
                      // onChangeText={(email) => setEmail(email)}
                      asterik
                      ref={emailInput}
                    />
                    <FormItem
                      label="Industry Type?"
                      isRequired
                      // value={email}
                      // onChangeText={(email) => setEmail(email)}
                      asterik
                      ref={emailInput}
                    />
                    <FormItem
                      label="Services you looking for?"
                      isRequired
                      // value={email}
                      // onChangeText={(email) => setEmail(email)}
                      asterik
                      ref={emailInput}
                    />
                  </Form> */}
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
                    validationSchema={validationSchema}
                    style={{ borderRadius: 16 }}
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
                        label="First Name"
                        autoCapitalize="words"
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        />

                        <FormField
                        field="lastName"
                        label="Last Name"
                        autoCapitalize="words"
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        />

                        <FormField
                        field="email"
                        label="Email *"
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        isRequired
                        asterik
                        />

                        {/* <Text style={{ color: 'red' }}>*</Text> */}

                        <FormField
                        field="phoneormobile"
                        label="Phone/Mobile *"
                        secureTextEntry={true}
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        isRequired
                        asterik
                        />

                        <FormField
                        field="companyname"
                        label="Company Name *"
                        secureTextEntry={true}
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        isRequired
                        asterik
                        />
                    
                        <FormField
                        field="industrytype"
                        label="Industry Type *"
                        secureTextEntry={true}
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        isRequired
                        asterik
                        />

                        <FormField
                        field="servicesyoulookingfor"
                        label="Services you looking for? *"
                        secureTextEntry={true}
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        isRequired
                        asterik
                        />

                        {/* <FormField
                        field="Address"
                        label="Address"
                        secureTextEntry={true}
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        /> */}

                        {/* <FormField
                        field="Message"
                        label="Message"
                        secureTextEntry={true}
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        />
                        <FormField
                        field="Message"
                        label="Message"
                        secureTextEntry={true}
                        values={values}
                        touched={touched}
                        errors={errors}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        /> */}

                        <TouchableOpacity
                        onPress={handleSubmit}
                        >
                        <View
                            style={[
                            styles.button,
                            {
                                // opacity: isFormValid(isValid, touched) ? 1 : 0.5,
                            },
                            ]}
                        >
                            <Text style={styles.buttonText}>SUBMIT</Text>
                        </View>
                        </TouchableOpacity>
                    </>
                    )}
                </Formik>
              </LinearGradient>
            </View>
          </ImageBackground>
        </View>
      </>
  )
}

export default GetInTouchWithUsForm;