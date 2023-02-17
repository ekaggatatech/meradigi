import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DigitalMarketingPricingPlansScreen from '../DigitalMarketingPricingPlansScreen/DigitalMarketingPricingPlansScreen';
import OdooPricingPlansScreen from '../OdooPricingPlansScreen/OdooPricingPlansScreen';
import WebDevelopmentPricingPlansScreen from '../WebDevelopmentPricingPlansScreen/WebDevelopmentPricingPlansScreen';

const Tab = createBottomTabNavigator();

const MobileAppPackage = () => 
{
  return (
    <>
      <NavigationContainer independent={true} style={{ backgroundColor: '#FFFFFF', background: '#FFFFFF' }}>
        <Tab.Navigator 
          screenOptions={() => ({ 
              headerShown: false, 
              tabBarLabelStyle: 
              {
                fontWeight: "bold",
                fontSize: 12,
                textAlignVertical: 'center',
                textAlign: 'center',
                letterSpacing: 0.4,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0 
              },
              tabBarIconStyle: { display: "none" },
              tabBarActiveTintColor: '#FE0629',
              tabBarInactiveTintColor: '#060606',
              tabBarIndicatorStyle: { backgroundColor: '#FE0629' }
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
      </NavigationContainer>
    </>
  );
}

export default MobileAppPackage;