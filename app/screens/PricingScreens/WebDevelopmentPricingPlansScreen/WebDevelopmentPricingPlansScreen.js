import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text } from "react-native";
import DigitalMarketingBannerData from '../../../shared/DigitalMarketingBannerData';

const WebDevelopmentPricingPlansScreen = () => {
  return (
    <>
      <ScrollView nestedScrollEnabled={true}>
        <SafeAreaView> 
            <DigitalMarketingBannerData />
            <View>
              <Text>

              </Text>
            </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create(
{

}
);

export default WebDevelopmentPricingPlansScreen;