import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome, Feather, MaterialIcons, FontAwesome5, Entypo, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = ({props}) => 
{
  const navigation = useNavigation();
  const [focus, setFocus] = useState('1');
  const [nestedDrawerItem, setNestedDrawerItem] = useState(false);
  const NestedDrawerItemFun = () => {
    if(nestedDrawerItem==true)
    {
        setNestedDrawerItem(false);
    }
    else
    {
        setNestedDrawerItem(true);
    }
  }
  const [nestedDrawerItemOne, setNestedDrawerItemOne] = useState(false);
  const NestedDrawerItemOneFun = () => {
    if(nestedDrawerItemOne==true)
    {
        setNestedDrawerItemOne(false);
    }
    else
    {
        setNestedDrawerItemOne(true);
    }
  }
  /* const [menuPress, setMenuPress] = useState(false);
  const toggleMenuPress = () => {
    setMenuPress(!menuPress)
  } */
  return (
   <>
    <View style={{ flex: 1 }}>
        <DrawerContentScrollView 
            {...props}
            contentContainerStyle={{ backgroundColor: '#FFFFFF' }}>
            {/* <ImageBackground source={require('../assets/banner/people-holding-icons-digital-brands.jpg')} style={{ padding: 20 }}> */}
                <View style={{ backgroundColor: 'transparent' }}>
                    <View style={{ display:'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Image source={require('../assets/meradigi_5_180x60.png')} alt='MeraDigi' title='MeraDigi' />
                    </View>
                    <View style={{ flexDirection: 'row', padding: 20 }}>
                        <Image source={require('../assets/Home/user.png')} style={{ width: 60, height: 60, borderRadius: 40 }}></Image>
                        <Text style={{ color: '#cb202d', fontSize: 14, fontWeight: 'bold', letterSpacing: 0.1, textAlignVertical: 'bottom', paddingBottom: 5, paddingLeft: 5 }}>
                            User/Profile Name
                        </Text>
                    </View>
                </View>
                <View style={{ display: 'flex', backgroundColor: '#FFFFFF' }}>
                    {/* <DrawerItemList {...props} /> */}
                    {/* <Drawer.Section> */}
                        <DrawerItem 
                            /* activeTintColor={'#FFFFFF'}
                            inactiveTintColor={'#cb202d'}
                            activeBackgroundColor={'#cb202d'}
                            inactiveBackgroundColor={'#FFFFFF'} */
                            focused={focus == 1 ? true : false}
                            icon={({ color, size, focused }) => (
                                <AntDesign name="home" color={'#cb202d'} size={22} />
                            )}
                            label={({ focused, color })=><Text style={{ color: "#cb202d" }}>Home</Text>}
                            onPress={()=>{
                                setFocus(1);
                                navigation.navigate('HomePage');
                                // toggleMenuPress
                            }}
                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, color: '#cb202d', marginBottom: 0 }}
                            // style={{ backgroundColor: menuPress ? "#cb202d" : "#FFFFFF", color: menuPress ? "#FFFFFF" : "#cb202d" }}
                        />
                        <DrawerItem 
                            focused={focus == 1 ? true : false}
                            icon={({ color, size, focused }) => (
                                <Ionicons name="open-outline" color={'#cb202d'} size={22} />
                            )}
                            label={
                                ({focused,color})=>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                                    <Text
                                    style={{ color: '#cb202d' }}>Our Services</Text>
                                    { nestedDrawerItem == true &&
                                        (<AntDesign name="up" color={'#cb202d'} size={14} style={{ alignItems: 'center', marginLeft: 50 }} />)
                                    }
                                    { nestedDrawerItem == false &&
                                        (<AntDesign name="down" color={'#cb202d'} size={14} style={{ alignItems: 'center', marginLeft: 50 }} />)
                                    }
                                </View>
                            }
                            onPress={()=>{setFocus(1);NestedDrawerItemFun();}}
                            style={{backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0}}
                        />
                        {
                            nestedDrawerItem == true &&
                            <>
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <AntDesign name="mobile1" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Get A Mobile App</Text>} 
                                    onPress={()=>navigation.navigate('Get A Mobile App')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <MaterialCommunityIcons name="web" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>I Want A Very Fast Website</Text>} 
                                    onPress={()=>navigation.navigate('I Want A Very Fast Website')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <AntDesign name="google" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Rank My Website On Google</Text>} 
                                    onPress={()=>navigation.navigate('Rank My Website On Google')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <AntDesign name="youtube" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Make Me Popular On Youtube</Text>} 
                                    onPress={()=>navigation.navigate('Make Me Popular On Youtube')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <SimpleLineIcons name="social-facebook" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Make My Videos Popular On Facebook</Text>} 
                                    onPress={()=>navigation.navigate('Make My Videos Popular On Facebook')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <AntDesign name="instagram" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Make My Videos Popular On Instagram</Text>} 
                                    onPress={()=>navigation.navigate('Make My Videos Popular On Instagram')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <Feather name="radio" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Advertise On Radio</Text>} 
                                    onPress={()=>navigation.navigate('Advertise On Radio')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <Ionicons name="person-outline" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Hire A Celebrity</Text>} 
                                    onPress={()=>navigation.navigate('Hire A Celebrity')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <Ionicons name="md-settings-outline" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Odoo ERP Implementation</Text>} 
                                    onPress={()=>navigation.navigate('Odoo ERP Implementation')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <MaterialIcons name="developer-mode" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Moodle LMS Development</Text>} 
                                    onPress={()=>navigation.navigate('Moodle LMS Development')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <Feather name="video" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Add Audio/Video Feature In My Website</Text>} 
                                    onPress={()=>navigation.navigate('Add Audio/Video Feature In My Website')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <AntDesign name="barschart" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Make My Product Famous</Text>} 
                                    onPress={()=>navigation.navigate('Make My Product Famous')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                {/* <DrawerItem 
                                    icon={({ color, size, focused }) => ( <FontAwesome5 name="digital-ocean" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Digital Marketing</Text>} 
                                    onPress={()=>navigation.navigate('Digital Marketing')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                /> */}
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <FontAwesome5 name="digital-ocean" color={'#cb202d'} size={22} /> )} 
                                    // label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Digital Marketing</Text>} 
                                    label={
                                        ({ focused, color })=>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text 
                                            //style={{color}}
                                            style={{ color: '#cb202d', fontSize: 14 }}>Digital Marketing</Text>
                                            { 
                                                nestedDrawerItemOne == true &&
                                                (<AntDesign name="up" color={'#cb202d'} size={14} style={{ alignItems: 'center', marginLeft: 25 }} />)
                                            }
                                            { 
                                                nestedDrawerItemOne == false &&
                                                (<AntDesign name="down" color={'#cb202d'} size={14} style={{ alignItems: 'center', marginLeft: 25 }} />)
                                            }
                                        </View>
                                    }
                                    onPress={()=> {
                                        setFocus(1);
                                        NestedDrawerItemOneFun();
                                        navigation.navigate('Digital Marketing');
                                    }}
                                    style={{backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0}}
                                />
                                {
                                    nestedDrawerItemOne == true &&
                                    <>
                                        <DrawerItem 
                                            icon={({ color, size, focused }) => ( <Ionicons name="ios-search-outline" color={'#cb202d'} size={22} /> )} 
                                            label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Search Engine Optimization</Text>} 
                                            onPress={()=>navigation.navigate('Search Engine Optimization')}
                                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                        />
                                        <DrawerItem 
                                            icon={({ color, size, focused }) => ( <MaterialCommunityIcons name="google-ads" color={'#cb202d'} size={22} /> )} 
                                            label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Google Ads</Text>} 
                                            onPress={()=>navigation.navigate('Google Ads')}
                                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                        />
                                        <DrawerItem 
                                            icon={({ color, size, focused }) => ( <MaterialCommunityIcons name="advertisements" color={'#cb202d'} size={22} /> )} 
                                            label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Social Media Ads</Text>} 
                                            onPress={()=>navigation.navigate('Social Media Ads')}
                                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                        />
                                        <DrawerItem 
                                            icon={({ color, size, focused }) => ( <Feather name="radio" color={'#cb202d'} size={22} /> )} 
                                            label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Radio Advertisement</Text>} 
                                            onPress={()=>navigation.navigate('Advertise On Radio')}
                                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                        />
                                        {/* <DrawerItem 
                                            icon={({ color, size, focused }) => ( <Ionicons name="person-outline" color={'#cb202d'} size={22} /> )} 
                                            label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Celebrity Marketing</Text>} 
                                            onPress={()=>navigation.navigate('Hire A Celebrity')}
                                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                        /> */}
                                        <DrawerItem 
                                            icon={({ color, size, focused }) => ( <MaterialIcons name="content-copy" color={'#cb202d'} size={22} /> )} 
                                            label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Content Generation & Marketing</Text>} 
                                            onPress={()=>navigation.navigate('Content Generation & Marketing')}
                                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                        />
                                        <DrawerItem 
                                            icon={({ color, size, focused }) => ( <MaterialIcons name="content-copy" color={'#cb202d'} size={22} /> )} 
                                            label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Bring Your Business Online</Text>} 
                                            // onPress={()=>navigation.navigate('Content Generation & Marketing')}
                                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                        />
                                    </>
                                }
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <MaterialIcons name="miscellaneous-services" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>I Want An Annual Maintenance Plan</Text>} 
                                    onPress={()=>navigation.navigate('I Want An Annual Maintenance Plan')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0  }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <FontAwesome  name="server" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Get A Best Hosting Plan</Text>} 
                                    onPress={()=>navigation.navigate('Get A Best Hosting Plan')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0 }}
                                />
                                <DrawerItem 
                                    icon={({ color, size, focused }) => ( <Entypo name="code" color={'#cb202d'} size={22} /> )} 
                                    label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Hire A Freelancer</Text>} 
                                    onPress={()=>navigation.navigate('Hire A Freelancer')}
                                    style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0 }}
                                />
                            </>
                        }
                        <DrawerItem 
                            focused={focus == 1 ? true : false}
                            icon={({ color, size, focused }) => (
                                <AntDesign name="tago" color={'#cb202d'} size={22} />
                            )}
                            label={({focused,color})=><Text style={{ color: '#cb202d' }}>Pricing</Text>}
                            onPress={()=>{
                                setFocus(1);
                                navigation.navigate('Pricing Plans');
                            }}
                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0 }}
                        />
                        <DrawerItem 
                            focused={focus == 1 ? true : false}
                            icon={({ color, size, focused }) => (
                                <AntDesign name="info" color={'#cb202d'} size={22} />
                            )}
                            label={({ focused, color })=><Text style={{ color: '#cb202d' }}>About Us</Text>}
                            onPress={()=>{
                                setFocus(1);
                                navigation.navigate('About Us');
                            }}
                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0 }}
                        />
                        {/* <DrawerItem 
                            focused={focus == 1 ? true : false}
                            icon={({ color, size, focused }) => (
                                <AntDesign name="phone" color={'#cb202d'} size={22} />
                            )}
                            label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Contact Us</Text>}
                            onPress={()=>{
                                setFocus(1);
                                navigation.navigate('Contact Us');
                            }}
                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0 }}
                        /> */}
                        <DrawerItem 
                            focused={focus == 1 ? true : false}
                            icon={({ color, size, focused }) => (
                                <AntDesign name="phone" color={'#cb202d'} size={22} />
                            )}
                            label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Free Consultation</Text>}
                            onPress={()=>{
                                setFocus(1);
                                navigation.navigate('Free Consultation');
                            }}
                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0 }}
                        />
                        <DrawerItem 
                            focused={focus == 1 ? true : false}
                            icon={({ color, size, focused }) => (
                                <AntDesign name="user" color={'#cb202d'} size={22} />
                            )}
                            label={({ focused, color })=><Text style={{ color: '#cb202d' }}>Log In</Text>}
                            onPress={()=>{
                                setFocus(1);
                                navigation.navigate('Log In');
                            }}
                            style={{ backgroundColor: '#FFFFFF', borderColor: '#cb202d', borderWidth: 0, borderRadius: 8, marginBottom: 0 }}
                        />
                    {/* </Drawer.Section> */}
                </View>
            {/* </ImageBackground> */}
        </DrawerContentScrollView>
        {/* <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#CCC' }}>
            <TouchableOpacity onPress={()=>{}} style={{ paddingVertical: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='logout' size={22} />
                    <Text style={{ fontWeight: 'bold', fontSize: 14, letterSpacing: 0.1, marginLeft: 10 }}>
                        Log Out
                    </Text>
                </View>
            </TouchableOpacity>
        </View> */}
    </View>
   </>
  )
};

export default CustomDrawer;