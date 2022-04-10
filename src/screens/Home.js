import React from 'react';
import {Button, Image, Input} from '../components';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const LOGO = 'https://firebasestorage.googleapis.com/v0/b/capstone-7bc19.appspot.com/o/dku_logo.png?alt=media';

const Home = ({ navigation }) => {
    return (
      <Container>
        <Image url = {LOGO} />
        <Text>DKU 스터디룸</Text>
        <Button title = "예약하기" onPress={() => navigation.push('SelectDate')}/>
        <Button title = "예약조회" onPress={() => navigation.push('ReservationInquiry')}/>
        <Button title = "QR코드조회" onPress={() => navigation.push('QRInquiry')}/>
        <StatusBar style="auto" />
      </Container>
    );
  };

  export default Home;