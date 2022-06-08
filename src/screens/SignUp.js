import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Button } from '../components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const SelectTime = ({ navigation }) => {
  return (
    <Container>
      <Text>회원가입 </Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default SelectTime;
