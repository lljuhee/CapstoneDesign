import React, { useContext } from 'react';
import { Button, Image, Input } from '../components';
import { Text } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const LOGO =
  'https://firebasestorage.googleapis.com/v0/b/capstone-7bc19.appspot.com/o/lib_logo.JPG?alt=media';

const Home = ({ navigation, route }) => {
  const theme = useContext(ThemeContext);
  console.log(route.params);
  return (
    <Container>
      <Image
        url={LOGO}
        style={{ width: 300, height: 70, resizeMode: 'contain' }}
      />
      <Text
        style={{
          color: theme.main,
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        }}
      >
        스터디룸
      </Text>
      <Button
        title="예약하기"
        onPress={() => navigation.push('SelectDate')}
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
