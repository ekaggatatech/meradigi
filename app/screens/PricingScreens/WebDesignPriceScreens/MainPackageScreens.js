import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DigitalMarketingPricingPlansScreen from '../DigitalMarketingPricingPlansScreen/DigitalMarketingPricingPlansScreen';
import OdooPricingPlansScreen from '../OdooPricingPlansScreen/OdooPricingPlansScreen';
import WebDevelopmentPricingPlansScreen from '../WebDevelopmentPricingPlansScreen/WebDevelopmentPricingPlansScreen';

const Tab = createBottomTabNavigator();

const MobileAppPackage = () => 
{
  return (
    <>
        <Tab.Navigator 
          screenOptions={() => ({ 
            headerShown: false, 
            tabBarLabelStyle: 
            {
              fontWeight: "600",
              fontSize: 12,
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              textAlignVertical: 'center',
              textAlign: 'center',
              letterSpacing: 0.4
            },
            tabBarIconStyle: { display: "none" },
            tabBarActiveTintColor: '#0275d8',
            tabBarInactiveTintColor: '#000000',
            // tabBarStyle: { color: '#0275d8'},
            // tabBarLabelPosition: "beside-icon",
        })}>
            <Tab.Screen 
              name='DIGITAL MARKETING' 
              component={DigitalMarketingPricingPlansScreen} 
              /* options={{ 
                tabBarLabel: "DIGITAL MARKETING", 
                tabBarVisible: true, 
                // tabBarButton: () => null 
              }} 
              tabBarOptions={{
                labelStyle: {
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  textAlignVertical: 'center',
                }
              }} */
              /> 
            <Tab.Screen name='ODOO' component={OdooPricingPlansScreen} />
            <Tab.Screen name='WEB DEVELOPMENT' component={WebDevelopmentPricingPlansScreen} />
        </Tab.Navigator>
    </>
  );
}

export default MobileAppPackage;