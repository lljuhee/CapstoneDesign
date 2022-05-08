import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={styles.dateText}>2022.05.30</Text>
          <Text style={styles.timeText}>13:00~16:00</Text>
          <Text style={styles.roomText}>스터디룸 4-2</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 10,
  },
  timeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
    margin: 10,
  },
  roomText: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
  },
});

export default QRInquiry;
