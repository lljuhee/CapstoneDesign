import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const ReservationInquiry = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: theme.main, margin: 0 }}>
      <View
        style={{
          flex: 3,
          borderColor: theme.main,
          borderRadius: 5,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          backgroundColor: theme.background,
        }}
      >
        <Text style={{ fontSize: 16 }}>현재 예약 내역이 없습니다. </Text>
      </View>

      <View
        style={{
          height: 40,
          backgroundColor: theme.gray_0,
          justifyContent: 'center',
          padding: 10,
        }}
      >
        <Text>지난 예약 내역</Text>
      </View>

      <View style={{ flex: 8, backgroundColor: theme.background }}></View>

      <StatusBar style="auto" />
    </View>
  );
};

export default ReservationInquiry;
