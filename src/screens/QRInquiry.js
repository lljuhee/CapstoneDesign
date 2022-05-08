import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from 'styled-components/native';
import QRCode from 'react-native-qrcode-svg';

const QRInquiry = ({}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, backgroundColor: theme.main }}>
      <View
        style={{
          flex: 1,
          borderColor: theme.main,
          borderRadius: 5,
          borderWidth: 1,
          margin: 50,
          backgroundColor: theme.background,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            borderColor: theme.gray_1,
            borderRadius: 5,
            borderWidth: 2,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <QRCode value="http://awesome.link.qr" size={200} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            borderColor: theme.gray_1,
            borderRadius: 5,
            borderWidth: 2,
            margin: 10,
          }}
        >
          <Text>예약 정보</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default QRInquiry;
