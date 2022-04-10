import React from 'react';
import { Button, Image, Input } from '../components';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const InfoInput = ({ navigation }) => {
      return (
        <Container>

          <Input
            label="Name"
            placeholder="Name"
          />
          <Input
            label="Student ID"
            placeholder="Student ID"
          />
           <Input
            label="Phone Number"
            placeholder="Phone Number"
          />
           <Input
            label="Member"
            placeholder="Member"
          />
           <Input
            label="Purpose"
            placeholder="Purpose"
          />

          <Button title = "예약하기" onPress={() => navigation.push('')}/>
          <StatusBar style="auto" />
        </Container>
      );
   
    };
   
    export default InfoInput;