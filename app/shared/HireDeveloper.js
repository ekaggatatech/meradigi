import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text } from 'react-native';

const HireDeveloper = () => {
  return (
    <>
      <ScrollView nestedScrollEnabled={true} style={styles.container}>
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', marginTop: 0, paddingTop: 0 }}>
          <View style={{ marginTop: 20 }}>
            <Text style={{ textAlign: 'center' }}>
              Tell us what you need done
            </Text>
          </View>
          <View>
            <Text style={{ textAlign: 'center' }}>
              Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.
            </Text>
          </View>
          <View style={{ }}>
            
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create
(
{
  container:
  {
    width: '100%', 
    height: 'auto', 
    borderRadius: 0,
    paddingTop: 0,
    backgroundColor: '#FFFFFF'
  }
}
);

export default HireDeveloper;