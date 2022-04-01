import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const QRInquiry = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>QR코드조회</Text>
        <StatusBar style="auto" />     
      </View>
    );
  }
  
  export default QRInquiry;