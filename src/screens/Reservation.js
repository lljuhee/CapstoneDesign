import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Reservation = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>날짜 선택</Text>
        <StatusBar style="auto" />     
      </View>
    );
  }
  
  export default Reservation;