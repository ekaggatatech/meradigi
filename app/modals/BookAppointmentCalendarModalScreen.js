import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, ScrollView, Image, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from '../config/styles';
import Clock from '../assets/png/Clock.png';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore'; 
import { db } from '../../database/firestore';

const timeSlotData = 
[
  {
    id: 1,
    timeSlot: '09:00 am - 09:30 am'
  },
  {
    id: 2,
    timeSlot: '10:00 am - 10:30 am'
  },
  {
    id: 3,
    timeSlot: '11:00 am - 11:30 am'
  },
  {
    id: 4,
    timeSlot: '12:00 pm - 12:30 pm'
  },
  {
    id: 5,
    timeSlot: '01:00 pm - 01:30 pm'
  },
  {
    id: 6,
    timeSlot: '02:00 pm - 02:30 pm'
  },
  {
    id: 7,
    timeSlot: '03:00 pm - 03:30 pm'
  },
  {
    id: 8,
    timeSlot: '04:00 pm - 04:30 pm'
  },
  {
    id: 9,
    timeSlot: '05:00 pm - 05:30 pm'
  }
];

const queryTypeData = [
  {
    key: 0,
    label: 'General Query',
    value: 'General Query'
  },
  {
    key: 1,
    label: 'Technical Query',
    value: 'Technical Query'
  },
  {
    key: 2,
    label: 'Sales Query',
    value: 'Sales Query'
  },
  {
    key: 3,
    label: 'Billing Query',
    value: 'Billing Query'
  }
];

const BookAppointmentCalendarModalScreen = ({ modalOpen, setModalOpen }) => 
{
  const [showModalOpen, setShowModalOpen] = useState(false);
  const [showModalOpenOne, setShowModalOpenOne] = useState(false);
  const [showModalOpenTwo, setShowModalOpenTwo] = useState(false);

  const today = new Date();
  const [date, setDate] = useState('');
  const startDate = getFormatedDate(today.setDate(today.getDate(),'YYYY/MM/DD'));

  function handleChangeOne(date)
  {
    setDate(date);
    setModalOpen(false);
    setShowModalOpenOne(false);
    setShowModalOpen(true);     
  }

  const [text, setText] = useState('');
  function getUserSelectedTimeSlot(value)
  {
    setText(value);
    setModalOpen(false);
    setShowModalOpen(false);
    setShowModalOpenOne(true);
  }

  function bookApptForm()
  {
    setModalOpen(false);
    setShowModalOpen(false);
    setShowModalOpenOne(false);
    setShowModalOpenTwo(true);
  }

  const [value, setValue] = useState('');

  const bookingDateWithTime = date + "    " + text;

  const [bookingdatetime, setBookingDateTime] = useState({bookingDateWithTime});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactnumber, setContactNumber] = useState('');
  const [querytype, setQueryType] = useState('');
  const [querydetails, setQueryDetails] = useState('');

  function createBooking()
  {
    addDoc(collection(db,"booking_details"), 
    {
      bookingdatetime: bookingDateWithTime,
      name: name,
      email: email,
      contactnumber: contactnumber,
      querytype: value,
      querydetails: querydetails
    }).then(()=>
    {
      Alert.alert("Thank You, You have booked your appointment successfully.");
      setModalOpen(false);
      setShowModalOpenOne(false);
      setShowModalOpen(false);
      setShowModalOpenTwo(false);
    }).catch((error)=>
    {
      console.log(error);
      Alert.alert("Sorry, Facing some technical issues, Please try again or Kindly contact the concern person!");
      setModalOpen(false);
      setShowModalOpenOne(false);
      setShowModalOpen(false);
      setShowModalOpenTwo(false);
    });
  }

  return (
      <>
      <ScrollView nestedScrollEnabled={true}>
      <Modal visible={showModalOpenTwo} animationType="fade">
        <View>
                <LinearGradient 
                  colors={['#FFFFFFE6','#FFFFFF']}
                  start={{x:0,y:0}}
                  end={{x:0,y:0}}
                  style={{ borderRadius: 16, padding: 0, margin: 10, borderWidth: 1, borderColor: '#DEDEDE', height: 700 }}>
                  <View style={{ flexDirection: 'row', backgroundColor: '#009EFF', borderTopRightRadius: 16, borderTopLeftRadius: 16, padding: 0, margin: 0 }}>
                    <View style={{ flex: 1, alignContent: 'center', padding: 10 }}>
                      <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold', letterSpacing: 0.8 }}>
                        REQUEST AN APPOINTMENT
                      </Text>
                    </View>
                    <View style={{ marginTop: 4, marginBottom: 0, padding: 0 }}>
                      <TouchableOpacity onPress={()=>{ setShowModalOpen(false); setModalOpen(false); setShowModalOpenOne(false); setShowModalOpenTwo(false); }}>
                        <View style={{ backgroundColor: '#E34234', borderRadius: 14, alignItems: 'center', display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto', marginTop: 0, marginRight: 6, width: 30, height: 30 }}>
                          <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', paddingTop: 0, paddingBottom: 6, fontSize: 16 }}>x</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>
                  <View style={{ marginTop: 0, marginBottom: 10 }}>
                              <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold' }}>
                                Please confirm that you would like to request the following appointment:
                              </Text>
                            </View>
                            <View style={{ margin: 0, padding: 0 }}>
                              <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold' }}>
                                Booking Date & Time :
                              </Text>
                            </View>
                            <View style={{ margin: 0, padding: 0 }}>
                                <TextInput
                                  editable={false} 
                                  selectTextOnFocus={false}
                                  value={bookingDateWithTime}
                                  style={styles.newBookingAppointmentTextInputBox}
                                  placeholder="Booking Date & Time"
                                  onChangeText={(bookingdatetime)=>{setBookingDateTime(bookingdatetime)}}
                                />
                            </View>
                            <View style={{ marginTop: 0, marginBottom: 0 }}>
                              <TextInput
                                secureTextEntry={false}
                                autoCapitalize="words"
                                isRequired
                                asterik
                                placeholder="Name *"
                                style={styles.newBookingAppointmentTextInputBoxOne}
                                value={name}
                                onChangeText={(name)=>{setName(name)}}
                              />
                            </View>
                            <View style={{ marginTop: 0, marginBottom: 0 }}>
                              <TextInput
                                secureTextEntry={false}
                                isRequired
                                asterik
                                placeholder="E-Mail ID *"
                                style={styles.newBookingAppointmentTextInputBoxOne}
                                value={email}
                                onChangeText={(email)=>{setEmail(email)}}
                              />
                            </View>
                            <View style={{ marginTop: 0, marginBottom: 0 }}>
                              <TextInput
                                secureTextEntry={false}
                                isRequired
                                asterik
                                placeholder="Contact Number *"
                                style={styles.newBookingAppointmentTextInputBoxOne}
                                value={contactnumber}
                                onChangeText={(contactnumber)=>{setContactNumber(contactnumber)}}
                              />
                            </View>
                            <View style={{ marginTop: 0, marginBottom: 0 }}>
                              <Dropdown
                                  secureTextEntry={false}
                                  isRequired
                                  asterik
                                  style={styles.dropdown}
                                  placeholderStyle={styles.placeholderStyle}
                                  selectedTextStyle={styles.selectedTextStyle}
                                  inputSearchStyle={styles.inputSearchStyle}
                                  iconStyle={styles.iconStyle}
                                  data={queryTypeData}
                                  search
                                  maxHeight={200}
                                  labelField="label"
                                  valueField="value"
                                  placeholder="Choose Your Query Type *"
                                  searchPlaceholder="Search Your Query Type"
                                  value={querytype}
                                  onChange={(item)=>setValue(item.value)}
                                />
                            </View>
                            <View style={{ marginTop: 0, marginBottom: 10 }}>
                              <TextInput
                                secureTextEntry={false}
                                isRequired
                                asterik
                                placeholder="Basic Details About your query *"
                                style={styles.newBookingAppointmentTextInputBoxOne}
                                value={querydetails}
                                onChangeText={(querydetails)=>{setQueryDetails(querydetails)}}
                              />
                            </View>
                              <View style={{ flexDirection: "column", display: "flex", justifyContent: "center", marginLeft: "auto", marginRight: "auto", marginBottom: 0 }}>
                                <TouchableOpacity style={{ marginBottom: 10 }} onPress={createBooking}>
                                  <View style={styles.requestApptButton}>
                                    <Text style={styles.requestApptButtonText}>REQUEST APPOINTMENT</Text>
                                  </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{ setShowModalOpen(false); setModalOpen(false); setShowModalOpenOne(false); setShowModalOpenTwo(false); }}>
                                  <View style={styles.requestApptCancelButton}>
                                    <Text style={styles.requestApptCancelButtonText}>CANCEL</Text>
                                  </View>
                                </TouchableOpacity>
                              </View>
                  </View>
                </LinearGradient>
              </View>
      </Modal>
      <Modal visible={showModalOpenOne} animationType="fade">
          <View style={{ borderRadius: 8, borderColor: '#E34234', borderWidth: 0, flex: 1, margin: 20 }}>
            <View style={{ marginTop: 10, marginBottom: 0 }}> 
                <TouchableOpacity onPress={()=>{ setShowModalOpen(true); setModalOpen(false); }}>
                  <View style={{ backgroundColor: '#E34234', borderRadius: 14, alignItems: 'center', display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto', marginTop: 0, marginRight: 6, width: 30, height: 30 }}>
                    <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', paddingTop: 0, paddingBottom: 6, fontSize: 16 }}>x</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 260, marginBottom: 20, alignItems:"center" }}>
                <TouchableOpacity onPress={bookApptForm}>
                  <LinearGradient colors={['#0070FF','#29F2EA']} start={{x:1,y:0}} end={{x:0,y:0}} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 40, backgroundColor: 'transparent', borderRadius: 9 }} title="Now Book Your Appointment">
                    <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', paddingTop: 0, paddingBottom: 6, fontSize: 16 }}>
                      Now Book Your Appointment
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
          </View>
        </Modal>
        <Modal visible={showModalOpen} animationType="fade">
          <View style={{ borderRadius: 8, borderColor: '#FC004B', borderWidth: 0, flex: 1, margin: 20 }}>
            <View style={{ flexDirection: 'row', alignItems:"center", marginTop: 0, marginBottom: 40 }}>
              <View style={{ flex: 1 }}>
                  <Text style={{ textAlign: 'center', color: '#333333', fontWeight: 'bold', fontSize: 16 }}>
                      Select Your Appointment Time Slot
                  </Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>{ setShowModalOpen(false); setModalOpen(true); }}>
                  <View style={{ backgroundColor: '#E34234', borderRadius: 14, alignItems: 'center', display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto', marginTop: 0, marginRight: 6, width: 30, height: 30 }}>
                    <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', paddingTop: 0, paddingBottom: 6, fontSize: 16 }}>x</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {
            timeSlotData.map((item)=>
            {
              return (
              <View key={item.id} style={{ flexDirection: "row", alignItems:"center", display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 26 }}>
                <View>
                  <Image source={Clock} alt="Time" title="Time" style={{ width: 20, height: 20 }} /> 
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ textAlign: 'center', color: '#333333', fontWeight: 'bold', fontSize: 14 }}>
                    {item.timeSlot}
                  </Text>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <TouchableOpacity onPress={()=>getUserSelectedTimeSlot(item.timeSlot)}>
                    <LinearGradient colors={['#0070FF','#29F2EA']} start={{x:1,y:0}} end={{x:0,y:0}} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 6, paddingHorizontal: 6, backgroundColor: 'transparent', borderRadius: 9 }} title="Select Your Appointment Time Slot">
                      <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', padding: 6, fontSize: 14 }}>
                        BOOK APPOINTMENT
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
              );
            }
            )
            }
          </View>
        </Modal>
        <Modal visible={modalOpen} animationType="fade">
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <DatePicker 
                      style={{ position: 'relative', top: '44%' }} 
                      mode="calendar" 
                      minimumDate={startDate} 
                      selected={date} 
                      onDateChange={handleChangeOne}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{ setModalOpen(false); setShowModalOpen(false); setShowModalOpenOne(false); }}>
                        <View style={{ backgroundColor: '#E34234', borderRadius: 14, alignItems: 'center', display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto', marginTop: 170, marginRight: 6, width: 30, height: 30 }}>
                            <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', paddingTop: 0, paddingBottom: 6, fontSize: 16 }}>x</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        </ScrollView>
      </>
  );
}

export default BookAppointmentCalendarModalScreen;