import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';

const DigitalMarketingBannerData = () => {
  return (
        <>
            <View style={styles.pricingPlansviewOne}>
              <ImageBackground
                source={require("../assets/PricingPlans/PricingPlansBgImg.jpg")}
                alt="Pricing Plans" 
                title="Pricing Plans" 
                resizeMode="stretch"
                style={[styles.pricingPlansImg,styles.pricingPlansviewOne]}>
                  <Text style={styles.pricingPlanMainText}>
                    PRICING PLANS
                  </Text>
                  <Text style={styles.pricingPlansSubTextOne}>
                    No Hidden Charges!
                  </Text>
                  <Text style={styles.pricingPlansSubTextOne}>
                    Choose Your Plan.
                  </Text>
                </ImageBackground>
            </View>
        </>
  );
}

const styles = StyleSheet.create(
    {
      pricingPlansviewOne:
      {
          backgroundColor: '#272727',
          opacity: 1,
          transition: 0.3, 
          borderRadius: 0.3,
          marginBottom: 20
      },
      pricingPlansImg: 
      {
          width: 400,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center'
      },
      pricingPlanMainText:
      {
        color: '#FF0053',
        textAlign: 'center',
        fontSize: 34,
        fontWeight: 'bold',
        opacity: 0.98,
        marginBottom: 10
      },
      pricingPlansSubTextOne:
      {
        color: '#FFF',
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center'
      }
    }
);

export default DigitalMarketingBannerData;