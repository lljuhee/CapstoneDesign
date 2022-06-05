import React, { useContext, useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from 'styled-components/native';
import QRCode from 'react-native-qrcode-svg';
import { initializeApp } from 'firebase/app';
import config from '../../firebase.json';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

const QRInquiry = ({}) => {
  const theme = useContext(ThemeContext);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [room, setRoom] = useState();

  const getDate = async () => {
    const app = initializeApp(config);
    const db = getFirestore(app);
    const reservationCollection = collection(db, 'Reservations');
    const ReservationRef = doc(reservationCollection, '1');

    const docSnap = await getDoc(ReservationRef);
    if (docSnap.exists()) {
      setDate(docSnap.data().Date);
      setTime(docSnap.data().Time);
      setRoom(docSnap.data().StudyRoom);
    } else {
      setRoom('현재 예약 내역이 없습니다.');
    }
  };
  useEffect(async () => {
    await getDate();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: theme.main }}>
      <View
        style={{
          flex: 1,
          borderColor: theme.main,
          borderRadius: 20,
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
            borderRadius: 20,
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
            borderRadius: 20,
            borderWidth: 2,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={styles.dateText}>{date}</Text>
          <Text style={styles.timeText}>{time}</Text>
          <Text style={styles.roomText}>{room}</Text>
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
