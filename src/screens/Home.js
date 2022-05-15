import React, { useContext, useState } from 'react';
import { Button, Image } from '../components';
import { View, Alert } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { createReservation } from '../firebase';
import { getAuth } from 'firebase/auth';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const LOGO =
  'https://firebasestorage.googleapis.com/v0/b/capstone-7bc19.appspot.com/o/lib_logo.png?alt=media&';

const Home = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const auth = getAuth();
  const user = auth.currentUser;

  const _handleReservationBtnPress = async () => {
    try {
      const id = await createReservation({
        studentid: user.email.substring(0, 8),
      });
      navigation.navigate('SelectDate', { user, id });
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };
  return (
    <Container>
      <Image
        url={LOGO}
        style={{ width: 360, height: 100, resizeMode: 'contain', margin: 10 }}
      />
      <View style={{ margin: 45 }}></View>
      <Button
        title="예약하기"
        onPress={_handleReservationBtnPress}
        textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
      />
      <Button
        title="예약조회"
        onPress={() => navigation.push('ReservationInquiry')}
        textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
      />
      <Button
        title="QR코드조회"
        onPress={() => navigation.push('QRInquiry')}
        textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
      />
      <StatusBar style="auto" />
    </Container>
  );
};

export default Home;
