import React from "react";
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => 
{
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
                            Profile Name
                        </Text>
                    </View>
                </View>
                <View style={{ display: 'flex', backgroundColor: '#FFFFFF' }}>
                    <DrawerItemList {...props} />
                </View>
            {/* </ImageBackground> */}
        </DrawerContentScrollView>
        {/* <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#CCC' }}>
            <TouchableOpacity onPress={()=>{}} style={{ paddingVertical: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='logout' size={22} />
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