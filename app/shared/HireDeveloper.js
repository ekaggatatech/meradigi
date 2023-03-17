import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const HireDeveloper = () => {
  return (
    <>
      <ScrollView nestedScrollEnabled={true} style={styles.container}>
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', marginTop: 0, paddingTop: 0 }}>

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