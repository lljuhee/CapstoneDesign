import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ReservationInquiry = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>예약조회</Text>
        <StatusBar style="auto" />     
      </View>
    );
  }
  
  export default ReservationInquiry;