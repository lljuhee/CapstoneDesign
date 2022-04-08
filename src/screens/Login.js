import React from 'react';
import { Button, Image, Input } from '../components';
import { TextInput, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const LOGO = 'https://firebasestorage.googleapis.com/v0/b/capstone-7bc19.appspot.com/o/dku_logo.png?alt=media';

const Login = ({ navigation }) => {
      return (
        <Container>
          <Image url = {LOGO} />
          <Text>DKU 스터디룸 예약 시스템 </Text>

          <Input
            label="Student ID"
            placeholder="Student ID"
            returnKeyType="next"
          />
          <Input
            label="Password"
            placeholder="Password"
            returnKeyType="done"
            isPassword={true}
          />

          <Button title = "Sign In" onPress={() => navigation.push('Home')}/>
          <StatusBar style="auto" />
        </Container>
      );
   
    };
   
    export default Login;